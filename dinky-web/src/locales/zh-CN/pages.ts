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

export default {
  /**
   *
   * about
   *
   * */

  'about.Community': '欢迎加入 Dinky 官方社区，共建共赢',
  'about.QQcode': 'QQ官方社区群',
  'about.communityRules': '社区守则',
  'about.communityRules.1': '禁止发布或讨论与本群主旨无关或不良的内容，一经发现立马被踢。',
  'about.communityRules.2':
    '关于 Bug 反馈与功能改进或提议请通过 issue 进行，请阅读 issue 文档要求。',
  'about.communityRules.3': '部署和使用前请先仔细阅读 Readme、公众号文章、官网文档、B站视频。',
  'about.communityRules.4': '群提问题请礼貌并且说明【版本、执行模式、操作描述、截图】。',
  'about.communityRules.5': ' 登记谁在使用 Dinky，可进入企业用户群提供技术支持。',
  'about.dingTalkCode': '钉钉官方社区群',
  'about.precautions': '注意事项',
  'about.usingHelp': '使用帮助',
  'about.wechatApply':
    '微信用户社区群：推荐，添加微信号 wenmo_ai 邀请进群 （申请备注 Dinky + 企业名 + 职位，不写不批）',
  'about.wechatCode': '微信公众号',
  /**
   *
   * button
   *
   * */

  'button.push': '提交',
  /**
   *
   * catalog
   *
   * */

  'catalog.name': '作业名称',
  'catalog.name.placeholder': '请输入作业名称',
  'catalog.name.tip': '此名称可作为 FlinkSql 任务的 JobName ([配置项',
  'catalog.note': '作业描述',
  'catalog.note.placeholder': '请输入作业描述',
  'catalog.type': '作业类型',
  'catalog.type.placeholder': '请选择作业类型',
  'catalog.type.tip': '作业类型决定了作业的执行方式, 请谨慎选择, 一旦选择后不可修改',
  'catalog.udf.className': '类或方法名',
  'catalog.udf.className.placeholder': '请输入类或方法名',
  'catalog.udf.templateId': 'UDF 模板',
  'catalog.udf.templateId.placeholder': '请选择 UDF 模板',
  /**
   *
   * datastudio
   *
   * */

  'datastudio.middle.qg': '快捷引导',
  'datastudio.middle.qg.alertGroup': '注册告警组',
  'datastudio.middle.qg.alertInstance': '注册告警实例',
  'datastudio.middle.qg.clusterConfiguration': '注册集群配置',
  'datastudio.middle.qg.clusterInstance': '注册 Session 集群',
  'datastudio.middle.qg.database': '注册数据源',
  'datastudio.middle.qg.document': '文档',
  'datastudio.middle.qg.fragment': '全局变量',
  'datastudio.middle.qg.gitprojects': 'Git 项目',
  'datastudio.middle.qg.resource': '资源',
  'datastudio.middle.qg.udf': 'UDF',
  'datastudio.project.create.folder.name': '目录名称',
  'datastudio.project.create.folder.name.placeholder': '请输入目录名称',
  'datastudio.project.create.folder.tip': '暂无作业,请点击左上角新建目录',
  'datastudio.project.delete.job': '删除 [{type}] 作业 [{name}]',
  'datastudio.project.delete.job.confirm':
    '此操作会将该任务的执行历史, 以及任务的所有信息全部删除.\n\t\t\t\t请谨慎操作! 该操作不可逆!!!\n\t\t\t\t\t确认删除吗?',
  /**
   *
   * devops
   *
   * */

  'devops.joblist.status.all': '任务总计',
  'devops.joblist.status.running': '运行中',
  'devops.joblist.status.cancelled': '已取消',
  'devops.joblist.status.failed': '异常作业',
  'devops.joblist.status.restarting': '重启中',
  'devops.joblist.status.finished': '已完成',
  'devops.joblist.status.unknown': '未知作业',

  'devops.baseinfo.name': '任务名称',
  'devops.baseinfo.parallelism': '并行度',
  'devops.baseinfo.readbytes': '接收字节',
  'devops.baseinfo.readrecords': '接收记录',
  'devops.baseinfo.status': '状态',
  'devops.baseinfo.tasks': '算子',
  'devops.baseinfo.writebytes': '发送字节',
  'devops.baseinfo.writerecords': '发送记录',
  'devops.baseinfo.backpressure': '反压',
  'devops.baseinfo.busy': '繁忙',
  'devops.baseinfo.idle': '空闲',
  'devops.jobinfo.ck.checkpoint_type': '类型',
  'devops.jobinfo.ck.duration': '耗时',
  'devops.jobinfo.ck.external_path': '存储位置',
  'devops.jobinfo.ck.id': 'ID',
  'devops.jobinfo.ck.latest_ack_timestamp': '最后响应时间',
  'devops.jobinfo.ck.name': '名称',
  'devops.jobinfo.ck.recovery': '从检查点恢复！',
  'devops.jobinfo.ck.recovery.failed': '恢复作业失败',
  'devops.jobinfo.ck.recovery.recoveryTo': '此处恢复',
  'devops.jobinfo.ck.recovery.success': '恢复作业成功',
  'devops.jobinfo.ck.recoveryConfirm': '确定从检查点【{path}】恢复吗?',
  'devops.jobinfo.ck.state_size': '状态大小',
  'devops.jobinfo.ck.status': '状态',
  'devops.jobinfo.ck.taskid': '任务ID',
  'devops.jobinfo.ck.trigger_timestamp': '触发时间',
  'devops.jobinfo.config.ClusterInstanceName': 'Flink实例',
  'devops.jobinfo.config.JobAlert': '告警记录',
  'devops.jobinfo.config.JobAlert.history.group': '告警组',
  'devops.jobinfo.config.JobAlert.history.title': '告警标题',
  'devops.jobinfo.config.JobAlert.history.content': '告警内容',
  'devops.jobinfo.config.JobAlert.history.status': '告警发送状态',
  'devops.jobinfo.config.JobAlert.history.log': '告警日志',
  'devops.jobinfo.config.JobAlert.history.time': '告警时间',
  'devops.jobinfo.config.JobAlert.history.delete': '你确定删除该告警记录吗?',
  'devops.jobinfo.config.JobBaseInfo': '作业基本信息',
  'devops.jobinfo.config.JobCheckpoints': '作业快照',
  'devops.jobinfo.config.JobId': 'Flink Job ID',
  'devops.jobinfo.config.JobInfo': '作业信息',
  'devops.jobinfo.config.JobLineage': 'SQL 血缘',
  'devops.jobinfo.config.JobLogs': '作业日志',
  'devops.jobinfo.config.JobMonitor': '监控',
  'devops.jobinfo.config.JobParallelism': '作业并行度',
  'devops.jobinfo.config.JobType': '任务类型',
  'devops.jobinfo.config.JobVersion': '版本信息',
  'devops.jobinfo.config.RestartStrategy': '重启策略',
  'devops.jobinfo.config.UserCustomConf': '用户自定义配置',
  'devops.jobinfo.config.execmode': '执行模式',
  'devops.jobinfo.config.savePointPath': 'savePoint路径',
  'devops.jobinfo.config.startFromSavePoint': '从SavePoint启动',
  'devops.jobinfo.config.submitType': '提交模式',
  'devops.jobinfo.config.taskId': 'Dinky作业ID',
  'devops.jobinfo.config.useSqlFragment': '语句集',
  'devops.jobinfo.job.key': '{key} 任务',
  'devops.jobinfo.job.key.success': '{key} 成功',
  'devops.jobinfo.job.keyConfirm': '确定{key} 该作业吗？',
  'devops.jobinfo.metrics.configMetrics': '任务监控配置',
  'devops.jobinfo.metrics.metricsItems': '监控项列表',
  'devops.jobinfo.metrics.selected': '已选择',
  'devops.jobinfo.offline': '下线',
  'devops.jobinfo.recently.job.status': '查看最近保存的作业状态信息',
  'devops.jobinfo.reonline': '重新上线',
  'devops.jobinfo.restart': '重新启动',
  'devops.jobinfo.savepoint.cancel': 'SavePoint 停止',
  'devops.jobinfo.savepoint.canceljob': '普通停止',
  'devops.jobinfo.savepoint.stop': 'SavePoint 暂停',
  'devops.jobinfo.savepoint.trigger': 'SavePoint 触发',
  'devops.jobinfo.smart_stop': '智能停止',
  'devops.jobinfo.unable.obtain.status': '无法连接到 Flink 集群获取最新作业状态信息',
  'devops.jobinfo.version.delete': '删除版本',
  'devops.jobinfo.version.delete.sure': '确定删除此版本吗？V{version}',
  'devops.jobinfo.version.latestVersion': '当前版本',
  'devops.jobinfo.version.rollBack': '回滚到此版本',
  'devops.jobinfo.version.versionList': '版本列表',
  'devops.joblist.detail': '详情',
  'devops.joblist.history': '历史',
  'devops.joblist.joblist': '任务列表',
  /**
   *
   * home
   *
   * */

  'home.develop': ' 数据开发',
  'home.develop.re': '资源注册情况',
  'home.develop.re.ag': '告警组',
  'home.develop.re.ai': '告警实例',
  'home.develop.re.cc': '集群配置',
  'home.develop.re.ci': 'Flink 集群实例',
  'home.develop.re.ds': '数据源',
  'home.develop.re.git': 'Git 项目',
  'home.develop.re.gv': '全局变量',
  'home.job.batch': '批作业',
  'home.job.development': '建设情况',
  'home.job.failed': '今日失败',
  'home.job.failed.handle': '已处理',
  'home.job.failed.name': '任务名称',
  'home.job.failed.rank': '排名',
  'home.job.failed.time': '已异常时间',
  'home.job.failed.unhandle': '当前未处理失败',
  'home.job.finished': '今日完成',
  'home.job.instance': '任务实例',
  'home.job.metrics': ' 作业监控',
  'home.job.online': '今日上线',
  'home.job.onlineRate': '作业上线率',
  'home.job.recovery': '今日恢复',
  'home.job.recovery.rate': '恢复占比',
  'home.job.running': '当前运行',
  'home.job.running.dayonday': '日环比',
  'home.job.running.status': '当前作业运行状态',
  'home.job.stream': '流作业',
  'home.server.load': '服务器负载',
  'home.server.load.bad': '较差',
  'home.server.load.excellent': '优秀',
  'home.server.load.good': '良好',
  /**
   *
   * layouts
   *
   * */

  'layouts.userLayout.title': 'Dinky 实时计算平台',
  /**
   *
   * login
   *
   * */

  'login.chooseTenant': '请选择租户',
  'login.chooseTenantFailed': '租户选择失败，请检查。。。',
  'login.chooseTenantSuccess': '{msg}，使用【 {tenantCode} 】进入系统，加载中。。。',
  'login.ldapLogin': 'LDAP登录',
  'login.notbindtenant': '您还没有绑定租户，请联系管理员',
  'login.password.placeholder': '密码',
  'login.password.required': '密码是必填项！',
  'login.rememberMe': '自动登录',
  'login.result': '{msg}\t\t{time}',
  'login.username.placeholder': '用户名',
  'login.username.required': '用户名是必填项！',
  /**
   *
   * menu
   *
   * */

  'menu.component': '组件',
  'menu.componentPlaceholder': '请输入组件',
  'menu.edit': '修改菜单',
  'menu.icon': '图标',
  'menu.icon.reference': '图标参考',
  'menu.iconPlaceholder': '请输入图标',
  'menu.management': '菜单管理',
  'menu.name': '菜单名称',
  'menu.namePlaceholder': '请输入菜单名称',
  'menu.orderNum': '排序',
  'menu.parentId': '父级菜单',
  'menu.parentIdPlaceholder': '请选择父级菜单',
  'menu.path': '路径',
  'menu.pathPlaceholder': '请输入路径',
  'menu.perms': '权限标识',
  'menu.permsPlaceholder': '请输入权限标识',
  'menu.tips.1': '修改菜单',
  'menu.tips.2': '添加根菜单',
  'menu.tips.3': '新增/删除子菜单',
  'menu.type': '菜单类型',
  'menu.type.button': '按钮',
  'menu.type.dir': '目录',
  'menu.type.menu': '菜单',
  'menu.typePlaceholder': '请选择菜单类型',
  /**
   *
   * metrics
   *
   * */

  'metrics.filter.10minutes': '10分钟',
  'metrics.filter.1day': '近一天',
  'metrics.filter.1hour': '1小时',
  'metrics.filter.1week': '近一周',
  'metrics.filter.2hours': '2小时',
  'metrics.filter.5hours': '5小时',
  'metrics.filter.5minutes': '5分钟',
  'metrics.filter.60seconds': '60秒',
  'metrics.filter.custom': '自定义',
  'metrics.filter.custom.range': '日期时间范围',
  'metrics.filter.real': '实时',
  'metrics.flink.job.name': '任务名称',
  'metrics.flink.job.placeholder': '请选择任务名称',
  'metrics.flink.jobId': 'Flink 任务ID',
  'metrics.flink.metrics.name': '指标名称',
  'metrics.flink.metrics.placeholder': '请选择指标名称(可多选)',
  'metrics.flink.subTask': '子任务',
  'metrics.flink.subTask.placeholder': '请选择子任务名称',
  'metrics.flink.taskId': 'Dinky 任务ID',
  /**
   *
   * pages
   *
   * */

  'pages.datastudio.editor.check': '检查',
  'pages.datastudio.editor.debug': '调试',
  'pages.datastudio.editor.exec': '运行',
  'pages.datastudio.editor.exec.error': '任务【{jobName}】执行失败',
  'pages.datastudio.editor.debug.error': '任务【{jobName}】调试失败',
  'pages.datastudio.editor.debug.success': '调试成功',
  'pages.datastudio.editor.exec.success': '执行成功',
  'pages.datastudio.editor.execute.warn':
    '该任务执行模式为【{type}】，不支持 SQL 查询，请手动保存后使用右侧按钮——作业提交',
  'pages.datastudio.editor.explan': '获取当前的 FlinkSql 的执行图',
  'pages.datastudio.editor.explan.tip': 'FlinkSQL 的 JobPlan',
  'pages.datastudio.editor.stop': '停止',
  'pages.datastudio.editor.stop.job': '停止作业',
  'pages.datastudio.editor.stop.jobConfirm': '确定停止作业【{jobName}】吗？',
  'pages.datastudio.editor.submitting': '新任务【{jobName}】正在执行',
  'pages.datastudio.editor.debugging': '新任务【{jobName}】正在调试',
  'pages.datastudio.editor.onlyread': '任务已发布，禁止修改，请先下线任务',
  'pages.datastudio.editor.notsave': '当前修改内容未保存！',
  'pages.datastudio.editor.notsave.note': '继续将抛弃所修改内容，确定继续吗？',
  'pages.datastudio.to.jobDetail': '运维',
  'pages.datastudio.explain.validate': '正在校验中...',
  'pages.datastudio.explain.validate.allright': '全部正确',
  'pages.datastudio.explain.validate.error': '存在错误，共计{errorCount}个',
  'pages.datastudio.explain.validate.grammar.error': '语法有误',
  'pages.datastudio.explain.validate.grammar.right': '语法正确',
  'pages.datastudio.explain.validate.logic.error': '逻辑有误',
  'pages.datastudio.explain.validate.logic.right': '逻辑正确',
  'pages.datastudio.explain.validate.msg': 'FlinkSql 语法和逻辑检查',
  'pages.datastudio.footer.codeEncoding': '文件编码：',
  'pages.datastudio.footer.codePosition': '行{Ln}',
  'pages.datastudio.footer.codeType': '代码类型：',
  'pages.datastudio.footer.lineSeparator': '行分隔符：',
  'pages.datastudio.footer.memDetails': '最大堆大小：{max}\n已使用：   {used}M',

  'pages.datastudio.sql.sqlChanged': '代码恢复',
  'pages.datastudio.sql.sqlChangedPrompt':
    '您修改的代码未保存，与服务端不一致，我们为您缓存了上次修改，请选择版本',
  'pages.datastudio.sql.sqldiff.title': '代码对比',
  'pages.datastudio.sql.paramdiff.title': '配置对比',
  'pages.datastudio.sql.nochange': '作业内容无变化',
  'pages.datastudio.sql.useCache': '使用缓存版本',
  'pages.datastudio.sql.useServer': '使用服务器版本',
  'pages.datastudio.sql.cacheVersion': '本地缓存代码',
  'pages.datastudio.sql.serverVersion': '服务端代码',
  'pages.datastudio.sql.configItem': '配置项',
  'pages.datastudio.sql.cacheConfigItem': '本地缓存配置',
  'pages.datastudio.sql.serverConfigItem': '服务端配置',

  'pages.datastudio.label.execConfig.autostop': '自动停止',
  'pages.datastudio.label.execConfig.autostop.tip':
    '开启自动停止，将在捕获最大行数记录后自动停止任务',
  'pages.datastudio.label.execConfig.changelog': '打印流',
  'pages.datastudio.label.execConfig.changelog.tip':
    '开启打印流，将同步运行并返回含有 op 信息的 ChangeLog，默认不开启且返回最终结果 Table',
  'pages.datastudio.label.execConfig.selectDatabase': '选择数据源',
  'pages.datastudio.label.execConfig.selectDatabase.tip': '选择 Sql 语句执行的数据源',
  'pages.datastudio.label.execConfig.maxrow': '最大行数',
  'pages.datastudio.label.execConfig.maxrow.tip': '预览数据的最大行数',
  'pages.datastudio.label.jobConfig': '作业配置',
  'pages.datastudio.label.jobConfig.addConfig': '添加配置项',
  'pages.datastudio.label.jobConfig.addConfig.params': '参数',
  'pages.datastudio.label.jobConfig.addConfig.value': '值',
  'pages.datastudio.label.jobConfig.alertGroup': '报警组',
  'pages.datastudio.label.jobConfig.alertGroup.tip': '选择报警组',
  'pages.datastudio.label.jobConfig.batchmode': '批模式',
  'pages.datastudio.label.jobConfig.batchmode.tip': '使用批模式',
  'pages.datastudio.label.jobConfig.cluster': 'Flink集群',
  'pages.datastudio.label.jobConfig.cluster.tip': '选择Flink集群',
  'pages.datastudio.label.jobConfig.clusterConfig': 'Flink集群配置',
  'pages.datastudio.label.jobConfig.clusterConfig.tip1':
    '选择Flink集群配置进行【{type}】模式的远程提交任务',
  'pages.datastudio.label.jobConfig.clusterConfig.tip2': '选择Flink集群配置',
  'pages.datastudio.label.jobConfig.execmode.tip': '指定 Flink 任务的执行模式，默认为 Local',
  'pages.datastudio.label.jobConfig.flinksql.env': 'FlinkSQL 环境',
  'pages.datastudio.label.jobConfig.flinksql.env.tip1':
    '选择当前任务的 FlinkSQL 执行环境，会提前执行环境语句，默认无。',
  'pages.datastudio.label.jobConfig.fragment': '全局变量',
  'pages.datastudio.label.jobConfig.fragment.tip': '【增强特性】 开启FlinkSql全局变量，使用“',
  'pages.datastudio.label.jobConfig.insert': 'Insert语句集',
  'pages.datastudio.label.jobConfig.insert.tip':
    '【增强特性】 开启语句集机制，将把多个 Insert 语句合成一个 JobGraph 再进行提交，Select 语句无效',
  'pages.datastudio.label.jobConfig.other': '其他配置',
  'pages.datastudio.label.jobConfig.other.tip': '其他配置项，将被应用于执行环境，如 pipeline.name',
  'pages.datastudio.label.jobConfig.parallelism': '任务并行度',
  'pages.datastudio.label.jobConfig.parallelism.tip': '设置Flink任务的并行度，最小为 1',
  'pages.datastudio.label.jobConfig.savePointStrategy': 'SavePoint策略',
  'pages.datastudio.label.jobConfig.savePointStrategy.tip': '指定 SavePoint策略，默认为禁用',
  'pages.datastudio.label.jobConfig.savePointpath': 'SavePoint路径',
  'pages.datastudio.label.jobConfig.savePointpath.tip1': '从SavePointPath恢复Flink任务',
  'pages.datastudio.label.jobConfig.savePointpath.tip2': 'hdfs',
  'pages.datastudio.label.jobInfo.dialect': '方言',
  'pages.datastudio.label.jobInfo.id': '任务ID',
  'pages.datastudio.label.jobInfo.name': '任务名称',
  'pages.datastudio.label.jobInfo.versionId': '版本号',
  'pages.datastudio.label.result.query.latest.data': '获取最新数据',
  'pages.datastudio.label.version': '版本历史',
  'pages.datastudio.label.version.diff': '版本对比',
  'pages.datastudio.label.version.leftTitle': '版本号：【{versionId}】 创建时间',
  'pages.datastudio.label.version.rightTitle': '版本号：【当前编辑版本】 创建时间',
  'pages.datastudio.label.version.rollback': '回滚',
  'pages.datastudio.label.version.rollback.flinksql': '回滚Flink SQL版本',
  'pages.datastudio.label.version.rollback.flinksqlConfirm':
    '确定回滚Flink SQL版本至【{versionId}】吗？',

  'pages.datastudio.catalog.catalogSelect': '请选择 catalog & database',
  'pages.datastudio.catalog.tableInfo': '表信息',
  'pages.datastudio.catalog.fieldInformation': '字段信息',
  'pages.datastudio.catalog.selectDatasource': '请选择数据源',
  'pages.datastudio.catalog.openMission': '请打开任务',

  'pages.datastudio.print.table.inputTableName': '请选择表名',
  'pages.devops.jobinfo.localenv': '本地环境',
  'pages.metadata.DataSearch': '数据查询',
  'pages.metadata.selectDatabase': '选择数据源',
  'pages.task.savePointPath': '保存点路径',

  'pages.datastudio.label.history.title': '任务:【{name}】执行历史记录',
  'pages.datastudio.label.history.execConfig': '执行配置',
  'pages.datastudio.label.history.statement': '执行语句',
  'pages.datastudio.label.history.result': '预览数据',
  'pages.datastudio.label.history.error': '查看错误日志',
  'pages.datastudio.label.history.deleteConfirm': '确定删除该执行历史记录吗？',
  'pages.datastudio.label.history.notSuccess': '该任务未成功执行，无法预览数据',
  'pages.datastudio.label.history.clusterConfigId': '集群配置ID',
  'pages.datastudio.label.history.clusterId': '集群实例ID',
  'pages.datastudio.label.history.taskType': '任务执行模式',
  'pages.datastudio.label.history.clusterName': '集群名称',
  'pages.datastudio.label.history.changelog': '打印流',
  'pages.datastudio.label.history.maxRows': '最大行数',
  'pages.datastudio.label.history.autoStop': '自动停止',
  'pages.datastudio.label.history.jobId': '任务ID',
  'pages.datastudio.label.history.jobName': '任务名称',
  'pages.datastudio.label.history.fragment': '全局变量',
  'pages.datastudio.label.history.statementSet': '语句集',
  'pages.datastudio.label.history.parallelism': '并行度',
  'pages.datastudio.label.history.checkpoint': 'Checkpoint间隔',
  'pages.datastudio.label.history.savePointStrategy': 'SavePoint策略',
  'pages.datastudio.label.history.savePointPath': 'SavePoint路径',
  'pages.datastudio.label.history.clusterType': '集群类型',
  'pages.datastudio.label.history.clusterInstance': '集群实例',
  'pages.datastudio.label.history.clusterConfig': '集群配置',
  'pages.datastudio.label.history.local': '本地(内置 MiniCluster)',

  /**
   *
   * rc
   *
   * */

  'rc.ag.alertCount': '告警实例数: {count}',
  'rc.ag.alertInstanceIds': '告警实例',
  'rc.ag.chooseAlertInstanceIds': '请选择告警组实例',
  'rc.ag.create': '创建告警组',
  'rc.ag.delete': '删除告警组',
  'rc.ag.deleteConfirm': '确定删除该告警组吗？',
  'rc.ag.inputName': '请输入告警组名称',
  'rc.ag.management': '告警组管理',
  'rc.ag.modify': '修改告警组',
  'rc.ag.name': '告警组名称',
  'rc.ag.search': '搜索 名称/备注',
  'rc.ai.accessKeyId': 'AccessKeyId',
  'rc.ai.accessKeyIdPleaseHolder': '请输入AccessKeyId',
  'rc.ai.accessKeySecret': 'AccessKeySecret',
  'rc.ai.accessKeySecretPleaseHolder': '请输入AccessKeySecret',
  'rc.ai.action': '接口方法',
  'rc.ai.actionPleaseHolder': '请输入接口方法',
  'rc.ai.agentId': '代理ID',
  'rc.ai.agentIdPleaseHolder': '请输入 AgentId',
  'rc.ai.apikey': '账号唯一标识',
  'rc.ai.apikeyPleaseHolder': '请输入账号唯一标识',
  'rc.ai.appId': '应用 ID',
  'rc.ai.appIdPleaseHolder': '请输入应用 ID',
  'rc.ai.appKey': 'App Key',
  'rc.ai.appKeyPleaseHolder': '请输入App Key',
  'rc.ai.appSecret': 'App Secret',
  'rc.ai.appSecretPleaseHolder': '请输入App Secret',
  'rc.ai.atMobiles': '@手机号',
  'rc.ai.atMobilesPleaseHolder': '请输入@手机号 多个使用英文逗号分开 ',
  'rc.ai.atUsers': '被@用户',
  'rc.ai.atUsersPleaseHolder': '请输入被@用户ID(需要飞书后台的用户ID),多个逗号隔开!',
  'rc.ai.baseUrl': 'REST API Base URL',
  'rc.ai.baseUrlPleaseHolder': '请输入 REST API Base URL',
  'rc.ai.callbackUrl': '官方回调地址',
  'rc.ai.callbackUrlPleaseHolder': '请输入官方回调地址',
  'rc.ai.choosetype': '请选择告警类型',
  'rc.ai.connTimeout': '请求超时时间',
  'rc.ai.connTimeoutPleaseHolder': '请输入请求超时时间',
  'rc.ai.corpId': '企业Id',
  'rc.ai.corpIdPleaseHolder': '请输入 企业Id',
  'rc.ai.create': '创建告警实例',
  'rc.ai.delete': '删除告警实例',
  'rc.ai.deleteConfirm': '确定删除选中的告警实例吗？',
  'rc.ai.dingTalk': '钉钉',
  'rc.ai.email': '邮箱',
  'rc.ai.emailPassword': '邮箱密码',
  'rc.ai.emailPasswordPleaseHolder': '请输入邮箱密码! 注意',
  'rc.ai.emailUser': '邮箱用户名',
  'rc.ai.emailUserPleaseHolder': '请输入邮箱用户名',
  'rc.ai.enableSmtpAuth': '开启邮箱验证',
  'rc.ai.feishu': '飞书',
  'rc.ai.isAtAll': '是否@全部',
  'rc.ai.isEnableProxy': '是否启用代理',
  'rc.ai.isSimple': '是否为简易模式',
  'rc.ai.isSimple.no': '否',
  'rc.ai.isSimple.yes': '是',
  'rc.ai.keyword': '关键词',
  'rc.ai.keywordPleaseHolder': '请输入关键词',
  'rc.ai.management': '告警实例管理',
  'rc.ai.manufacturers': '短信厂商',
  'rc.ai.manufacturersPleaseHolder': '请选择短信厂商',
  'rc.ai.mf.alibaba': '阿里云短信',
  'rc.ai.mf.cloopen': '容联云国内短信',
  'rc.ai.mf.ctyun': '天翼云短信',
  'rc.ai.mf.emay': '亿美软通国内短信',
  'rc.ai.mf.huawei': '华为云国内短信',
  'rc.ai.mf.jdcloud': '京东云国内短信',
  'rc.ai.mf.tencent': '腾讯云短信',
  'rc.ai.mf.uni': '合一短信',
  'rc.ai.mf.yunpian': '云片短信',
  'rc.ai.modify': '修改告警实例',
  'rc.ai.name': '名称',
  'rc.ai.search': '搜索 名称/类型',
  'rc.ai.namePleaseHolder': '请输入告警实例名称',
  'rc.ai.password': '密码',
  'rc.ai.passwordPleaseHolder': '请输入密码',
  'rc.ai.port': '端口',
  'rc.ai.portPleaseHolder': '代理端口',
  'rc.ai.proxy': '代理',
  'rc.ai.proxyPleaseHolder': '代理主机',
  'rc.ai.receiverCcs': '抄送人',
  'rc.ai.receiverCcsPleaseHolder': '请输入抄送人邮箱！多个英文逗号隔开!',
  'rc.ai.receivers': '收件人',
  'rc.ai.receiversPleaseHolder': '请输入收件人邮箱！多个英文逗号隔开',
  'rc.ai.regionId': '地域信息',
  'rc.ai.regionIdPleaseHolder': '请输入地域信息',
  'rc.ai.requestUrl': '请求地址',
  'rc.ai.requestUrlPleaseHolder': '请输入请求地址',
  'rc.ai.sdkAppId': '账号唯一标识',
  'rc.ai.sdkAppIdPleaseHolder': '请输入账号唯一标识',
  'rc.ai.secret': '密令',
  'rc.ai.secretKey': '访问键秘钥',
  'rc.ai.secretKeyPleaseHolder': '请输入访问键秘钥',
  'rc.ai.secretPleaseHolder': '请输入 密令',
  'rc.ai.sendType': '发送方式',
  'rc.ai.sendType.app': '应用',
  'rc.ai.sendType.wechat': '群聊',
  'rc.ai.sendTypePleaseHolder': '请选择发送方式！',
  'rc.ai.sender': '发送者昵称',
  'rc.ai.senderPleaseHolder': '请输入邮件服务器发送者昵称',
  'rc.ai.senders': '国内短信签名通道号',
  'rc.ai.sendersPleaseHolder': '请输入国内短信签名通道号',
  'rc.ai.serverHost': '邮件服务器Host',
  'rc.ai.serverHostPleaseHolder': '邮件服务器主机',
  'rc.ai.serverPort': '邮件服务器Port',
  'rc.ai.serverPortPleaseHolder': '请输入邮件服务器端口',
  'rc.ai.signature': '短信签名',
  'rc.ai.signaturePleaseHolder': '请输入短信签名',
  'rc.ai.sms': '短信',
  'rc.ai.smtpSslTrust': '受信任域',
  'rc.ai.smtpSslTrustPleaseHolder': '请输入受信任域',
  'rc.ai.sslEnable': '开启SSL',
  'rc.ai.starttlsEnable': '开启tls证书',
  'rc.ai.statusCallBack': '国内短信状态报告接收地',
  'rc.ai.statusCallBackPleaseHolder': '请输入国内短信状态报告接收地址',
  'rc.ai.templateId': '短信模板ID',
  'rc.ai.templateIdPleaseHolder': '请输入短信模板ID',
  'rc.ai.templateName': '模板变量',
  'rc.ai.templateNamePleaseHolder': '请输入短信模板变量',
  'rc.ai.type': '类型',
  'rc.ai.url': 'APP接入地址',
  'rc.ai.urlPleaseHolder': '请输入APP接入地址,建立短信应用后获取到的地址',
  'rc.ai.user': '用户名',
  'rc.ai.userPleaseHolder': '代理用户',
  'rc.ai.version': '版本号',
  'rc.ai.versionPleaseHolder': '请输入版本号',
  'rc.ai.webhook': 'WebHook 地址',
  'rc.ai.webhookPleaseHolder': '请输入 webhook 地址',
  'rc.ai.wechat': '企业微信',
  'rc.ai.wechatAtUsersPleaseHolder': '请输入被@用户ID(企微用户名全拼),多个逗号隔开!',
  'rc.ai.xls.file.path': 'XLS存放目录',
  'rc.ai.xls.file.pathPleaseHolder': '请输入XLS存放目录! 默认为 /tmp/xls',
  'rc.alert.template.create': '创建模板',
  'rc.alert.template.modify': '修改模板',
  'rc.alert.template.new': '新建告警模板',
  'rc.cc.addConfig': '添加配置项',
  'rc.cc.baseConfig': '基本配置',
  'rc.cc.ckpDir': '检查点路径',
  'rc.cc.ckpDirHelp': '请输入检查点路径! 此参数配置项为',
  'rc.cc.create': '创建集群配置',
  'rc.cc.defineConfig': 'Flink 预设配置（高优先级）',
  'rc.cc.delete': '删除集群配置',
  'rc.cc.deleteConfig': '删除配置项',
  'rc.cc.deleteConfirm': '确定删除该集群配置吗？',
  'rc.cc.docker.dinky.addr': 'Dinky 远程地址',
  'rc.cc.docker.dinky.addrHelp': 'Dinky 远程地址! eg',
  'rc.cc.docker.file': 'Docker 镜像文件',
  'rc.cc.docker.fileHelp': 'Docker 镜像文件! eg',
  'rc.cc.docker.instance': 'Docker 实例',
  'rc.cc.docker.instanceHelp': 'Docker 实例! eg',
  'rc.cc.docker.password': 'DockerHub 密码',
  'rc.cc.docker.passwordHelp': 'DockerHub 密码! eg',
  'rc.cc.docker.tag': 'Docker Tag版本',
  'rc.cc.docker.tagHelp': 'Docker Tag版本! eg',
  'rc.cc.docker.url': 'DockerHub 容器地址',
  'rc.cc.docker.urlHelp': 'DockerHub 容器地址! eg',
  'rc.cc.docker.username': 'DockerHub 用户名',
  'rc.cc.docker.usernameHelp': 'DockerHub 用户名! eg',
  'rc.cc.flink.defineConfig': 'Flink 自定义配置（高优先级）',
  'rc.cc.flinkConfig': 'Flink 配置',
  'rc.cc.flinkConfigPath': 'Flink 配置文件路径',
  'rc.cc.flinkConfigPathHelp': '请输入 flink-conf.yaml 路径！值如 /opt/module/flink/conf ',
  'rc.cc.flinkConfigPathPlaceholder': '请输入 flink-conf.yaml 路径！值如 /opt/module/flink/conf ',
  'rc.cc.hadoop.defineConfig': 'Hadoop 自定义配置（高优先级）',
  'rc.cc.hadoopConfig': 'Hadoop 配置',
  'rc.cc.hadoopConfigPath': 'Hadoop 配置文件路径',
  'rc.cc.hadoopConfigPathHelp':
    '指定配置文件路径（末尾无/），需要包含以下文件：core-site.xml,hdfs-site.xml,yarn-site.xml ！',
  'rc.cc.hadoopConfigPathPlaceholder': '请输入 hadoop 配置文件路径 ,值如 /etc/hadoop/conf！',
  'rc.cc.jmMem': 'JobManager 内存',
  'rc.cc.jmMemHelp': '请输入 JobManager 内存大小! 此参数配置项为',
  'rc.cc.k8s.account': 'K8s 提交账号',
  'rc.cc.k8s.accountHelp': 'K8s 提交使用的账号，默认 default! eg',
  'rc.cc.k8s.configFile': 'Kube 文件路径',
  'rc.cc.k8s.configFileHelp': '默认~/.kube/config， 填写kube文件路径，可用作远程连接! eg',
  'rc.cc.k8s.exposed': '暴露端口类型',
  'rc.cc.k8s.exposedHelp': '暴露端口类型! eg',
  'rc.cc.k8s.image': 'Flink 镜像地址',
  'rc.cc.k8s.imageHelp': 'Flink 镜像地址! eg',
  'rc.cc.k8s.jmCpu': 'JobManager CPU 配置',
  'rc.cc.k8s.jmCpuHelp': 'JobManager CPU 配置! eg',
  'rc.cc.k8s.namespace': 'Kubernetes 命名空间',
  'rc.cc.k8s.namespaceHelp': 'Kubernetes 命名空间! eg',
  'rc.cc.k8s.tmCpu': 'TaskManager CPU 配置',
  'rc.cc.k8s.tmCpuHelp': 'TaskManager CPU 配置! eg',
  'rc.cc.k8sConfig': 'Kubernetes 配置',
  'rc.cc.k8sOp.version': 'Flink 版本',
  'rc.cc.k8sOp.versionHelp': '请选择Flink 版本!',
  'rc.cc.key': '配置项',
  'rc.cc.libPath': 'Flink Lib 路径',
  'rc.cc.libPathHelp': '指定 lib 的 hdfs 路径（末尾无/），需要包含 Flink 运行时的依赖',
  'rc.cc.libPathPlaceholder': '请输入 lib 的 hdfs 路径！值如 hdfs',
  'rc.cc.management': '集群配置管理',
  'rc.cc.modify': '修改集群配置',
  'rc.cc.name': '集群配置名称',
  'rc.cc.search': '搜索 名称',
  'rc.cc.namePlaceholder': '请输入集群配置名称!',
  'rc.cc.spDir': '保存点路径',
  'rc.cc.spDirHelp': '请输入保存点路径! 此参数配置项为',
  'rc.cc.sqlSubmitJarPath': 'Jar 文件路径',
  'rc.cc.sqlSubmitJarPathHelp': '请输入 Jar 文件路径! eg',
  'rc.cc.start': '启动 Session 集群',
  'rc.cc.submitSqlConfig': '提交 FlinkSQL 配置项 (Application 模式必填)',
  'rc.cc.tmHeap': 'TaskManager 堆内存',
  'rc.cc.tmHeapHelp': '请输入 TaskManager 堆内存大小! 此参数配置项为',
  'rc.cc.tmMem': 'TaskManager 内存',
  'rc.cc.tmMemHelp': '请输入 TaskManager 内存大小! 此参数配置项为',
  'rc.cc.tsNum': '插槽数',
  'rc.cc.tsNumHelp': '请输入 TaskSet 数量! eg',
  'rc.cc.type': '类型',
  'rc.cc.typePlaceholder': '请选择集群配置类型!',
  'rc.cc.value': '配置值',
  'rc.ci.alias': '实例别名',
  'rc.ci.aliasPlaceholder': '请输入别名!',
  'rc.ci.ar': '自动注册',
  'rc.ci.mr': '手动注册',
  'rc.ci.create': '创建集群',
  'rc.ci.deleteConfirm': '确定删除该 Flink 实例吗？',
  'rc.ci.heartbeat': '心跳检测',
  'rc.ci.jma': 'JobManger 地址',
  'rc.ci.jmha': 'JobManger 高可用地址',
  'rc.ci.jmha.tips':
    '添加 Flink 集群的 JobManager 的 RestApi 地址。当 HA 模式时，地址间用英文逗号分隔，例如：192.168.123.101',
  'rc.ci.jmha.validate.port': '不符合规则! 端口号区间[0-65535]',
  'rc.ci.jmha.validate.slash': '不符合规则! 不能包含/',
  'rc.ci.jmhaPlaceholder': '请输入 JobManager HA 地址!',
  'rc.ci.management': '集群实例管理',
  'rc.ci.modify': '修改集群',
  'rc.ci.name': '实例名称',
  'rc.ci.namePlaceholder': '请输入名称!',
  'rc.ci.recycle': '回收 Flink 实例',
  'rc.ci.recycleConfirm': '确定回收所有自动创建且过期的 Flink 实例吗？',
  'rc.ci.status': '状态',
  'rc.ci.type': '类型',
  'rc.ci.typePlaceholder': '请选择集群类型!',
  'rc.ci.version': '版本',
  'rc.ci.desc': '描述',
  'rc.ci.search': '搜索 名称/别名/备注',
  'rc.doc.category': '文档类型',
  'rc.doc.categoryPlaceholder': '请选择该文档所属类型!',
  'rc.doc.create': '创建文档',
  'rc.doc.delete': '删除文档',
  'rc.doc.deleteConfirm': '确定删除此文档吗？',
  'rc.doc.description': '描述',
  'rc.doc.descriptionPlaceholder': '请输入文档描述信息!',
  'rc.doc.fillValue': '填充值',
  'rc.doc.fillValueHelp': '请输入填充值',
  'rc.doc.fillValuePlaceholder': '请输入填充值,编辑器内使用名称触发提示 eg',
  'rc.doc.functionType': '函数类型',
  'rc.doc.management': '文档管理',
  'rc.doc.modify': '修改文档',
  'rc.doc.name': '名称',
  'rc.doc.namePlaceholder': '请输入名称!',
  'rc.doc.subFunctionType': '子类型',
  'rc.doc.subTypePlaceholder': '请选择该文档所属函数类型!',
  'rc.doc.typePlaceholder': '请选择该文档所属函数类型!',
  'rc.doc.version': '版本',
  'rc.doc.versionPlaceholder': '请选择该文档所属版本!',
  'rc.ds.application': '应用',
  'rc.ds.autoIncrement': '自增',
  'rc.ds.backup': '备份',
  'rc.ds.character': '字符集',
  'rc.ds.collationRule': '排序规则',
  'rc.ds.columnName': '名称',
  'rc.ds.columnType': '类型',
  'rc.ds.search': '搜索 名称/注释',
  'rc.ds.comment': '注释',
  'rc.ds.console.exec': '执行',
  'rc.ds.console.running': '运行中...',
  'rc.ds.create': '创建数据源',
  'rc.ds.decimalDigits': '小数范围',
  'rc.ds.default': '默认值',
  'rc.ds.delete': '删除数据源',
  'rc.ds.deleteConfirm': '确定删除该数据源吗？',
  'rc.ds.detail.tag.console': '控制台',
  'rc.ds.detail.tag.desc': '描述',
  'rc.ds.detail.tag.gensql': '生成 SQL',
  'rc.ds.detail.tag.query': '查询',
  'rc.ds.detail.tips': '点击左侧的表,获取相关信息',
  'rc.ds.enter':
    '点击列表中的 icon 图片进入该数据源的详情页! 支持查看该数据源的库&表信息,以及可以进行即时查询',
  'rc.ds.enter.error': '该数据源状态异常无法进入,心跳正常后方可进入!',
  'rc.ds.flinkConfig': 'Flink 连接配置',
  'rc.ds.flinkConfigTooltip':
    '避免私密信息泄露，同时作为全局变量复用连接配置，在FlinkSQL中可使用 `变量引用方式` 来加载连接配置。说明：引用名称指的是唯一标识，即该表单中的`名称`。注意需要开启全局变量（原片段机制）',
  'rc.ds.flinkTemplate': 'Flink 连接模板',
  'rc.ds.flinkTemplateTooltip':
    'Flink 连接模板作用是为生成 FlinkSQL DDL 而扩展的功能。其中 `变量引用方式`中的 schemaName 是指动态获取数据库，`变量引用方式`中的 tableName 动态获取表名称',
  'rc.ds.groupName': '分组类型',
  'rc.ds.groupNamePlaceholder': '请选择分组类型!',
  'rc.ds.isNull': '非空',
  'rc.ds.javaType': 'Java 类型',
  'rc.ds.length': '长度',
  'rc.ds.management': '数据源管理',
  'rc.ds.modify': '修改数据源',
  'rc.ds.name': '名称',
  'rc.ds.namePlaceholder': '请输入名称!',
  'rc.ds.no': '序号',
  'rc.ds.other': '其他',
  'rc.ds.password': '密码',
  'rc.ds.passwordPlaceholder': '请输入密码!',
  'rc.ds.precision': '精度',
  'rc.ds.primarykey': '主键',
  'rc.ds.source': '来源',
  'rc.ds.type': '数据源类型',
  'rc.ds.typePlaceholder': '请选择数据源类型! 输入关键词搜索',
  'rc.ds.url': '数据库连接 URL',
  'rc.ds.urlPlaceholder': '请输入格式正确的 url 连接!',
  'rc.ds.username': '用户名',
  'rc.ds.usernamePlaceholder': '请输入用户名!',
  'rc.ds.warehouse': '数仓',
  'rc.gp.branch': '分支',
  'rc.gp.branchPlaceholder': '请选择分支!',
  'rc.gp.build': '构建',
  'rc.gp.build.step.0': '未构建',
  'rc.gp.build.step.1': '环境检查',
  'rc.gp.build.step.2': '克隆项目',
  'rc.gp.build.step.3': '编译构建',
  'rc.gp.build.step.4': '获取产物',
  'rc.gp.build.step.5': '分析 UDF',
  'rc.gp.build.step.6': '完成',
  'rc.gp.buildArgs': '构建参数',
  'rc.gp.buildConfirm': '确定开始构建该项目吗？',
  'rc.gp.buildFail': '构建失败',
  'rc.gp.buildState': '构建状态',
  'rc.gp.buildStep': '构建步骤',
  'rc.gp.buildSuccess': '构建成功',
  'rc.gp.building': '构建中',
  'rc.gp.codeTree': '查看代码',
  'rc.gp.codeTree.clickShow': '点击左侧文件查看代码',
  'rc.gp.codeTree.unSupportView': '不支持查看该文件类型',
  'rc.gp.codeType': '代码类型',
  'rc.gp.codeTypePlaceholder': '请选择代码类型!',
  'rc.gp.create': '创建项目',
  'rc.gp.delete': '删除项目',
  'rc.gp.deleteConfirm':
    '此操作会删除该项目下所有下载的代码! \n请谨慎操作!! \n此操作不可逆!!\n 你确定删除此项目吗?',
  'rc.gp.lastBuild': '最后构建时间',
  'rc.gp.level': '优先级',
  'rc.gp.level.tooltip': '数字越小，优先级越高，扫描的udf类重复与优先级挂钩',
  'rc.gp.log': '日志',
  'rc.gp.management': 'Git 项目管理(Beta)',
  'rc.gp.modify': '修改项目',
  'rc.gp.name': '项目名称',
  'rc.gp.namePlaceholder': '请输入名称!',
  'rc.gp.notBuild': '未构建',
  'rc.gp.password': '密码',
  'rc.gp.passwordPlaceholder': '请输入密码!',
  'rc.gp.pom': 'Pom文件路径',
  'rc.gp.pomPlaceholder': '请输入POM文件路径!',
  'rc.gp.privateKey': '私钥',
  'rc.gp.privateKeyPlaceholder': '输入私钥路径，eg：~/.ssh/id_rsa',
  'rc.gp.type': 'Clone 方式',
  'rc.gp.ucl.jarOrder': ' Jar 级别排序',
  'rc.gp.ucl.jarPath': 'Jar 路径',
  'rc.gp.ucl.orderLine': 'Jar 优先级',
  'rc.gp.ucl.orderLine.tooltip': '数字越小，加载 Jar 中的 UDF 优先级越高',
  'rc.gp.ucl.projectOrder': '项目级别排序',
  'rc.gp.url': '项目地址',
  'rc.gp.urlPlaceholder': '请输入项目地址!',
  'rc.gp.username': '用户名',
  'rc.gp.usernamePlaceholder': '请输入用户名!',
  'rc.gv.Management': '全局变量管理',
  'rc.gv.create': '创建全局变量',
  'rc.gv.delete': '删除全局变量',
  'rc.gv.deleteConfirm': '确定删除该全局变量吗？',
  'rc.gv.modify': '修改全局变量',
  'rc.gv.name': '名称',
  'rc.gv.namePlaceholder': '请输入名称!',
  'rc.gv.value': '变量值',
  'rc.gv.valuePlaceholder': '请输入全局变量值',
  'rc.resource.click': '点击左侧文件查看详情',
  'rc.resource.click.tip1': '请确保资源配置正确,否则会导致资源上传失败!',
  'rc.resource.click.tip2':
    ' 如果您的配置中心的资源配置没有配置资源上传路径/使用默认的资源上传路径(/dinky)',
  'rc.resource.click.tip3': ' 您可以点击右侧链接进行配置 ->',
  'rc.resource.upload': '上传文件夹/文件',
  'rc.resource.upload.success': '文件 【{fileName}】 上传成功',
  'rc.resource.upload.fail': '文件 【{fileName}】 上传失败',
  'rc.resource.upload.tip1': '点击或拖拽文件到此区域上传',
  'rc.resource.upload.tip2': '支持单个或批量上传。严禁上传公司数据或其他禁止上传的文件。',
  'rc.template.codeType': '代码类型',
  'rc.template.codeTypePlaceholder': '请选择代码类型！',
  'rc.template.create': '创建 UDF 模板',
  'rc.template.delete': '删除模板！',
  'rc.template.deleteConfirm': '确定删除该模板吗?',
  'rc.template.functionType': '函数类型',
  'rc.template.functionTypePlaceholder': '请选择函数类型！',
  'rc.template.modify': '修改 UDF 模板',
  'rc.template.name': '模板名',
  'rc.template.namePlaceholder': '请输入模板名！',
  'rc.template.templateCode': '模板代码',
  'rc.template.templateCodeLabel': '模板代码（{language}）',
  'rc.template.templateCodePlaceholder': '请编辑模板代码！',
  'rc.udf.template.management': 'UDF 模板管理',
  'rc.udf.register.management': 'UDF 注册管理',
  'rc.udf.register.file.name': '文件名称',
  'rc.udf.register.parse.count': 'UDF 解析数量',
  'rc.udf.register.source': '来源',
  'rc.udf.register.language': '语言',
  'rc.udf.register.name': '名称',
  'rc.udf.register.className': '类名',
  'rc.udf.register.deleteConfirm': '确定删除该 UDF 吗？',
  'rc.udf.register': '注册 UDF',
  'rc.udf.register.select': '请选择非目录节点！',

  /**
   *
   * role
   *
   * */

  'role.EnterNote': '请输入角色的备注/描述信息!',
  'role.EnterRoleCode': '请输入角色编码!',
  'role.EnterRoleName': '请输入角色名称!',
  'role.assign': '分配权限',
  'role.assignMenu': '角色: {roleName} 分配菜单',
  'role.belongTenant': '所属租户',
  'role.create': '创建角色',
  'role.delete': '删除角色',
  'role.deleteConfirm': '您确定要删除此角色吗？',
  'role.roleCode': '角色编码',
  'role.roleManagement': '角色管理',
  'role.roleName': '角色名称',
  'role.update': '修改角色',
  'role.user.list': '角色用户列表',
  /**
   *
   * rowPermissions
   *
   * */

  'rowPermissions.create': '创建行权限',
  'rowPermissions.deleteConfirm': '您确定要删除此行权限吗？',
  'rowPermissions.expression': '表达式',
  'rowPermissions.expressionPlaceholder': '请输入表达式',
  'rowPermissions.management': '行权限管理',
  'rowPermissions.roleName': '角色名称',
  'rowPermissions.roleNamePlaceholder': '请选择角色',
  'rowPermissions.tableName': '表名',
  'rowPermissions.tableNamePlaceholder': '请输入表名',
  'rowPermissions.update': '修改行权限',
  /**
   *
   * sys
   *
   * */
  'sys.alert.rule.label.taskId': '作业ID',
  'sys.alert.rule.label.duration': '运行时间',
  'sys.alert.rule.label.batchModel': '批模式',
  'sys.alert.rule.label.jobType': '执行模式',
  'sys.alert.rule.label.jobException': '作业产生异常',
  'sys.alert.rule.label.checkpointFailed': 'Checkpoint失败',
  'sys.alert.rule.label.checkpointTime': 'CheckPoint时间',
  'sys.alert.rule.label.jobStatus': '作业状态',
  'sys.alert.rule.addRule': '添加规则',
  'sys.alert.rule.allRule': '所有规则',
  'sys.alert.rule.anyRule': '任意规则',
  'sys.alert.rule.delete': '你确定要删除该告警策略吗？',
  'sys.alert.rule.name': '告警策略名称',
  'sys.alert.rule.rule': '规则',
  'sys.alert.rule.ruleType': '规则类型',
  'sys.alert.rule.template': '告警模板',
  'sys.alert.rule.trigger': '触发配置',
  'sys.alert.rule.triggerConditions': '触发条件',
  'sys.alert.rule.triggerRule': '触发规则',
  'sys.info.logList.tips': '点击左侧日志文件查看',
  'sys.process.duration': '耗时',
  'sys.process.endTime': '结束时间',
  'sys.process.id': '进程ID',
  'sys.process.name': '进程名',
  'sys.process.operator': '操作人',
  'sys.process.startTime': '开始时间',
  'sys.process.status': '状态',
  'sys.process.subStep.error': '步骤 Error 日志',
  'sys.process.subStep.info': '步骤 Info 日志',
  'sys.process.subStep.status': '步骤状态',
  'sys.process.taskId': '任务ID',
  'sys.process.type': '类型',
  'sys.process.viewErrorLog': '查看 Error 级别日志',
  'sys.process.viewInfoLog': '查看 Info 级别日志',
  'sys.setting.dinky': 'Dinky 环境配置',
  'sys.setting.dinky.tooltip': '主要以修改系统变量为主，保证基础功能稳定运行',
  'sys.setting.ds': 'DolphinScheduler 配置',
  'sys.setting.ds.tooltip': '海豚调度插件设置，可以让您把dinky任务丝滑推到海豚调度器工作流上',
  'sys.setting.flink': 'Flink 配置',
  'sys.setting.flink.tooltip': 'Dinky对接 Flink 主要参数',
  'sys.setting.ldap': 'LDAP 配置',
  'sys.setting.ldap.tooltip': 'LDAP统一认证配置',
  'sys.setting.maven': 'Maven 配置',
  'sys.setting.maven.tooltip': 'Maven 编译的主要参数',
  'sys.setting.metrics': 'Metrics 配置',
  'sys.setting.metrics.tooltip': 'Monitor 监控页面设置，调整Metrics探测',
  'sys.setting.modify': '修改配置 {key}',
  'sys.setting.resource': 'Resource 配置',
  'sys.setting.tag.core': '核心配置',
  'sys.setting.tag.extend': '扩展配置',
  'sys.setting.tag.integration': '集成配置',
  'sys.setting.tag.system': '系统配置',
  'sys.ldap.settings.testConnect': '测试连接',
  'sys.ldap.settings.testConnect.success': '测试连接成功，获取到了{count}个用户',
  'sys.ldap.settings.testLogin': '测试登录',
  'sys.ldap.settings.loadUser': '导入用户',
  'sys.ldap.settings.loadable': '是否可以导入',
  /**
   *
   * tenant
   *
   * */

  'tenant.AssignUser': '分配用户',
  'tenant.EnterTenantCode': '请输入租户编码!',
  'tenant.EnterTenantNote': '请输入租户备注/描述信息!',
  'tenant.TenantCode': '租户编码',
  'tenant.TenantManager': '租户管理',
  'tenant.cancel.admin': '取消租户管理员',
  'tenant.create': '创建租户',
  'tenant.delete': '删除租户',
  'tenant.deleteConfirm': '您确定要删除此租户吗？',
  'tenant.set.admin': '设置租户管理员',
  'tenant.update': '修改租户',
  'tenant.user.list': '租户用户列表',
  /**
   *
   * token
   *
   * */

  'token.choose.expireType': '请选择过期类型',
  'token.create': '创建 Token',
  'token.deleteConfirm': '您确定要删除此 Token 吗？',
  'token.expireEndTime': '结束时间',
  'token.expireStartTime': '开始时间',
  'token.expireTime': '过期时间',
  'token.expireTime.placeholder': '请选择过期时间',
  'token.expireType': '过期类型',
  'token.expireType.1': '永不过期',
  'token.expireType.2': '指定结束时间',
  'token.expireType.3': '过期时间范围',
  'token.generate': '生成 Token',
  'token.generate.placeholder': '请生成 Token',
  'token.manager': 'Token管理',
  'token.role': '角色',
  'token.role.choose': '请选择角色',
  'token.tenant': '租户',
  'token.tenant.choose': '请选择租户',
  'token.update': '修改 Token',
  'token.user.choose': '请选择用户',
  'token.username': '用户',
  'token.value': 'Token',
  /**
   *
   * user
   *
   * */

  'user.assignRole': '分配角色',
  'user.changePasswordSuccess': '密码修改成功, 即将跳转至登录页重新登录!',
  'user.create': '添加用户',
  'user.current.tenant': '当前登录租户',
  'user.delete': '删除用户',
  'user.deleteConfirm': '您确定要删除此用户吗？',
  'user.info': '个人信息',
  'user.isdelete': '该用户已被删除，无法重置密码，请先恢复该用户!',
  'user.jobnumber': '工号',
  'user.jobnumberPlaceholder': '请输入工号',
  'user.login.accesstime': '登录时间',
  'user.login.ip': '登录IP',
  'user.login.status.code': '状态值',
  'user.login.status.msg': '信息',
  'user.loginlog': '登录日志',
  'user.manager': '用户管理',
  'user.newpwd': '新密码',
  'user.newpwdPlaceholder': '请输入新密码',
  'user.nickname': '昵称',
  'user.nicknamePlaceholder': '请输入昵称',
  'user.oldNewPwdNoMatch': '两次输入的新密码不一致',
  'user.oldpwd': '旧密码',
  'user.oldpwdPlaceholder': '请输入旧密码',
  'user.op': '操作记录',
  'user.op.error.msg': '错误信息',
  'user.op.ip': 'IP',
  'user.op.method': '方法',
  'user.op.module': '模块',
  'user.op.name': '操作人',
  'user.op.params': '请求参数',
  'user.op.result': '返回结果',
  'user.op.status': '状态',
  'user.op.time': '操作时间',
  'user.op.type': '业务类型',
  'user.op.url': '地址',
  'user.phone': '手机号',
  'user.phonePlaceholder': '请输入手机号',
  'user.recovery': '您确定要恢复此用户吗？',
  'user.repeatpwd': '重复新密码',
  'user.repeatpwdPlaceholder': '请重复输入新密码',
  'user.request.type': '请求类型',
  'user.reset': '您确定要重置此用户密码吗?',
  'user.resetPassword': '重置密码',
  'user.resetPasswordSuccess': '用户 [{username}] 重置密码成功, 新密码: {password}',
  'user.role': '角色',
  'user.status': '是否删除',
  'user.superAdminFlag': '超级管理员',
  'user.tenant': '租户',
  'user.tenantAdminFlag': '租户管理员',
  'user.type': '注册类型',
  'user.update': '修改用户',
  'user.username': '用户名',
  'user.usernamePlaceholder': '请输入用户名',

  'lineage.getError': '无法获取血缘',
  'lineage.expandField': '展开字段',
  'lineage.collapseField': '收缩字段',
  'lineage.expandDownstream': '展开下游',
  'lineage.collapseDownstream': '收起下游',
  'lineage.expandUpstream': '展开上游',
  'lineage.collapseUpstream': '收起上游',
  'lineage.showMap': '显示小地图',
  'lineage.hideMap': '隐藏小地图',
  'lineage.refresh': '刷新血缘'
};
