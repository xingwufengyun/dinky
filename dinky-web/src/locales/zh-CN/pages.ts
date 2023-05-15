/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default {
  'layouts.userLayout.title': 'Dinky 实时计算平台',
  'login.error': '登录失败，请重试! 原因：{msg}',
  'login.result': '{msg}\t\t{time}',
  'login.notbindtenant': '您还没有绑定租户，请联系管理员',
  'login.username.placeholder': '用户名',
  'login.username.required': '用户名是必填项！',
  'login.chooseTenant': '请选择租户',
  'login.chooseTenantFailed': '租户选择失败，请检查。。。',
  'login.chooseTenantSuccess': '{msg}，使用【 {tenantCode} 】进入系统，加载中。。。',
  'login.password.placeholder': '密码',
  'login.password.required': '密码是必填项！',
  'login.rememberMe': '自动登录',
  'admin.subPage.title': ' 这个页面只有 admin 权限才能查看',
  'about.Community': '欢迎加入 Dinky 官方社区，共建共赢',
  'about.QQcode': 'QQ官方社区群',
  'about.wechatCode': '微信公众号',
  'about.dingTalkCode': '钉钉官方社区群',
  'about.wechatApply':
    '微信用户社区群：推荐，添加微信号 wenmo_ai 邀请进群 （申请备注 Dinky + 企业名 + 职位，不写不批）',
  'about.precautions': '注意事项',
  'about.usingHelp': '使用帮助',
  'about.communityRules': '社区守则',
  'about.communityRules.1': '禁止发布或讨论与本群主旨无关或不良的内容，一经发现立马被踢。',
  'about.communityRules.2':
    '关于 Bug 反馈与功能改进或提议请通过 issue 进行，请阅读 issue 文档要求。',
  'about.communityRules.3':
    '部署和使用前请先仔细阅读 Readme、公众号文章、官网文档、B站视频。',
  'about.communityRules.4': '群提问题请礼貌并且说明【版本、执行模式、操作描述、截图】。',
  'about.communityRules.5': ' 登记谁在使用 Dinky，可进入企业用户群提供技术支持。',

  'datastudio.editor.execute.warn': '该任务执行模式为【{type}】，不支持 SQL 查询，请手动保存后使用右侧按钮——作业提交',
  'datastudio.editor.submiting': '新任务【{jobName}】正在执行',
  'datastudio.editor.exec.success': '执行成功',
  'datastudio.editor.exec.error': '执行失败',
  'datastudio.editor.async.submit': '异步提交作业',
  'datastudio.editor.async.submiting': '任务【{jobName}】正在异步提交',
  'datastudio.editor.async.submitConfirm': '确定异步提交作业【{jobName}】到其配置的集群吗？请确认您的作业是否已经被保存！',
  'datastudio.editor.async.success': '异步提交成功',
  'datastudio.editor.async.error': '异步提交失败',
  'datastudio.editor.query.explan.error': '获取作业执行计划失败，原因：\n{msg}',
  'datastudio.editor.query.ds.error': '获取海豚数据失败，原因：\n{msg}',
  'datastudio.editor.release.job': '发布作业',
  'datastudio.editor.release.jobConfirm': '确定发布作业【{jobName}】吗？请确认您的作业是否已经被保存！',
  'datastudio.editor.release.job.success': '发布作业【{jobName}】成功',
  'datastudio.editor.release.job.error': '发布作业【{jobName}】失败',
  'datastudio.editor.edit.job': '维护作业',
  'datastudio.editor.edit.jobConfirm': '确定维护作业【{jobName}】吗？',
  'datastudio.editor.edit.job.success': '维护作业【{jobName}】成功',
  'datastudio.editor.online.job': '上线作业',
  'datastudio.editor.online.jobConfirm': '确定上线作业【{jobName}】吗？',
  'datastudio.editor.online.job.success': '上线作业【{jobName}】成功',
  'datastudio.editor.online.job.error': '上线作业【{jobName}】失败,原因:\n {msg}',
  'datastudio.editor.stop.job': '停止作业',
  'datastudio.editor.stop.jobConfirm': '确定停止作业【{jobName}】吗？',
  'datastudio.editor.stop.job.success': '停止作业【{jobName}】成功',
  'datastudio.editor.stop.job.error': '停止作业【{jobName}】失败,原因:\n {msg}',
  'datastudio.editor.offline.job': '下线作业',
  'datastudio.editor.offline.jobConfirm': '确定下线作业【{jobName}】吗？',
  'datastudio.editor.offline.job.success': '下线作业【{jobName}】成功',
  'datastudio.editor.offline.job.error': '下线作业【{jobName}】失败,原因:\n {msg}',
  'datastudio.editor.delete.job': '注销作业',
  'datastudio.editor.delete.jobConfirm': '确定注销作业【{jobName}】吗？',
  'datastudio.editor.delete.job.success': '注销作业【{jobName}】成功',
  'datastudio.editor.delete.job.error': '注销作业【{jobName}】失败,原因:\n {msg}',
  'datastudio.editor.recovery.job': '恢复作业',
  'datastudio.editor.recovery.jobConfirm': '确定恢复作业【{jobName}】吗？',
  'datastudio.editor.recovery.job.success': '恢复作业【{jobName}】成功',
  'datastudio.editor.api.doc': ' API 手册',
  'datastudio.editor.usehelp': '使用帮助',
  'datastudio.editor.clearConsole': '清空控制台',
  'datastudio.editor.fullScreen': '全屏开发',
  'datastudio.editor.fullScreen.exit': '退出全屏',
  'datastudio.editor.save': '保存当前的 FlinkSql 及配置',
  'datastudio.editor.export': '导出当前的 Sql 及配置',
  'datastudio.editor.check': '检查当前的 FlinkSql',
  'datastudio.editor.explan': '获取当前的 FlinkSql 的执行图',
  'datastudio.editor.explan.tip': 'FlinkSQL 的 JobPlan',
  'datastudio.editor.exec': '执行当前的 SQL',
  'datastudio.editor.exec.tip': '提交当前的作业到集群，提交前请手动保存',
  'datastudio.editor.push.ds': '推送到海豚调度',
  'datastudio.editor.push.ds.query.error': '获取海豚任务定义集合失败，原因：\n{msg}',
  'datastudio.editor.push.ds.timeout.strategy': '超时策略',
  'datastudio.editor.push.ds.timeout.alarm': '超时警告',
  'datastudio.editor.push.ds.timeout.error': '超时失败',
  'datastudio.editor.push.ds.timeout.strategy.tip': '超时策略必须选一个',
  'datastudio.editor.push.ds.add.job.error': '创建任务失败，原因：\n{msg}',
  'datastudio.editor.push.ds.prejob': '前置任务',
  'datastudio.editor.push.ds.prejob.tip': '选择前置任务',
  'datastudio.editor.push.ds.job.priority': '优先级',
  'datastudio.editor.push.ds.errortry.count': '失败重试次数',
  'datastudio.editor.push.ds.errortry.min': '失败重试间隔(分钟)',
  'datastudio.editor.push.ds.delayed.time': '延时执行时间(分钟)',
  'datastudio.editor.push.ds.timeout.min': '超时告警时长(分钟)',
  'datastudio.editor.push.ds.running.tag': '运行标志',
  'datastudio.editor.stop': '停止',
  'datastudio.editor.release': '发布，发布后将无法修改',
  'datastudio.editor.edit': '维护，点击进入编辑状态',
  'datastudio.editor.online': '上线，上线后自动恢复、告警等将生效',
  'datastudio.editor.offline': '下线，将进入最新发布状态',
  'datastudio.editor.delete': '注销，将进入回收站',
  'datastudio.editor.recovery': '恢复，将进入维护模式',
  'datastudio.editor.api': '查看 API',
  'datastudio.editor.help': '查看使用帮助',
  'datastudio.sql.query': 'SQL 查询',
  'datastudio.submit.job': '提交作业',

  'devops.jobstatus.SUCCESS': '成功',
  'devops.jobstatus.CREATED': '已创建',
  'devops.jobstatus.INITIALIZING': '初始化',
  'devops.jobstatus.RUNNING': '运行中',
  'devops.jobstatus.FINISHED': '已完成',
  'devops.jobstatus.FAILING': '异常中',
  'devops.jobstatus.FAILED': '已异常',
  'devops.jobstatus.SUSPENDED': '已暂停',
  'devops.jobstatus.CANCELLING': '停止中',
  'devops.jobstatus.CANCELED': '停止',
  'devops.jobstatus.RESTARTING': '重启中',
  'devops.jobstatus.UNKNOWN': '未知',
  'devops.jobstatus.ALL': '所有',

  'devops.LastUpdateTime': '最后更新时间',

  'settings.UserManagement': '用户管理',
  'settings.Flink': 'Flink 设置',
  'settings.FlinkRestAPI': '使用 Rest API',
  'settings.FlinkURLSplit': 'FlinkSQL 语句分隔符',
  'settings.FlinkJobID': '获取 Job ID 的最大等待时间（秒）',
  'settings.FlinkNoSetting': '未设置',
  'settings.FlinkNoUseSetting': '启用后，Flink 任务的 savepoint、停止等操作将通过 JobManager 的 RestAPI 进行',

  'user.manager': '用户管理',
  'user.username': '用户名',
  'user.jobnumber': '工号',
  'user.phone': '手机号',
  'user.nickname': '昵称',
  'user.create': '添加用户',
  'user.update': '修改用户',
  'user.assignRole': '分配角色',
  'user.delete': '删除用户',
  'user.deleteConfirm': '您确定要删除此用户吗？',
  'user.usernamePlaceholder': '请输入用户名',
  'user.jobnumberPlaceholder': '请输入工号',
  'user.nicknamePlaceholder': '请输入昵称',
  'user.phonePlaceholder': '请输入手机号',
  'user.oldpwd': '旧密码',
  'user.newpwd': '新密码',
  'user.repeatpwd': '重复新密码',
  'user.oldpwdPlaceholder': '请输入旧密码',
  'user.newpwdPlaceholder': '请输入新密码',
  'user.repeatpwdPlaceholder': '请重复输入新密码',
  'user.oldNewPwdNoMatch': '两次输入的新密码不一致',


  'tenant.TenantManager': '租户管理',
  'tenant.TenantCode': '租户编码',
  'tenant.AssignUser': '分配用户',
  'tenant.create': '创建租户',
  'tenant.update': '修改租户',
  'tenant.EnterTenantCode': '请输入租户编码!',
  'tenant.EnterTenantNote': '请输入租户备注/描述信息!',
  'tenant.delete': '删除租户',
  'tenant.deleteConfirm': '您确定要删除此租户吗？',

  'role.roleManagement': '角色管理',
  'role.roleCode': '角色编码',
  'role.roleName': '角色名称',
  'role.belongTenant': '所属租户',
  'role.create': '创建角色',
  'role.update': '修改角色',
  'role.EnterRoleCode': '请输入角色编码!',
  'role.EnterRoleName': '请输入角色名称!',
  'role.selectNameSpace': '请选择命名空间!',
  'role.EnterNote': '请输入角色的备注/描述信息!',
  'role.delete': '删除角色',
  'role.deleteConfirm': '您确定要删除此角色吗？',


  'rowPermissions.management': '行权限管理',
  'rowPermissions.tableName': '表名',
  'rowPermissions.tableNamePlaceholder': '请输入表名',
  'rowPermissions.expression': '表达式',
  'rowPermissions.expressionPlaceholder': '请输入表达式',
  'rowPermissions.deleteConfirm': '您确定要删除此行权限吗？',
  'rowPermissions.roleName': '角色名称',
  'rowPermissions.roleNamePlaceholder': '请选择角色',
  'rowPermissions.create': '创建行权限',
  'rowPermissions.update': '修改行权限',


  'metadata.NoDatabaseSelected': '未选择数据源',
  'metadata.Application': 'Application',
  'metadata.TableInfo': '表信息',
  'metadata.Description': '描述',
  'metadata.DataSearch': '数据查询',
  'metadata.GenerateSQL': 'SQL 生成',
  'metadata.FieldInformation': '字段信息',
  'metadata.catalogSelect': '选择 Catalog & Database',
  'metadata.catalogRefresh': '刷新 Catalog',
  'metadata.catalogRefreshSuccess': '刷新 Catalog 成功',
  'metadata.selectDatabase': '选择数据源',


  'metadata.Console': '控制台',
  'metadata.help.noSqlSelect': '未选择任何sql！',
  'metadata.help.selectSql': '请在编辑器内选择你要执行的sql',
  'metadata.help.exec': '执行选中sql',
  'metadata.exec.result.msg': '执行时间: {time} 秒, 总行数: {rowCount}',
  'metadata.exec.result.msghelp': '行数超过500，仅显示前500',

  'TableData.QueryConditions': '查询条件',
  'TableData.sorting': '排序',
  'TableData.data': '数据',
  'TableData.search': '搜索',

  'datastudio.label.info': '控制台',
  'datastudio.label.result': '结果',
  'datastudio.label.result.query.latest.data': '获取最新数据',

  'datastudio.explain.validate.msg': 'FlinkSql 语法和逻辑检查',
  'datastudio.explain.validate': '正在校验中...',
  'datastudio.explain.validate.allright': '全部正确',
  'datastudio.explain.validate.error': '存在错误，共计{errorCount}个',
  'datastudio.explain.validate.grammar.right': '语法正确',
  'datastudio.explain.validate.grammar.error': '语法有误',
  'datastudio.explain.validate.logic.right': '逻辑正确',
  'datastudio.explain.validate.logic.error': '逻辑有误',



  'datastudio.label.lineage': '血缘',
  'datastudio.label.lineage.export': '导出 StreamGraphPlan',
  'datastudio.label.lineage.streamplan': '的 StreamGraphPlan',
  'datastudio.label.lineage.query.error': '获取作业血缘失败，原因：\n {msg}',
  'datastudio.label.lineage.recalculate': '重新计算血缘',
  'datastudio.label.lineage.calculate': '计算血缘',
  'datastudio.label.lineage.expand.field': '展开字段',
  'datastudio.label.lineage.collapse.field': '收起字段',
  'datastudio.label.lineage.expand.lineage': '收起血缘',
  'datastudio.label.lineage.collapse.lineage': '展开血缘',

  'datastudio.label.process': '进程',
  'datastudio.label.process.detail': '详情',
  'datastudio.label.process.savepoint': '保存点',
  'datastudio.label.process.trigger': '触发',
  'datastudio.label.process.cancel': 'Cancel',
  'datastudio.label.process.stop': '停止',
  'datastudio.label.process.stopconfirm': '确定停止 【{jobid}】？',
  'datastudio.label.process.stopsuccess': '停止成功',
  'datastudio.label.process.stopfailed': '停止失败',
  'datastudio.label.process.switchcluster': '选择Flink集群',

  'datastudio.label.history': '历史',
  'datastudio.label.history.exec': '执行历史',
  'datastudio.label.history.delete': '删除执行记录',
  'datastudio.label.history.deleteConfirm': '确定删除该执行记录吗？',
  'datastudio.label.history.execConfig': '执行配置',
  'datastudio.label.history.statement': 'FlinkSql语句',
  'datastudio.label.history.result': '预览数据',
  'datastudio.label.history.error': '异常信息',
  'datastudio.label.history.jobId': '作业ID',
  'datastudio.label.history.jobName': '任务名名',
  'datastudio.label.history.runningCluster': '运行集群',
  'datastudio.label.history.session': '共享会话',
  'datastudio.label.history.taskType': '任务类型',
  'datastudio.label.history.clusterId': '集群ID',
  'datastudio.label.history.clusterConfigId': '集群配置ID',
  'datastudio.label.history.changelog': '打印流',
  'datastudio.label.history.maxRow': '最大行数',
  'datastudio.label.history.autoStop': '自动停止',
  'datastudio.label.history.useSqlFragment': '全局变量',
  'datastudio.label.history.useStatementSet': '语句集',
  'datastudio.label.history.parallelism': '并行度',
  'datastudio.label.history.checkpoint': '检查点',
  'datastudio.label.history.savePointStrategy': 'SavePoint 策略',
  'datastudio.label.history.savePointPath': 'SavePoint 路径',

  'datastudio.label.function': '函数',

  'datastudio.label.directory': '目录',
  'datastudio.label.structure': '结构',
  'datastudio.label.session': '会话',
  'datastudio.label.cluster': '集群',
  'datastudio.label.datasource': '数据源',
  'datastudio.label.meta': '元数据',
  'datastudio.label.globalvariable': '全局变量',
  'datastudio.label.guidepage': '引导页',

  'datastudio.label.jobConfig': '作业配置',
  'datastudio.label.jobConfig.cluster': 'Flink集群',
  'datastudio.label.jobConfig.cluster.tip': '选择Flink集群',
  'datastudio.label.jobConfig.clusterConfig': 'Flink集群配置',
  'datastudio.label.jobConfig.clusterConfig.tip1': '选择Flink集群配置进行【{type}】模式的远程提交任务',
  'datastudio.label.jobConfig.clusterConfig.tip2': '选择Flink集群配置',
  'datastudio.label.jobConfig.jar': '可执行 Jar',
  'datastudio.label.jobConfig.jar.tip1': '选择可执行 Jar 进行 【{type}】模式的远程提交 Jar 任务。当该参数项存在值时，将只提交可执行 Jar.',
  'datastudio.label.jobConfig.jar.tip2': '选择可执行Jar，非必填',
  'datastudio.label.jobConfig.execmode.tip': '指定 Flink 任务的执行模式，默认为 Local',
  'datastudio.label.jobConfig.execmode.k8s.tip': '指定 Flink 任务的执行模式，默认为 KUBERNETES_APPLICATION',
  'datastudio.label.jobConfig.flinksql.env': 'FlinkSQL 环境',
  'datastudio.label.jobConfig.flinksql.env.tip1': '选择当前任务的 FlinkSQL 执行环境，会提前执行环境语句，默认无。',
  'datastudio.label.jobConfig.flinksql.env.tip2': '选择 FlinkSQL 环境，非必填',
  'datastudio.label.jobConfig.parallelism': '任务并行度',
  'datastudio.label.jobConfig.parallelism.tip': '设置Flink任务的并行度，最小为 1',
  'datastudio.label.jobConfig.insert': 'Insert语句集',
  'datastudio.label.jobConfig.insert.tip': '【增强特性】 开启语句集机制，将把多个 Insert 语句合成一个 JobGraph 再进行提交，Select 语句无效',
  'datastudio.label.jobConfig.fragment': '全局变量',
  'datastudio.label.jobConfig.fragment.tip': '【增强特性】 开启FlinkSql全局变量，使用“:=”进行定义（以“;”结束），“${}”进行调用',
  'datastudio.label.jobConfig.batchmode': '批模式',
  'datastudio.label.jobConfig.batchmode.tip': '使用批模式',
  'datastudio.label.jobConfig.checkPoint': '检查点间隔',
  'datastudio.label.jobConfig.checkPoint.tip': '设置Flink任务的检查点步长，0 代表不启用',
  'datastudio.label.jobConfig.savePointStrategy': 'SavePoint策略',
  'datastudio.label.jobConfig.savePointStrategy.tip': '指定 SavePoint策略，默认为禁用',
  'datastudio.label.jobConfig.savePointpath': 'SavePoint路径',
  'datastudio.label.jobConfig.savePointpath.tip1': '从SavePointPath恢复Flink任务',
  'datastudio.label.jobConfig.savePointpath.tip2': 'hdfs://...',
  'datastudio.label.jobConfig.alertGroup': '告警组',
  'datastudio.label.jobConfig.alertGroup.tip': '选择告警组',
  'datastudio.label.jobConfig.other': '其他配置',
  'datastudio.label.jobConfig.other.tip': '其他配置项，将被应用于执行环境，如 pipeline.name',
  'datastudio.label.jobConfig.addConfig': '添加配置项',
  'datastudio.label.jobConfig.addConfig.params': '参数',
  'datastudio.label.jobConfig.addConfig.value': '值',

  'datastudio.label.execConfig': '执行配置',
  'datastudio.label.execConfig.selectDatabase': '选择数据源',
  'datastudio.label.execConfig.selectDatabase.tip': '选择 Sql 语句执行的数据源',
  'datastudio.label.execConfig.preview.result': '预览结果',
  'datastudio.label.execConfig.preview.result.tip': '开启预览结果，将同步运行并返回数据结果',
  'datastudio.label.execConfig.changelog': '打印流',
  'datastudio.label.execConfig.changelog.tip': '开启打印流，将同步运行并返回含有 op 信息的 ChangeLog，默认不开启且返回最终结果 Table',
  'datastudio.label.execConfig.maxrow': '最大行数',
  'datastudio.label.execConfig.maxrow.tip': '预览数据的最大行数',
  'datastudio.label.execConfig.autostop': '自动停止',
  'datastudio.label.execConfig.autostop.tip': '开启自动停止，将在捕获最大行数记录后自动停止任务',

  'datastudio.label.savepoint': '保存点',


  'datastudio.label.version': '版本历史',
  'datastudio.label.version.id': '版本ID',
  'datastudio.label.version.diff': '版本对比',
  'datastudio.label.version.rollback': '回滚',
  'datastudio.label.version.rollback.flinksql': '回滚Flink SQL版本',
  'datastudio.label.version.rollback.flinksqlConfirm': '确定回滚Flink SQL版本至【{versionId}】吗？',
  'datastudio.label.version.diff.tip': '只和当前编辑器内的内容对比',
  'datastudio.label.version.leftTitle': '版本号：【{versionId}】 创建时间: 【{createTime}】',
  'datastudio.label.version.rightTitle': '版本号：【当前编辑版本】 创建时间: 【{createTime}】 最后更新时间: 【{updateTime}】',


  'datastudio.label.jobInfo': '作业信息',
  'datastudio.label.jobInfo.id': '任务ID',
  'datastudio.label.jobInfo.name': '任务名称',
  'datastudio.label.jobInfo.dialect': '方言',
  'datastudio.label.jobInfo.versionId': '版本号',

  'datastudio.label.udfInfo': 'UDF信息',
  'datastudio.label.udfInfo.classname': '类名',
  'datastudio.label.udfInfo.auto': '自动识别',


  'datastudio.label.registcluster': '注册 Flink 集群实例',
  'datastudio.label.registclusterconfig': '注册集群配置',
  'datastudio.label.registjar': '注册 Jar',
  'datastudio.label.registdatasource': '注册数据源',
  'datastudio.label.metadata': '元数据',
  'datastudio.label.alarmInstance': '注册告警实例',
  'datastudio.label.alarmGroup': '告警组',
  'datastudio.label.val': '注册全局变量',
  'datastudio.label.udfTemplate': 'UDF 模板',
  'datastudio.label.systemInfo': '系统信息',
  'datastudio.label.registdocument': '注册文档',
  'datastudio.label.configsystemconfig': '修改系统配置',
  'datastudio.label.officialdocumentation': '官网文档',
  'datastudio.label.quickguide': '快捷引导',

  'datastudio.label.welcomeuse': '欢迎使用 Dinky v{version}',
  'datastudio.label.dinkydescribe': '实时即未来，Dinky 为 Apache Flink 而生，让 Flink SQL 纵享丝滑，并致力于实时计算平台建设。',
  'datastudio.label.maxrows': '最大行数',


  'devops.result.success': '操作成功',
  'devops.lable.allonline': '一键上线',
  'devops.lable.alloffline': '一键下线',
  'devops.lable.onlinelist': '上线明细',
  'devops.lable.offlinelist': '下线明细',
  'devops.lable.instance': '实例',
  'devops.lable.online': '上线',
  'devops.lable.offline': '下线',
  'devops.lable.pleaseSelect': '请选择',

  'devops.lable.online.list': '上线明细列表',
  'devops.lable.offline.list': '下线明细列表',
  'devops.lable.line.name': '名称',
  'devops.lable.line.status': '状态',
  'devops.lable.line.code': '结果',
  'devops.lable.line.message': '信息',
  'devops.lable.line.piontConfig': '点位配置选择',
  'devops.lable.line.piontConfig.default': '默认保存点',
  'devops.lable.line.piontConfig.last': '最新保存点',


  'rc.clusterManagement': '集群实例管理',
  'rc.cluster.instanceName': '实例名称',
  'rc.cluster.alias': '实例别名',
  'rc.cluster.aliasPlaceholder': '请输入别名!',
  'rc.cluster.type': '类型',
  'rc.cluster.jobManagerAddress': 'JobManger 地址',
  'rc.cluster.version': '版本',
  'rc.cluster.jobManagerHaAddress': 'JobManger 高可用地址',
  'rc.cluster.instanceId': '实例 Id',
  'rc.cluster.create': '创建集群',
  'rc.cluster.modify': '修改集群',
  'rc.cluster.delete': '删除 Flink 实例',
  'rc.cluster.stop': '停止 Flink 实例',
  'rc.cluster.deleteConfirm': '确定删除该 Flink 实例吗？',
  'rc.cluster.stopConfirm': '确定停止该 Flink 实例吗？',
  'rc.cluster.recycle': '回收 Flink 实例',
  'rc.cluster.recycleConfirm': '确定回收所有自动创建且过期的 Flink 实例吗？',
  'rc.cluster.recycle.success' : '成功回收{total}个 Flink 实例',
  'rc.cluster.enable': '启用 Flink 实例',
  'rc.cluster.enableConfirm': '您确定要启用此 Flink 实例吗？',
  'rc.cluster.disable': '禁用 Flink 实例',
  'rc.cluster.disableConfirm': '您确定要禁用此 Flink 实例吗？',
  'rc.cluster.disableTotalOf': '被禁用的 Flink 实例共 {total} 个',
  'rc.cluster.jobManagerHaAddress.validate.slash': '不符合规则! 不能包含/',
  'rc.cluster.jobManagerHaAddress.validate.port': '不符合规则! 端口号区间[0-65535]',
  'rc.cluster.jobManagerHaAddressPlaceholderText': '添加 Flink 集群的 JobManager 的 RestApi 地址。当 HA 模式时，地址间用英文逗号分隔，例如：192.168.123.101:8081,192.168.123.102:8081,192.168.123.103:8081',
  'rc.cluster.jobManagerHaAddressPlaceholder': '请输入 JobManager HA 地址!',
  'rc.cluster.typePlaceholder': '请选择集群类型!',
  'rc.cluster.namePlaceholder': '请输入名称!',

  'rc.clusterConfigManagement': '集群配置管理',
  'rc.clusterConfig.name': '集群配置名称',
  'rc.clusterConfig.id': '集群配置ID',
  'rc.clusterConfig.type': '类型',
  'rc.clusterConfig.hadoopConfigPath': 'Hadoop 配置文件路径',
  'rc.clusterConfig.flinkConfigPath': 'Flink 配置文件路径',
  'rc.clusterConfig.libPath': 'lib 路径',
  'rc.clusterConfig.sqlSubmitJarPath': 'Jar 文件路径',
  'rc.clusterConfig.FlinkSQLJarMainParameter': 'Jar 的主类入参',
  'rc.clusterConfig.FlinkSQLJarMainClass': 'Jar 的主类',

  'rc.clusterConfig.isAvailable': '是否可用',
  'rc.clusterConfig.available': '可用',
  'rc.clusterConfig.notAvailable': '不可用',
  'rc.clusterConfig.create': '创建集群',
  'rc.clusterConfig.modify': '修改集群',
  'rc.clusterConfig.delete': '删除集群配置',
  'rc.clusterConfig.deleteConfirm': '确定删除该集群配置吗？',
  'rc.clusterConfig.start': '启动 Session 集群',
  'rc.clusterConfig.startConfirm': '确定通过该集群配置启动 Session 集群吗？',
  'rc.clusterConfig.enable': '启用集群配置',
  'rc.clusterConfig.enableConfirm': '您确定要启用此集群配置吗？',
  'rc.clusterConfig.disable': '禁用集群配置',
  'rc.clusterConfig.disableConfirm': '您确定要禁用此集群配置吗？',
  'rc.clusterConfig.disableTotalOf': '被禁用的集群配置共 {total} 个',
  'rc.clusterConfig.baseConfig': '基本配置',
  'rc.clusterConfig.otherConfig': '其他配置',
  'rc.clusterConfig.addDefineConfig': '添加一个自定义项',
  'rc.clusterConfig.typePlaceholder': '请选择集群类型!',
  'rc.clusterConfig.aliasPlaceholder': '请输入别名!',
  'rc.clusterConfig.namePlaceholder': '请输入名称!',
  'rc.clusterConfig.hadoopConfigPathPlaceholder': '请输入 hadoop 配置文件路径 ,值如 /etc/hadoop/conf！',
  'rc.clusterConfig.hadoopConfigPathHelp': '指定配置文件路径（末尾无/），需要包含以下文件：core-site.xml,hdfs-site.xml,yarn-site.xml ！',
  'rc.clusterConfig.defineConfig.highPriority': '自定义配置（高优先级）',
  'rc.clusterConfig.flinkConfig': 'Flink 配置',
  'rc.clusterConfig.submitSqlConfig': '提交 FlinkSQL 配置项 (Application 模式必填)',
  'rc.clusterConfig.hadoopConfig': 'Hadoop 配置',
  'rc.clusterConfig.k8sConfig': 'Kubernetes 配置',
  'rc.clusterConfig.libPathPlaceholder': '请输入 lib 的 hdfs 路径！值如 hdfs:///flink/lib',
  'rc.clusterConfig.libPathHelp': '指定 lib 的 hdfs 路径（末尾无/），需要包含 Flink 运行时的依赖',
  'rc.clusterConfig.flinkConfigPathPlaceholder': '请输入 flink-conf.yaml 路径！值如 /opt/module/flink/conf ',
  'rc.clusterConfig.flinkConfigPathHelp': '请输入 flink-conf.yaml 路径！值如 /opt/module/flink/conf ',

  // K8s页面相关
  'rc.clusterConfig.appConfig': 'App 配置',
  'rc.clusterConfig.kubernets.version': 'Flink 版本',
  'rc.clusterConfig.kubernets.unsupportBatch': '不支持批任务',
  'rc.clusterConfig.submit.type': '部署方式',
  'rc.clusterConfig.jar.path': '镜像内Jar路径',
  'rc.clusterConfig.jar.class': '启动类',
  'rc.clusterConfig.jar.args': '启动参数',

  'rc.clusterConfig.help.kubernets.namespace': 'kubernets命名空间',
  'rc.clusterConfig.help.kubernets.image': 'Flink镜像地址',
  'rc.clusterConfig.help.kubernets.jmcpu': 'jobmanager cpu配置',
  'rc.clusterConfig.help.kubernets.tmcpu': 'taskmanager cpu配置',
  'rc.clusterConfig.help.kubernetes.configfile': '默认~/.kube/config， 填写kube文件路径，可用作远程连接',
  'rc.clusterConfig.help.kubernets.account': 'kubernets 提交使用的账号，默认default',
  'rc.clusterConfig.help.kubernets.defaultTemplate': '可选，默认JobManager，TaskManager 的template配置!',
  'rc.clusterConfig.help.kubernets.jobManagerTemplate': '可选，JobManager 的template配置! 会覆盖kubernetes.pod-template配置',
  'rc.clusterConfig.help.kubernets.taskManagerTemplate': '可选，TaskManager 的template配置!会覆盖kubernetes.pod-template配置',
  'rc.clusterConfig.help.kubernets.jobManagerMemory': '可选，JobManager 的内存配置',
  'rc.clusterConfig.help.kubernets.taskManagerMemory': '可选，taskManagerMemory 的内存配置',

  // alert
  'rc.ai.management': '告警实例管理',
  'rc.ai.type': '类型',
  'rc.ai.name': '名称',
  'rc.ai.namePleaseHolder': '请输入告警实例名称',
  'rc.ai.delete': '删除告警实例',
  'rc.ai.create': '创建告警实例',
  'rc.ai.modify': '修改告警实例',
  'rc.ai.deleteConfirm': '确定删除选中的告警实例吗？',
  'rc.ai.dingTalk': '钉钉告警配置',
  'rc.ai.email': '邮箱告警配置',
  'rc.ai.feishu': '飞书告警配置',
  'rc.ai.wechat': '企业微信告警配置',
  'rc.ai.webhookPleaseHolder': '请输入 webhook 地址',
  'rc.ai.keywordPleaseHolder': '请输入关键词',
  'rc.ai.secretPleaseHolder': '请输入 密令',
  'rc.ai.proxyPleaseHolder': '请输入代理主机',
  'rc.ai.portPleaseHolder': '请输入代理端口',
  'rc.ai.userPleaseHolder': '请输入代理用户',
  'rc.ai.atUsersPleaseHolder': '请输入被@用户ID(需要飞书后台的用户ID),多个逗号隔开!',
  'rc.ai.passwordPleaseHolder': '请输入密码',
  'rc.ai.atMobilesPleaseHolder': '请输入@手机号 多个使用英文逗号分开 ',
  'rc.ai.msgtypePleaseHolder': '请选择消息发送类型',
  'rc.ai.corpIdPleaseHolder': '请输入 企业Id',
  'rc.ai.wechatAtUsersPleaseHolder': '请输入被@用户ID(企微用户名全拼),多个逗号隔开!',
  'rc.ai.sendTypePleaseHolder' : '请选择发送方式！',
  'rc.ai.agentIdPleaseHolder': '请输入 AgentId',
  'rc.ai.receiversPleaseHolder': '请输入收件人邮箱！多个英文逗号隔开',
  'rc.ai.receiverCcsPleaseHolder': '请输入抄送人邮箱！多个英文逗号隔开!',
  'rc.ai.serverHostPleaseHolder': '邮件服务器主机',
  'rc.ai.serverPortPleaseHolder': '请输入邮件服务器端口',
  'rc.ai.senderPleaseHolder': '请输入邮件服务器发送者昵称',
  'rc.ai.emailUserPleaseHolder': '请输入邮箱用户名',
  'rc.ai.emailPasswordPleaseHolder': '请输入邮箱密码! 注意:密码为授权码',
  'rc.ai.smtpSslTrustPleaseHolder': '请输入受信任域',
  'rc.ai.xls.file.pathPleaseHolder': '请输入XLS存放目录! 默认为 /tmp/xls',
  'rc.ai.webhook': 'WebHook 地址',
  'rc.ai.keyword': '关键词',
  'rc.ai.secret': '密令',
  'rc.ai.isEnableProxy': '是否启用代理',
  'rc.ai.proxy': '代理',
  'rc.ai.port': '端口',
  'rc.ai.user': '用户名',
  'rc.ai.password': '密码',
  'rc.ai.isAtAll': '是否@全部',
  'rc.ai.corpId': '企业Id',
  'rc.ai.atMobiles': '@手机号',
  'rc.ai.sendType': '发送方式',
  'rc.ai.agentId': '代理ID',
  'rc.ai.atUsers': '被@用户',
  'rc.ai.receivers': '收件人',
  'rc.ai.receiverCcs': '抄送人',
  'rc.ai.serverHost': '邮件服务器Host',
  'rc.ai.serverPort': '邮件服务器Port',
  'rc.ai.sender': '发送者昵称',
  'rc.ai.enableSmtpAuth': '开启邮箱验证',
  'rc.ai.emailUser': '邮箱用户名',
  'rc.ai.emailPassword': '邮箱密码',
  'rc.ai.starttlsEnable': '开启tls证书',
  'rc.ai.sslEnable': '开启SSL',
  'rc.ai.smtpSslTrust': '受信任域',
  'rc.ai.xls.file.path': 'XLS存放目录',
  'rc.ai.msgtype': '展示方式',
  'rc.ai.sendType.app': '应用',
  'rc.ai.sendType.wechat': '群聊',
  'rc.ai.markdown': 'MarkDown',
  'rc.ai.text': '普通文本',
  'rc.ai.post': '富文本',
  'rc.ai.table': '表格',
  'rc.ai.attachment': '附件',
  'rc.ai.tableAttachment': '表格和附件',

  'rc.ag.management': '告警组管理',
  'rc.ag.name': '告警组名称',
  'rc.ag.groupid': '告警组ID',
  'rc.ag.alertInstanceIds': '告警实例',
  'rc.ag.chooseAlertInstanceIds': '请选择告警组实例',
  'rc.ag.inputName': '请输入告警组名称',
  'rc.ag.create': '创建告警组',
  'rc.ag.modify': '修改告警组',
  'rc.ag.delete': '删除告警组',
  'rc.ag.deleteConfirm': '确定删除该告警组吗？',
  'rc.ag.alertCount': '告警实例数: {count}',


  'rc.db.Management': '数据源',
  'rc.db.name': '名称',
  'rc.db.groupName': '分组类型',
  'rc.db.url': '数据库连接 URL',
  'rc.db.username': '用户名',
  'rc.db.password': '密码',
  'rc.db.flinkConfig': 'Flink 连接配置',
  'rc.db.flinkTemplate': 'Flink 连接模板',
  'rc.db.create': '创建数据源',
  'rc.db.modify': '修改数据源',
  'rc.db.delete': '删除数据源',
  'rc.db.deleteConfirm': '确定删除该数据源{dbName}吗？',
  'rc.db.namePlaceholder': '请输入名称!',
  'rc.db.urlPlaceholder': '请输入格式正确的 url 连接!',
  'rc.db.flinkConfigPlaceholder': '请指定 Flink With 的默认配置!',
  'rc.db.flinkTemplatePlaceholder': '请指定 Flink With 的生成模板!',
  'rc.db.copyDatabase': '正在复制!',
  'rc.db.source': '来源',
  'rc.db.warehouse': '数仓',
  'rc.db.application': '应用',
  'rc.db.backup': '备份',
  'rc.db.other': '其他',
  'rc.db.no': '序号',
  'rc.db.columnName': '字段名称',
  'rc.db.comment': '注释',
  'rc.db.type': '类型',
  'rc.db.primarykey': '主键',
  'rc.db.autoIncrement': '自增',
  'rc.db.isNull': '非空',
  'rc.db.null': '可为空',
  'rc.db.default': '默认值',
  'rc.db.length': '长度',
  'rc.db.precision': '精度',
  'rc.db.decimalDigits': '小数范围',
  'rc.db.character': '字符集',
  'rc.db.collationRule': '排序规则',
  'rc.db.javaType': 'Java 类型',

  'rc.doc.management': '文档管理',
  'rc.doc.name': '名称',
  'rc.doc.id': '文档 ID',
  'rc.doc.category': '文档类型',
  'rc.doc.functionType': '函数类型',
  'rc.doc.subFunctionType': '子类型',
  'rc.doc.description': '描述',
  'rc.doc.fillValue': '填充值',
  'rc.doc.version': '版本',
  'rc.doc.create': '创建文档',
  'rc.doc.modify': '修改文档',
  'rc.doc.delete': '删除文档',
  'rc.doc.deleteConfirm': '确定删除此文档吗？',
  'rc.doc.namePlaceholder': '请输入名称!',
  'rc.doc.versionPlaceholder': '请选择该文档所属版本!',
  'rc.doc.fillValuePlaceholder': '请输入填充值,编辑器内使用名称触发提示 eg: 如果希望在函数LTRIM(parms)中输入参数 则语法为: LTRIM(${1:})  此时的1代表第一个光标 如需多个 数字+1即可 tab键切换光标 ; 如不需要参数则直接输入期望填充值',
  'rc.doc.fillValueHelp': '请输入填充值',
  'rc.doc.descriptionPlaceholder': '请输入文档描述信息!',
  'rc.doc.typePlaceholder': '请选择该文档所属函数类型!',
  'rc.doc.subTypePlaceholder': '请选择该文档所属函数类型!',
  'rc.doc.categoryPlaceholder': '请选择该文档所属类型!',


  'rc.gv.Management': '全局变量管理',
  'rc.gv.id': '全局变量 ID',
  'rc.gv.name': '名称',
  'rc.gv.value': '变量值',
  'rc.gv.create': '创建全局变量',
  'rc.gv.modify': '修改全局变量',
  'rc.gv.delete': '删除全局变量',
  'rc.gv.deleteConfirm': '确定删除该全局变量吗？',
  'rc.gv.namePlaceholder': '请输入名称!',
  'rc.gv.valuePlaceholder': '请输入全局变量值',


  'rc.gp.management': 'Git 项目管理(Beta)',
  'rc.gp.id': '项目 ID',
  'rc.gp.name': '项目名称',
  'rc.gp.url': '项目地址',
  'rc.gp.branch': '分支',
  'rc.gp.username': '用户名',
  'rc.gp.password': '密码',
  'rc.gp.privateKey': '私钥',
  'rc.gp.pom': 'Pom文件路径',
  'rc.gp.buildArgs': '构建参数',
  'rc.gp.codeType': '代码类型',
  'rc.gp.type': 'Clone 方式',
  'rc.gp.description': '描述',
  'rc.gp.lastBuild': '最后构建时间',
  'rc.gp.buildState': '构建状态',
  'rc.gp.buildStep': '构建步骤',
  'rc.gp.udfClassList': 'UDF类列表',
  'rc.gp.create': '创建项目',
  'rc.gp.modify': '修改项目',
  'rc.gp.delete': '删除项目',
  'rc.gp.deleteConfirm': '此操作会删除该项目下所有下载的代码! \n请谨慎操作!! \n此操作不可逆!!\n 你确定删除此项目吗?',
  'rc.gp.namePlaceholder': '请输入名称!',
  'rc.gp.urlPlaceholder': '请输入项目地址!',
  'rc.gp.branchPlaceholder': '请选择分支!',
  'rc.gp.usernamePlaceholder': '请输入用户名!',
  'rc.gp.passwordPlaceholder': '请输入密码!',
  'rc.gp.privateKeyPlaceholder': '输入私钥路径，eg：~/.ssh/id_rsa',
  'rc.gp.pomPlaceholder': '请输入POM文件路径!',
  'rc.gp.buildArgsPlaceholder': '请输入构建参数!',
  'rc.gp.codeTypePlaceholder': '请选择代码类型!',
  'rc.gp.build': '构建',
  'rc.gp.buildConfirm': '确定开始构建该项目吗？',
  'rc.gp.log': '日志',
  'rc.gp.codeTree': '查看代码',
  'rc.gp.codeTree.clickShow': '点击左侧文件查看代码',
  'rc.gp.codeTree.unSupportView': '不支持查看该文件类型',

  'rc.gp.build.step.0': '未构建',
  'rc.gp.build.step.1': '环境检查',
  'rc.gp.build.step.2': '克隆项目',
  'rc.gp.build.step.3': '编译构建',
  'rc.gp.build.step.4': '获取 Jar 包',
  'rc.gp.build.step.5': '分析 UDF',
  'rc.gp.build.step.6': '完成',

  'rc.gp.buildSuccess': '构建成功',
  'rc.gp.buildFail': '构建失败',
  'rc.gp.building': '构建中',
  'rc.gp.notBuild': '未构建',
  'rc.gp.buildingTip': '构建中，请稍后...',




  'task.api.job.async' : '异步提交',
  'task.api.job.stop' : '停止作业',
  'task.api.job.restart' : '重启作业',
  'task.api.job.instance' : '作业实例',
  'task.api.savepoint.trigger' : 'SavePoint 触发',
  'task.api.savepoint.stop' : 'SavePoint 停止',
  'task.api.job.online' : '上线作业',
  'task.api.job.offline' : '下线作业',
  'task.api.job.reonline' : '重新上线作业',

  'task.add.job' : '添加任务',
  'task.management' : '任务管理',
  'task.name' : '任务名称',
  'task.namePlaceHolder' : '请输入任务名称',
  'task.id' : '任务ID',
  'task.alias' : '别名',
  'task.type' : '类型',
  'task.checkPoint' : 'CheckPoint',
  'task.savePointPath' : '保存点路径',
  'task.parallelism' : '并行d度',
  'task.fragment' : '全局变量',
  'task.clusterId' : '集群 ID',
  'task.clusterName' : '集群名称',
  'task.delete' : '删除任务',
  'task.deleteConfirm' : '你确定要删除这个任务吗？ ',
  'task.exec' : '执行任务',
  'task.execConfirm' : '你确定要执行这个任务吗？ ',
  'task.placeHolder' : '请输入...',
  'task.edit' : '编辑任务',

  'flinkColumns.position': '序号',
  'flinkColumns.name': '列名',
  'flinkColumns.type': '类型',
  'flinkColumns.key': '主键',
  'flinkColumns.key.true': '主键',
  'flinkColumns.key.other': '其他',
  'flinkColumns.isnull': '为空',
  'flinkColumns.isnotnull': '不为空',
  'flinkColumns.extras': '扩展',
  'flinkColumns.watermark': '水印',

  'sys.udf.template.name' :'模板名',
  'sys.udf.template.namePlaceholder' :'请输入模板名！',
  'sys.udf.template.codeType' :'代码类型',
  'sys.udf.template.codeTypePlaceholder' :'请选择代码类型！',
  'sys.udf.template.functionType' :'函数类型',
  'sys.udf.template.functionTypePlaceholder' :'请选择函数类型！',
  'sys.udf.template.templateCode' :'模板代码',
  'sys.udf.template.templateCodePlaceholder' :'请编辑模板代码！',
  'sys.udf.template.delete' :'删除模板！',
  'sys.udf.template.deleteConfirm' :'确定删除该模板吗?',
  'sys.udf.template.create': '创建 UDF 模板',
  'sys.udf.template.modify': '修改 UDF 模板',

  'sys.process.id':'进程ID',
  'sys.process.name':'进程名',
  'sys.process.taskId':'任务ID',
  'sys.process.type':'类型',
  'sys.process.status':'状态',
  'sys.process.startTime':'开始时间',
  'sys.process.endTime':'结束时间',
  'sys.process.duration':'耗时',
  'sys.process.operator':'操作人',
  'sys.process.viewInfoLog':'查看 Info 级别日志',
  'sys.process.viewErrorLog':'查看 Error 级别日志',
  'sys.info.logList.tips': '点击左侧日志文件查看',

  'devops.jobinfo.alert.title':'标题',
  'devops.jobinfo.alert.content':'正文',
  'devops.jobinfo.alert.status':'状态',
  'devops.jobinfo.alert.status.success':'成功',
  'devops.jobinfo.alert.status.failed':'失败',
  'devops.jobinfo.alert.log':'日志',
  'devops.jobinfo.alert.createTime':'告警时间',


  'devops.jobinfo.ck.id':'ID',
  'devops.jobinfo.ck.taskid':'任务ID',
  'devops.jobinfo.ck.status':'状态',
  'devops.jobinfo.ck.name':'名称',
  'devops.jobinfo.ck.duration':'耗时',
  'devops.jobinfo.ck.checkpoint_type':'类型',
  'devops.jobinfo.ck.external_path':'存储位置',
  'devops.jobinfo.ck.latest_ack_timestamp':'最后响应时间',
  'devops.jobinfo.ck.state_size':'状态大小',
  'devops.jobinfo.ck.trigger_timestamp':'触发时间',
  'devops.jobinfo.ck.recovery' :'从检查点恢复！',
  'devops.jobinfo.ck.recoveryConfirm' :'确定从检查点【{path}】恢复吗?',
  'devops.jobinfo.ck.recovery.success' :'恢复作业成功',
  'devops.jobinfo.ck.recovery.failed' :'恢复作业失败',

  'devops.jobinfo.lineage' :'血缘分析',

  'devops.jobinfo.version.id' :'作业ID',
  'devops.jobinfo.version.name' :'作业名称',
  'devops.jobinfo.version.alias' :'作业别名',
  'devops.jobinfo.version.dialect' :'作业方言',
  'devops.jobinfo.version.type' :'作业类型',
  'devops.jobinfo.version.versionId' :'版本号',
  'devops.jobinfo.version.sql' :'作业内容',
  'devops.jobinfo.version.sql.showdetail' :'查看作业详情',
  'devops.jobinfo.version.sql.title' :'作业执行 SQL',
  'devops.jobinfo.version.diff' :'版本对比',
  'devops.jobinfo.version.list' :'版本列表',
  'devops.jobinfo.version.timeline' :'版本时间轴',
  'devops.jobinfo.version.timeline.left' :'居左',
  'devops.jobinfo.version.timeline.right' :'居右',
  'devops.jobinfo.version.timeline.alternate' :'居中',
  'devops.jobinfo.version.timeline.developing' :' 开发中...',
  'devops.jobinfo.version.timeline.top' :'返回顶部',

  'devops.jobinfo.overview':'作业总览',
  'devops.jobinfo.cluster':'集群信息',
  'devops.jobinfo.snapshot':'作业快照',
  'devops.jobinfo.exception':'异常信息',
  'devops.jobinfo.log':'作业日志',
  'devops.jobinfo.optimize':'自动调优',
  'devops.jobinfo.config':'配置信息',
  'devops.jobinfo.flinksql':'FlinkSQL',
  'devops.jobinfo.datamap':'数据地图',
  'devops.jobinfo.olap':'即席查询',
  'devops.jobinfo.version':'历史版本',
  'devops.jobinfo.alert':'告警记录',
  'devops.jobinfo.savepoint.trigger':'SavePoint 触发',
  'devops.jobinfo.savepoint.stop':'SavePoint 暂停',
  'devops.jobinfo.savepoint.cancel':'SavePoint 停止',
  'devops.jobinfo.savepoint.canceljob':'普通停止',
  'devops.jobinfo.localenv':'本地环境',
  'devops.jobinfo.offline':'下线',
  'devops.jobinfo.smart_stop':'智能停止',
  'devops.jobinfo.reonline':'重新上线',
  'devops.jobinfo.reonlineJob':'重新上线任务',
  'devops.jobinfo.reonlineJobConfirm':'确定重新上线该作业吗？',
  'devops.jobinfo.reonline.success':'重新上线成功',
  'devops.jobinfo.reonline.failed':'重新上线失败',
  'devops.jobinfo.restart':'重新启动',
  'devops.jobinfo.stopJob':'停止任务',
  'devops.jobinfo.stopJobConfirm':'确定只停止该作业，不进行 SavePoint 操作吗？',
  'devops.jobinfo.canceljob.success':'普通停止成功',
  'devops.jobinfo.canceljob.failed':'普通停止失败',
  'devops.jobinfo.job.key':'{key} 任务',
  'devops.jobinfo.job.key.success':'{key} 成功',
  'devops.jobinfo.job.key.failed':'{key} 失败，原因：{msg}',
  'devops.jobinfo.job.keyConfirm':'确定{key} 该作业吗？',

  'devops.baseinfo.taskid': '任务ID',
  'devops.baseinfo.name': '任务名称',
  'devops.baseinfo.status': '状态',
  'devops.baseinfo.readbytes': '接收字节',
  'devops.baseinfo.readrecords': '接收记录',
  'devops.baseinfo.writebytes': '发送字节',
  'devops.baseinfo.writerecords': '发送记录',
  'devops.baseinfo.parallelism': '并行度',
  'devops.baseinfo.tasks': '算子',
  'devops.baseinfo.restart_number': '重启次数',

  'devops.config.exec.mode': '执行模式',
  'devops.config.alias': '集群实例',
  'devops.config.clusterConfiguration': '集群配置',
  'devops.config.session': '共享会话',
  'devops.config.useSqlFragment': '语句集',
  'devops.config.isJarTask': '任务类型',
  'devops.config.useBatchModel': '批处理模式',
  'devops.config.checkpoint': '检查点间隔',
  'devops.config.savePointStrategy': '保存点策略',
  'devops.config.savePointPath': '保存点路径',
  'devops.config.jarpath': 'Jar 路径',
  'devops.config.jarmainclass': 'Jar 主类',
  'devops.config.jarparams': 'Jar 参数',






};
