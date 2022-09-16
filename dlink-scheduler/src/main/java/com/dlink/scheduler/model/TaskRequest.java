package com.dlink.scheduler.model;

import com.dlink.scheduler.enums.Flag;
import com.dlink.scheduler.enums.Priority;
import com.dlink.scheduler.enums.TaskExecuteType;
import com.dlink.scheduler.enums.TaskTimeoutStrategy;
import com.dlink.scheduler.enums.TimeoutFlag;

import javax.validation.constraints.NotNull;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class TaskRequest {
    @ApiModelProperty(value = "编号")
    private Long code;

    @ApiModelProperty(value = "名称")
    private String name;

    @ApiModelProperty(value = "描述")
    private String description;

    @ApiModelProperty(value = "环境编号")
    private Long environmentCode;

    @ApiModelProperty(value = "延迟执行时间")
    private Integer delayTime;

    @ApiModelProperty(value = "重试间隔")
    private Integer failRetryInterval;

    @ApiModelProperty(value = "重试次数")
    private Integer failRetryTimes;

    @ApiModelProperty(value = "运行标志 yes 正常/no 禁止执行")
    private Flag flag;

    @ApiModelProperty(value = "任务参数 默认DINKY参数")
    private String taskParams;

    @NotNull
    @ApiModelProperty(value = "优先级")
    private Priority taskPriority;

    @ApiModelProperty(value = "任务类型 默认DINKY")
    private String taskType = "DINKY";

    @ApiModelProperty(value = "超时时间(分钟)")
    private Integer timeout;

    @ApiModelProperty(value = "超时告警")
    private TimeoutFlag timeoutFlag;

    @ApiModelProperty(value = "超时通知策略")
    private TaskTimeoutStrategy timeoutNotifyStrategy;

    @ApiModelProperty(value = "worker分组 默认default")
    private String workerGroup = "default";

    @ApiModelProperty(value = "cpu 配额 默认-1")
    private Integer cpuQuota = -1;

    @ApiModelProperty(value = "最大内存 默认-1")
    private Integer memoryMax = -1;

    @ApiModelProperty(value = "执行类型 默认BATCH")
    private TaskExecuteType taskExecuteType = TaskExecuteType.BATCH;

}
