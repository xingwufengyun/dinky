/*
 *
 *   Licensed to the Apache Software Foundation (ASF) under one or more
 *   contributor license agreements.  See the NOTICE file distributed with
 *   this work for additional information regarding copyright ownership.
 *   The ASF licenses this file to You under the Apache License, Version 2.0
 *   (the "License"); you may not use this file except in compliance with
 *   the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */

import {Divider, Tag} from "antd";
import {ProFormGroup, ProFormSelect} from "@ant-design/pro-components";
import {l} from "@/utils/intl";
import React from "react";

const FlinkKubernetesOperator = () => {
    return <>
        <Divider>{l('rc.cc.k8sConfig')}</Divider>
        <ProFormGroup>
            <ProFormSelect
                name={'flinkVersion'}
                label={l('rc.cc.k8s.version')}
                width="md"
                rules={[{required: true, message: l('rc.cc.k8s.version.placeholder')}]}
                placeholder={l('rc.cc.k8s.version.placeholder')}
                options={[
                    {label: '1.13', value: 'v1_13'},
                    {label: '1.14', value: 'v1_14'},
                    {label: '1.15', value: 'v1_15'},
                    {label: '1.16', value: 'v1_16'},
                    {label: '1.17', value: 'v1_17'},
                    {label: '1.18', value: 'v1_18',disabled:true},
                ]}
            />


        </ProFormGroup>
    </>
}


export default FlinkKubernetesOperator;