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

package org.dinky.controller;

import com.fasterxml.jackson.databind.JsonNode;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.dinky.data.model.AlertGroup;
import org.dinky.data.model.AlertRule;
import org.dinky.data.result.ProTableResult;
import org.dinky.data.result.Result;
import org.dinky.service.AlertRuleService;
import org.dinky.service.impl.AlertRuleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/alertRule")
public class AlertRuleController {

    private final AlertRuleService alertRuleService;

    @PostMapping("/list")
    public ProTableResult<AlertRule> list(@RequestBody JsonNode para) {
        return alertRuleService.selectForProTable(para);
    }

    @PutMapping
    public Result<Boolean> put(@RequestBody AlertRule alertRule) {
        return Result.succeed(alertRuleService.saveOrUpdate(alertRule));
    }

    @DeleteMapping
    public Result<Boolean> delete(int id) {
        return Result.succeed(alertRuleService.removeById(id));
    }


}
