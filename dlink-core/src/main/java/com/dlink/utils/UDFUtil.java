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

package com.dlink.utils;

import static com.dlink.constant.PathConstant.UDF_JAR_RULE;
import static com.dlink.constant.PathConstant.UDF_JAR_TMP_PATH;
import static com.dlink.constant.PathConstant.UDF_VERSION_RULE;

import com.dlink.api.FlinkAPI;
import com.dlink.constant.PathConstant;
import com.dlink.pool.ClassEntity;
import com.dlink.pool.ClassPool;

import java.io.InputStream;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.codehaus.groovy.control.CompilerConfiguration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.JsonNode;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.convert.Convert;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.map.MapUtil;
import cn.hutool.core.util.ReUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.crypto.digest.MD5;
import groovy.lang.GroovyClassLoader;

/**
 * UDFUtil
 *
 * @author wenmo
 * @since 2021/12/27 23:25
 */
@SuppressWarnings("AlibabaClassNamingShouldBeCamel")
public class UDFUtil {
    private static final Logger log = LoggerFactory.getLogger(UDFUtil.class);

    public static void buildClass(String code) {
        CustomStringJavaCompiler compiler = new CustomStringJavaCompiler(code);
        boolean res = compiler.compiler();
        if (res) {
            String className = compiler.getFullClassName();
            byte[] compiledBytes = compiler.getJavaFileObjectMap(className).getCompiledBytes();
            ClassPool.push(new ClassEntity(className, code, compiledBytes));
            System.out.println("编译成功");
            System.out.println("compilerTakeTime：" + compiler.getCompilerTakeTime());
            initClassLoader(className);
        } else {
            System.out.println("编译失败");
            System.out.println(compiler.getCompilerMessage());
        }
    }

    public static void initClassLoader(String name) {
        ClassEntity classEntity = ClassPool.get(name);
        ClassLoader contextClassLoader = Thread.currentThread().getContextClassLoader();
        CompilerConfiguration config = new CompilerConfiguration();
        config.setSourceEncoding("UTF-8");
        GroovyClassLoader groovyClassLoader = new GroovyClassLoader(contextClassLoader, config);
        groovyClassLoader.setShouldRecompile(true);
        groovyClassLoader.defineClass(classEntity.getName(), classEntity.getClassByte());
        Thread.currentThread().setContextClassLoader(groovyClassLoader);
        //Class<?> clazz = groovyClassLoader.parseClass(codeSource,"com.dlink.ud.udf.SubstringFunction");
    }


    private static final Map<String, Integer> UDF_MD5_MAP = new HashMap<>();

    public static Map<String, List<String>> buildJar(List<String> codeList) {
        List<String> successList = new ArrayList<>();
        List<String> failedList = new ArrayList<>();
        String tmpPath = PathConstant.UDF_PATH;
        String udfJarPath = PathConstant.UDF_JAR_TMP_PATH;
        //删除jar缓存
        FileUtil.del(udfJarPath);
        codeList.forEach(code -> {
            CustomStringJavaCompiler compiler = new CustomStringJavaCompiler(code);
            boolean res = compiler.compilerToTmpPath(tmpPath);
            String className = compiler.getFullClassName();
            if (res) {
                log.info("class编译成功:{}" + className);
                log.info("compilerTakeTime：" + compiler.getCompilerTakeTime());
                successList.add(className);
            } else {
                log.warn("class编译失败:{}" + className);
                log.warn(compiler.getCompilerMessage());
                failedList.add(className);
            }
        });
        String[] clazzs = successList.stream().map(className -> StrUtil.replace(className, ".", "/") + ".class").toArray(String[]::new);
        InputStream[] fileInputStreams = successList.stream().map(className -> tmpPath + StrUtil.replace(className, ".", "/") + ".class")
            .map(FileUtil::getInputStream).toArray(InputStream[]::new);
        // 编译好的文件打包jar
        try (ZipUtils zipWriter = new ZipUtils(FileUtil.file(udfJarPath), Charset.defaultCharset())){
            zipWriter.add( clazzs, fileInputStreams);
        }
        String md5 = md5sum(udfJarPath);
        return MapUtil.builder("success", successList).put("failed", failedList).put("md5", Collections.singletonList(md5)).build();
    }

    /**
     * 得到udf版本和构建jar
     *
     * @param codeList 代码列表
     * @return {@link java.lang.String}
     */
    public static String getUdfNameAndBuildJar(List<String> codeList) {
        // 1. 检查所有jar的版本，通常名字为 udf-${version}.jar;如 udf-1.jar,没有这个目录则跳过
        String md5 = buildJar(codeList).get("md5").get(0);
        if (!FileUtil.exist(PathConstant.UDF_PATH)) {
            FileUtil.mkdir(PathConstant.UDF_PATH);
        }

        try {
            // 获取所有的udf jar的 md5 值，放入 map 里面
            if (UDF_MD5_MAP.isEmpty()) {
                scanUDFMD5();
            }
            //2. 如果有匹配的，返回对应udf 版本，没有则构建jar，对应信息写入 jar
            if (UDF_MD5_MAP.containsKey(md5)) {
                FileUtil.del(UDF_JAR_TMP_PATH);
                return StrUtil.format("udf-{}.jar", UDF_MD5_MAP.get(md5));
            }
            // 3. 生成新版本jar
            Integer newVersion = UDF_MD5_MAP.values().size() > 0 ? CollUtil.max(UDF_MD5_MAP.values()) + 1 : 1;
            String jarName = StrUtil.format("udf-{}.jar", newVersion);
            String newName = PathConstant.UDF_PATH + jarName;
            FileUtil.rename(FileUtil.file(PathConstant.UDF_JAR_TMP_PATH), newName, true);
            UDF_MD5_MAP.put(md5, newVersion);
            return jarName;
        } catch (Exception e) {
            log.warn("builder jar failed! please check env. msg:{}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public static void uploadFlinkJar(String address, String filename) {
        FlinkAPI flinkAPI = FlinkAPI.build(address);
        JsonNode jarsList = flinkAPI.getJarsList();
        boolean isUpload = true;
        JsonNode files = jarsList.findValue("files");
        if (!files.isEmpty()) {
            for (JsonNode jsonNode : files) {
                if (jsonNode.findValue("name").asText().equals(filename)) {
                    log.info("{}已经存在", filename);
                    isUpload = false;
                    break;
                }
            }
        }

        if (isUpload) {
            String filepath = PathConstant.UDF_PATH + filename;
            flinkAPI.uploadJar(filepath);
        }
    }

    /**
     * 扫描udf包文件，写入md5到 UDF_MD5_MAP
     */
    private static void scanUDFMD5() {
        List<String> fileList = FileUtil.listFileNames(PathConstant.UDF_PATH);
        fileList.stream()
            .filter(fileName -> ReUtil.isMatch(UDF_JAR_RULE, fileName))
            .distinct()
            .forEach(fileName -> {
                Integer version = Convert.toInt(ReUtil.getGroup0(UDF_VERSION_RULE, fileName));
                UDF_MD5_MAP.put(md5sum(PathConstant.UDF_PATH + fileName), version);
            });
    }

    private static String md5sum(String filePath) {
        return MD5.create().digestHex(FileUtil.file(filePath));
    }

}
