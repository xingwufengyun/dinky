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

package org.dinky.data.app;

import lombok.Builder;
import lombok.Data;

/**
 * Dinky configuration information passed by the submit Application task
 */
@Data
@Builder
public class AppParamConfig {
    private int taskId;
    private String url;
    private String username;
    private String password;

    @Override
    public String toString() {
        return "\nAppParamConfig{"
                + "\n  taskId=" + taskId
                + "\n, url='" + url + '\''
                + "\n, username='" + username + '\''
                + "\n, password='***********'"
                + "}";
    }
}
