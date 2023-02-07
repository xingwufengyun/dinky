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

package org.dinky.process.pool;

import org.dinky.pool.AbstractPool;

/**
 * ConsolePool
 *
 * @author wenmo
 * @since 2022/10/18 22:51
 */
public class ConsolePool extends AbstractPool<String, StringBuilder> {

    public static final ConsolePool INSTANCE = new ConsolePool();

    public static ConsolePool getInstance() {
        return INSTANCE;
    }

    public static void write(String str, Integer userId) {
        String user = String.valueOf(userId);
        INSTANCE.computeIfAbsent(user, k -> new StringBuilder("Dinky User Console:")).append(str);
    }

    public static void clear(Integer userId) {
        String user = String.valueOf(userId);
        INSTANCE.put(user, new StringBuilder("Dinky User Console:"));
    }
}
