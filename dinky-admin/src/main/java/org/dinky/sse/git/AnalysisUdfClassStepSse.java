/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

package org.dinky.sse.git;

import org.dinky.function.util.UDFUtil;
import org.dinky.model.GitProject;
import org.dinky.sse.StepSse;

import java.io.File;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.lang.Dict;
import cn.hutool.json.JSONUtil;

/**
 * @author ZackYoung
 * @since 0.8.0
 */
public class AnalysisUdfClassStepSse extends StepSse {

    public AnalysisUdfClassStepSse(
            int sleep,
            List<SseEmitter> emitterList,
            Dict params,
            AtomicInteger msgId,
            AtomicInteger stepAtomic,
            ExecutorService cachedThreadPool) {
        super(
                "analysis udf class",
                sleep,
                emitterList,
                params,
                msgId,
                stepAtomic,
                cachedThreadPool);
    }

    @Override
    public void exec() {
        List<String> pathList = (List<String>) params.get("jarPath");

        Map<String, List<Class<?>>> udfMap = new ConcurrentHashMap<>(2);
        pathList.parallelStream()
                .forEach(
                        jar -> {
                            List<Class<?>> udfClassByJar = UDFUtil.getUdfClassByJar(new File(jar));
                            udfMap.put(jar, udfClassByJar);
                            sendMsg(Dict.create().set(jar, udfClassByJar));
                        });

        String data = JSONUtil.toJsonStr(new TreeMap<>(udfMap));
        sendMsg(getList(null).set("data", data));

        FileUtil.appendString(data, getLogFile(), StandardCharsets.UTF_8);

        // write result
        GitProject gitProject = (GitProject) params.get("gitProject");
        gitProject.setUdfClassMapList(data);
        gitProject.updateById();
    }
}
