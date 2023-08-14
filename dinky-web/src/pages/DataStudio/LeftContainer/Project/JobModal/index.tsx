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

import { ModalForm } from "@ant-design/pro-components";
import {Form} from "antd";
import React from "react";
import JobForm from "@/pages/DataStudio/LeftContainer/Project/JobModal/JobForm";
import {Catalogue} from "@/types/Studio/data";
import {l} from "@/utils/intl";

type JobModalProps = {
    onCancel: () => void
    onSubmit: (values: Catalogue) => void
    modalVisible: boolean
}
const JobModal:React.FC<JobModalProps> = ( props ) => {

    const {onCancel, onSubmit, modalVisible} = props;

    const [form] = Form.useForm<Catalogue>();


    return <>
        <ModalForm<Catalogue>
            title={l('datastudio.project.create.rootFolder')}
            form={form}
            open={modalVisible}
            layout={'horizontal'}
            autoFocusFirstInput
            modalProps={{destroyOnClose: true, maskClosable: false, onCancel: onCancel}}
            onFinish={async (values) => onSubmit(values)}
        >
            <JobForm />
        </ModalForm>
    </>
};


export default JobModal;