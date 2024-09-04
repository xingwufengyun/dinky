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

package org.dinky.init;

import org.dinky.data.model.SystemConfiguration;
import org.dinky.service.JobInstanceService;

import org.apache.flink.runtime.webmonitor.history.HistoryServerUtil;

import java.util.LinkedHashSet;
import java.util.Set;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import cn.hutool.core.collection.CollUtil;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class FlinkHistoryServer implements ApplicationRunner {
    public static final Set<String> HISTORY_JOBID_SET = new LinkedHashSet<>();
    private final ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(
            5, 20, 10, TimeUnit.SECONDS, new LinkedBlockingQueue<>(100), new ThreadPoolExecutor.DiscardOldestPolicy());

    private final Runnable historyRunnable;

    public FlinkHistoryServer(JobInstanceService jobInstanceService) {
        this.historyRunnable = () -> {
            HistoryServerUtil.run(
                    (jobId) -> {
                        HISTORY_JOBID_SET.add(jobId);
                        threadPoolExecutor.execute(() -> {
                            jobInstanceService.hookJobDoneByHistory(jobId);
                        });
                    },
                    SystemConfiguration.getInstances().getFlinkHistoryServerConfiguration());
        };
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        SystemConfiguration systemConfiguration = SystemConfiguration.getInstances();
        AtomicReference<Thread> historyThread = new AtomicReference<>(new Thread(historyRunnable));
        Runnable closeHistory = () -> {
            if (historyThread.get().isAlive()) {
                historyThread.get().interrupt();
                HISTORY_JOBID_SET.clear();
            }
        };
        CollUtil.newArrayList(
                        systemConfiguration.getUseFlinkHistoryServer(),
                        systemConfiguration.getFlinkHistoryServerPort(),
                        systemConfiguration.getFlinkHistoryServerArchiveRefreshInterval())
                .forEach(x -> x.addChangeEvent(d -> {
                    if (systemConfiguration.getUseFlinkHistoryServer().getValue()) {
                        closeHistory.run();
                        historyThread
                                .updateAndGet((t) -> new Thread(historyRunnable))
                                .start();
                    } else {
                        closeHistory.run();
                    }
                }));
        if (systemConfiguration.getUseFlinkHistoryServer().getValue()) {
            historyThread.get().start();
        }
    }
}
