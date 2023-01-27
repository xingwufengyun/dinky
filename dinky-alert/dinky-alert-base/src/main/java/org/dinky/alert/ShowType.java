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

package org.dinky.alert;

/**
 * ShowType
 *
 * @author wenmo
 * @since 2022/2/23 21:32
 */
public enum ShowType {
    /** markdown */
    MARKDOWN(0, "markdown"),
    /** text */
    TEXT(1, "text"),
    /** post of feishu */
    POST(2, "post"),
    /** table */
    TABLE(0, "table"),
    /** attachment */
    ATTACHMENT(3, "attachment"),
    /** table and attachment */
    TABLE_ATTACHMENT(4, "table attachment");

    private int code;
    private String value;

    ShowType(int code, String value) {
        this.code = code;
        this.value = value;
    }

    public int getCode() {
        return code;
    }

    public String getValue() {
        return value;
    }
}
