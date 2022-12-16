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
  'pages.layouts.userLayout.title': 'Dinky 实时计算平台',
  'pages.login.accountLogin.tab': '账户密码登录',
  'pages.login.accountLogin.errorMessage': '错误的用户名和密码（admin/admin)',
  'pages.login.failure': '登录失败，请重试！',
  'pages.login.success': '登录成功！',
  'pages.login.chooseTenant': '请选择租户',
  'pages.login.username.placeholder': '用户名: admin',
  'pages.login.username.required': '用户名是必填项！',
  'pages.login.password.placeholder': '密码: admin',
  'pages.login.password.required': '密码是必填项！',
  'pages.login.phoneLogin.tab': '手机号登录',
  'pages.login.phoneLogin.errorMessage': '验证码错误',
  'pages.login.phoneNumber.placeholder': '请输入手机号！',
  'pages.login.phoneNumber.required': '手机号是必填项！',
  'pages.login.phoneNumber.invalid': '不合法的手机号！',
  'pages.login.captcha.placeholder': '请输入验证码！',
  'pages.login.captcha.required': '验证码是必填项！',
  'pages.login.phoneLogin.getVerificationCode': '获取验证码',
  'pages.getCaptchaSecondText': '秒后重新获取',
  'pages.login.rememberMe': '自动登录',
  'pages.login.forgotPassword': '忘记密码 ?',
  'pages.login.submit': '登录',
  'pages.login.loginWith': '其他登录方式 :',
  'pages.login.registerAccount': '注册账户',
  'pages.welcome.Community': '官方社区',
  'pages.welcome.upgrade': '更新日志',
  'pages.welcome.QQ': 'QQ官方社区群',
  'pages.welcome.QQcode': '543709668',
  'pages.welcome.link': '欢迎加入',
  'pages.welcome.star': '欢迎 Star ',
  'pages.welcome.advancedLayout': 'Github',
  'pages.welcome.alertMessage': '实时计算平台 Dinky 即将发布，目前为体验版，版本号为 {version}。',
  'pages.admin.subPage.title': ' 这个页面只有 admin 权限才能查看',
  'pages.admin.subPage.alertMessage': 'umi ui 现已发布，欢迎使用 npm run ui 启动体验。',
  'pages.searchTable.createForm.newRule': '新建规则',
  'pages.searchTable.updateForm.ruleConfig': '规则配置',
  'pages.searchTable.updateForm.basicConfig': '基本信息',
  'pages.searchTable.updateForm.ruleName.nameLabel': '规则名称',
  'pages.searchTable.updateForm.ruleName.nameRules': '请输入规则名称！',
  'pages.searchTable.updateForm.ruleDesc.descLabel': '规则描述',
  'pages.searchTable.updateForm.ruleDesc.descPlaceholder': '请输入至少五个字符',
  'pages.searchTable.updateForm.ruleDesc.descRules': '请输入至少五个字符的规则描述！',
  'pages.searchTable.updateForm.ruleProps.title': '配置规则属性',
  'pages.searchTable.updateForm.object': '监控对象',
  'pages.searchTable.updateForm.ruleProps.templateLabel': '规则模板',
  'pages.searchTable.updateForm.ruleProps.typeLabel': '规则类型',
  'pages.searchTable.updateForm.schedulingPeriod.title': '设定调度周期',
  'pages.searchTable.updateForm.schedulingPeriod.timeLabel': '开始时间',
  'pages.searchTable.updateForm.schedulingPeriod.timeRules': '请选择开始时间！',
  'pages.searchTable.titleDesc': '描述',
  'pages.searchTable.ruleName': '规则名称为必填项',
  'pages.searchTable.titleCallNo': '服务调用次数',
  'pages.searchTable.titleStatus': '状态',
  'pages.searchTable.nameStatus.default': '关闭',
  'pages.searchTable.nameStatus.running': '运行中',
  'pages.searchTable.nameStatus.online': '已上线',
  'pages.searchTable.nameStatus.abnormal': '异常',
  'pages.searchTable.titleUpdatedAt': '上次调度时间',
  'pages.searchTable.exception': '请输入异常原因！',
  'pages.searchTable.titleOption': '操作',
  'pages.searchTable.config': '配置',
  'pages.searchTable.subscribeAlert': '订阅警报',
  'pages.searchTable.title': '查询表格',
  'pages.searchTable.new': '新建',
  'pages.searchTable.chosen': '已选择',
  'pages.searchTable.item': '项',
  'pages.searchTable.totalServiceCalls': '服务调用次数总计',
  'pages.searchTable.tenThousand': '万',
  'pages.searchTable.batchDeletion': '批量删除',
  'pages.searchTable.batchApproval': '批量审批',


  'pages.devops.jobstatus.CREATED': '已创建',
  'pages.devops.jobstatus.INITIALIZING': '初始化',
  'pages.devops.jobstatus.RUNNING': '运行中',
  'pages.devops.jobstatus.FINISHED': '已完成',
  'pages.devops.jobstatus.FAILING': '异常中',
  'pages.devops.jobstatus.FAILED': '已异常',
  'pages.devops.jobstatus.SUSPENDED': '已暂停',
  'pages.devops.jobstatus.CANCELLING': '停止中',
  'pages.devops.jobstatus.CANCELED': '停止',
  'pages.devops.jobstatus.RESTARTING': '重启中',
  'pages.devops.jobstatus.UNKNOWN': '未知',

  'pages.devops.LastUpdateTime': '最后更新时间',

  'pages.settings.UserManagement': '用户管理',
  'pages.settings.Flink': 'Flink 设置',
  'pages.settings.FlinkURL': '提交 FlinkSQL 的 Jar 文件路径',

  'pages.settings.FlinkSQLJarMainParameter': '提交 FlinkSQL 的 Jar 的主类入参',
  'pages.settings.FlinkSQLJarMainClass': '提交 FlinkSQL 的 Jar 的主类',
  'pages.settings.FlinkRestAPI': '使用 Rest API',
  'pages.settings.FlinkURLSplit': 'FlinkSQL 语句分隔符',
  'pages.settings.FlinkJobID': '获取 Job ID 的最大等待时间（秒）',
  'pages.settings.FlinkNoSetting': '未设置',
  'pages.settings.FlinkNoUseSetting': '启用后，Flink 任务的 savepoint、停止等操作将通过 JobManager 的 RestAPI 进行',

  'pages.user.UserManger': '用户管理',
  'pages.user.UserName': '用户名',
  'pages.user.UserJobNumber': '工号',
  'pages.user.UserPhoneNumber': '手机号',
  'pages.user.UserNickName': '昵称',


  'pages.user.UserDeleteUser': '删除用户',
  'pages.user.UserCreateUser': '添加用户',
  'pages.user.UserUpdateUser': '修改用户',
  'pages.user.AssignRole': '分配角色',
  'pages.user.delete': '删除用户',
  'pages.user.deleteConfirm': '您确定要删除此用户吗？',
  'pages.user.enable': '启用用户',
  'pages.user.enableConfirm': '您确定要启用此用户吗？',
  'pages.user.disable': '禁用用户',
  'pages.user.disableConfirm': '您确定要禁用此用户吗？',
  'pages.user.UserEnterUserName': '请输入用户名',
  'pages.user.UserEnterUniqueUserName': '请输入唯一的用户名',
  'pages.user.UserEnterJobNumber': '请输入工号',
  'pages.user.UserEnterNickName': '请输入昵称',
  'pages.user.UserEnterPhoneNumber': '请输入手机号',
  'pages.user.UserOldPassword': '旧密码',
  'pages.user.UserNewPassword': '新密码',
  'pages.user.UserRepeatNewPassword': '重复新密码',
  'pages.user.UserEnterOldPassword': '请输入旧密码',
  'pages.user.UserEnterNewPassword': '请输入新密码',
  'pages.user.UserEnterRepeatNewPassword': '请重复输入新密码',
  'pages.user.UserNewPasswordNotMatch': '两次输入的新密码不一致',
  'pages.user.disableTotalOf': '被禁用的用户共 {total} 个',


  'pages.tenant.TenantManager': '租户管理',
  'pages.tenant.TenantCode': '租户编码',
  'pages.tenant.AssignUser': '分配用户',
  'pages.tenant.create': '创建租户',
  'pages.tenant.update': '修改租户',
  'pages.tenant.EnterTenantCode': '请输入租户编码!',
  'pages.tenant.EnterTenantNote': '请输入租户备注/描述信息!',
  'pages.tenant.delete': '删除租户',
  'pages.tenant.deleteConfirm': '您确定要删除此租户吗？',
  'pages.tenant.enable': '启用租户',
  'pages.tenant.enableConfirm': '您确定要启用此租户吗？',
  'pages.tenant.disable': '禁用租户',
  'pages.tenant.disableConfirm': '您确定要禁用此租户吗？',


  'pages.nameSpace.NameSpaceManagement': '命名空间管理',
  'pages.nameSpace.NameSpaceCode': '命名空间编码',
  'pages.nameSpace.belongTenant': '所属租户',
  'pages.nameSpace.deleteNameSpace': '删除命名空间',
  'pages.nameSpace.deleteNameSpaceConfirm': '您确定要删除此命名空间吗？',
  'pages.nameSpace.enableNameSpace': '启用命名空间',
  'pages.nameSpace.enableNameSpaceConfirm': '您确定要启用此命名空间吗？',
  'pages.nameSpace.disableNameSpace': '禁用命名空间',
  'pages.nameSpace.disableNameSpaceConfirm': '您确定要禁用此命名空间吗？',
  'pages.nameSpace.create': '创建命名空间',
  'pages.nameSpace.update': '修改命名空间',
  'pages.nameSpace.EnterNameSpaceCode': '请输入命名空间编码!',
  'pages.nameSpace.EnterNameSpaceNote': '请输入命名空间的备注/描述信息!',
  'pages.nameSpace.disableTotalOf': '被禁用的命名空间共 {total} 个',

  'pages.role.roleManagement': '角色管理',
  'pages.role.roleCode': '角色编码',
  'pages.role.roleName': '角色名称',
  'pages.role.namespaceIds': '命名空间',
  'pages.role.belongTenant': '所属租户',
  'pages.role.create': '创建角色',
  'pages.role.update': '修改角色',
  'pages.role.EnterRoleCode': '请输入角色编码!',
  'pages.role.EnterRoleName': '请输入角色名称!',
  'pages.role.selectNameSpace': '请选择命名空间!',
  'pages.role.EnterNote': '请输入角色的备注/描述信息!',
  'pages.role.delete': '删除角色',
  'pages.role.deleteConfirm': '您确定要删除此角色吗？',
  'pages.role.enable': '启用角色',
  'pages.role.enableConfirm': '您确定要启用此角色吗？',
  'pages.role.disable': '禁用角色',
  'pages.role.disableConfirm': '您确定要禁用此角色吗？',


  'pages.regist.openAPI': 'OpenAPI 文档',
  'pages.regist.BusinessComponent': '业务组件文档',


  'pages.metadata.NoDatabaseSelected': '未选择数据源',
  'pages.metadata.Application': 'Application',
  'pages.metadata.TableInfo': '表信息',
  'pages.metadata.Description': '描述',
  'pages.metadata.DataSearch': '数据查询',
  'pages.metadata.GenerateSQL': 'SQL 生成',
  'pages.metadata.FieldInformation': '字段信息',

  'pages.metadata.Console': '控制台',
  'pages.metadata.help.noSqlSelect': '未选择任何sql！',
  'pages.metadata.help.selectSql': '请在编辑器内选择你要执行的sql',
  'pages.metadata.help.exec': '执行选中sql',
  'pages.metadata.exec.result.msg': '执行时间: {time} 秒, 总行数: {rowCount}',
  'pages.metadata.exec.result.msghelp': '行数超过500，仅显示前500',

  'pages.TableData.QueryConditions': '查询条件',
  'pages.TableData.sorting': '排序',
  'pages.TableData.data': '数据',
  'pages.TableData.search': '搜索',

  'pages.datastudio.label.info': '信息',
  'pages.datastudio.label.result': '结果',
  'pages.datastudio.label.result.query.latest.data': '获取最新数据',

  'pages.datastudio.explain.validate.msg': 'FlinkSql 语法和逻辑检查',
  'pages.datastudio.explain.validate': '正在校验中...',
  'pages.datastudio.explain.validate.allright': '全部正确',
  'pages.datastudio.explain.validate.error': '存在错误，共计{errorCount}个',
  'pages.datastudio.explain.validate.grammar.right': '语法正确',
  'pages.datastudio.explain.validate.grammar.error': '语法有误',
  'pages.datastudio.explain.validate.logic.right': '逻辑正确',
  'pages.datastudio.explain.validate.logic.error': '逻辑有误',



  'pages.datastudio.label.lineage': '血缘',
  'pages.datastudio.label.lineage.expand.field': '展开字段',
  'pages.datastudio.label.lineage.collapse.field': '收起字段',
  'pages.datastudio.label.lineage.expand.lineage': '收起血缘',
  'pages.datastudio.label.lineage.collapse.lineage': '展开血缘',

  'pages.datastudio.label.process': '进程',
  'pages.datastudio.label.process.detail': '详情',
  'pages.datastudio.label.process.savepoint': '保存点',
  'pages.datastudio.label.process.trigger': '触发',
  'pages.datastudio.label.process.cancel': 'Cancel',
  'pages.datastudio.label.process.stop': '停止',
  'pages.datastudio.label.process.stopconfirm': '确定停止 【{jobid}】？',
  'pages.datastudio.label.process.stopsuccess': '停止成功',
  'pages.datastudio.label.process.stopfailed': '停止失败',
  'pages.datastudio.label.process.switchcluster': '选择Flink集群',

  'pages.datastudio.label.history': '历史',
  'pages.datastudio.label.function': '函数',

  'pages.datastudio.label.directory': '目录',
  'pages.datastudio.label.structure': '结构',
  'pages.datastudio.label.session': '会话',
  'pages.datastudio.label.cluster': '集群',
  'pages.datastudio.label.datasource': '数据源',
  'pages.datastudio.label.meta': '元数据',
  'pages.datastudio.label.globalvariable': '全局变量',
  'pages.datastudio.label.guidepage': '引导页',

  'pages.datastudio.label.registcluster': '注册 Flink 集群实例',
  'pages.datastudio.label.registclusterconfig': '注册集群配置',
  'pages.datastudio.label.registjar': '注册 Jar',
  'pages.datastudio.label.registdatasource': '注册数据源',
  'pages.datastudio.label.metadata': '元数据',
  'pages.datastudio.label.alarmInstance': '注册告警实例',
  'pages.datastudio.label.alarmGroup': '告警组',
  'pages.datastudio.label.val': '注册全局变量',
  'pages.datastudio.label.udfTemplate': 'UDF 模板',
  'pages.datastudio.label.systemInfo': '系统信息',
  'pages.datastudio.label.registdocument': '注册文档',
  'pages.datastudio.label.configsystemconfig': '修改系统配置',
  'pages.datastudio.label.officialdocumentation': '官网文档',
  'pages.datastudio.label.quickguide': '快捷引导',

  'pages.datastudio.label.welcomeuse': '欢迎使用 Dinky v{version}',
  'pages.datastudio.label.dinkydescribe': '实时即未来，Dinky 为 Apache Flink 而生，让 Flink SQL 纵享丝滑，并致力于实时计算平台建设。',
  'pages.datastudio.label.maxrows': '最大行数',


  'pages.devops.result.success': '操作成功',
  'pages.devops.lable.allonline': '一键上线',
  'pages.devops.lable.alloffline': '一键下线',
  'pages.devops.lable.onlinelist': '上线明细',
  'pages.devops.lable.offlinelist': '下线明细',
  'pages.devops.lable.instance': '实例',
  'pages.devops.lable.online': '上线',
  'pages.devops.lable.offline': '下线',
  'pages.devops.lable.pleaseSelect': '请选择',

  'pages.devops.lable.online.list': '上线明细列表',
  'pages.devops.lable.offline.list': '下线明细列表',
  'pages.devops.lable.line.name': '名称',
  'pages.devops.lable.line.status': '状态',
  'pages.devops.lable.line.code': '结果',
  'pages.devops.lable.line.message': '信息',
  'pages.devops.lable.line.piontConfig': '点位配置选择',
  'pages.devops.lable.line.piontConfig.default': '默认保存点',
  'pages.devops.lable.line.piontConfig.last': '最新保存点',


  'pages.rc.clusterManagement': '集群实例管理',
  'pages.rc.cluster.instanceName': '实例名称',
  'pages.rc.cluster.alias': '别名',
  'pages.rc.cluster.type': '类型',
  'pages.rc.cluster.jobManagerAddress': 'JobManger 地址',
  'pages.rc.cluster.version': '版本',
  'pages.rc.cluster.jobManagerHaAddress': 'JobManger 高可用地址',
  'pages.rc.cluster.instanceId': '实例 Id',
  'pages.rc.cluster.create': '创建集群',
  'pages.rc.cluster.modify': '修改集群',
  'pages.rc.cluster.delete': '删除 Flink 实例',
  'pages.rc.cluster.deleteConfirm': '确定删除该 Flink 实例吗？',
  'pages.rc.cluster.recycle': '回收 Flink 实例',
  'pages.rc.cluster.recycleConfirm': '确定回收所有自动创建且过期的 Flink 实例吗？',
  'pages.rc.cluster.recycle.success' : '成功回收{total}个 Flink 实例',
  'pages.rc.cluster.enable': '启用 Flink 实例',
  'pages.rc.cluster.enableConfirm': '您确定要启用此 Flink 实例吗？',
  'pages.rc.cluster.disable': '禁用 Flink 实例',
  'pages.rc.cluster.disableConfirm': '您确定要禁用此 Flink 实例吗？',
  'pages.rc.cluster.disableTotalOf': '被禁用的 Flink 实例共 {total} 个',
  'pages.rc.cluster.jobManagerHaAddress.validate.slash': '不符合规则! 不能包含/',
  'pages.rc.cluster.jobManagerHaAddress.validate.port': '不符合规则! 端口号区间[0-65535]',
  'pages.rc.cluster.jobManagerHaAddressPlaceholderText': '添加 Flink 集群的 JobManager 的 RestApi 地址。当 HA 模式时，地址间用英文逗号分隔，例如：192.168.123.101:8081,192.168.123.102:8081,192.168.123.103:8081',
  'pages.rc.cluster.jobManagerHaAddressPlaceholder': '请输入 JobManager HA 地址!',
  'pages.rc.cluster.typePlaceholder': '请选择集群类型!',
  'pages.rc.cluster.aliasPlaceholder': '请输入别名!',
  'pages.rc.cluster.namePlaceholder': '请输入名称!',

  'pages.rc.clusterConfigManagement': '集群配置管理',
  'pages.rc.clusterConfig.name': '集群配置名称',
  'pages.rc.clusterConfig.alias': '别名',
  'pages.rc.clusterConfig.id': '集群配置ID',
  'pages.rc.clusterConfig.type': '类型',
  'pages.rc.clusterConfig.hadoopConfigPath': 'Hadoop 配置文件路径',
  'pages.rc.clusterConfig.flinkConfigPath': 'Flink 配置文件路径',
  'pages.rc.clusterConfig.libPath': 'lib 路径',
  'pages.rc.clusterConfig.isAvailable': '是否可用',
  'pages.rc.clusterConfig.available': '可用',
  'pages.rc.clusterConfig.notAvailable': '不可用',
  'pages.rc.clusterConfig.create': '创建集群',
  'pages.rc.clusterConfig.modify': '修改集群',
  'pages.rc.clusterConfig.delete': '删除集群配置',
  'pages.rc.clusterConfig.deleteConfirm': '确定删除该集群配置吗？',
  'pages.rc.clusterConfig.enable': '启用集群配置',
  'pages.rc.clusterConfig.enableConfirm': '您确定要启用此集群配置吗？',
  'pages.rc.clusterConfig.disable': '禁用集群配置',
  'pages.rc.clusterConfig.disableConfirm': '您确定要禁用此集群配置吗？',
  'pages.rc.clusterConfig.disableTotalOf': '被禁用的集群配置共 {total} 个',
  'pages.rc.clusterConfig.baseConfig': '基本配置',
  'pages.rc.clusterConfig.otherConfig': '其他配置',
  'pages.rc.clusterConfig.addDefineConfig': '添加一个自定义项',
  'pages.rc.clusterConfig.typePlaceholder': '请选择集群类型!',
  'pages.rc.clusterConfig.aliasPlaceholder': '请输入别名!',
  'pages.rc.clusterConfig.namePlaceholder': '请输入名称!',
  'pages.rc.clusterConfig.hadoopConfigPathPlaceholder': '请输入 hadoop 配置文件路径 ,值如 /etc/hadoop/conf！',
  'pages.rc.clusterConfig.hadoopConfigPathHelp': '指定配置文件路径（末尾无/），需要包含以下文件：core-site.xml,hdfs-site.xml,yarn-site.xml ！',
  'pages.rc.clusterConfig.defineConfig.highPriority': '自定义配置（高优先级）',
  'pages.rc.clusterConfig.flinkConfig': 'Flink 配置',
  'pages.rc.clusterConfig.hadoopConfig': 'Hadoop 配置',
  'pages.rc.clusterConfig.k8sConfig': 'Kubernetes 配置',
  'pages.rc.clusterConfig.libPathPlaceholder': '请输入 lib 的 hdfs 路径！值如 hdfs:///flink/lib',
  'pages.rc.clusterConfig.libPathHelp': '指定 lib 的 hdfs 路径（末尾无/），需要包含 Flink 运行时的依赖',
  'pages.rc.clusterConfig.flinkConfigPathPlaceholder': '请输入 flink-conf.yaml 路径！值如 /opt/module/flink/conf ',
  'pages.rc.clusterConfig.flinkConfigPathHelp': '请输入 flink-conf.yaml 路径！值如 /opt/module/flink/conf ',

  // K8s页面相关
  'pages.rc.clusterConfig.appConfig': 'App 配置',
  'pages.rc.clusterConfig.kubernets.version': 'Flink 版本',
  'pages.rc.clusterConfig.kubernets.unsupportBatch': '不支持批任务',
  'pages.rc.clusterConfig.submit.type': '部署方式',
  'pages.rc.clusterConfig.jar.path': '镜像内Jar路径',
  'pages.rc.clusterConfig.jar.class': '启动类',
  'pages.rc.clusterConfig.jar.args': '启动参数',

  'pages.rc.clusterConfig.help.kubernets.namespace': 'kubernets命名空间',
  'pages.rc.clusterConfig.help.kubernets.image': 'Flink镜像地址',
  'pages.rc.clusterConfig.help.kubernets.jmcpu': 'jobmanager cpu配置',
  'pages.rc.clusterConfig.help.kubernets.tmcpu': 'taskmanager cpu配置',
  'pages.rc.clusterConfig.help.kubernets.account': 'kubernets 提交使用的账号，默认default',
  'pages.rc.clusterConfig.help.kubernets.defaultTemplate': '可选，默认JobManager，TaskManager 的template配置!',
  'pages.rc.clusterConfig.help.kubernets.jobManagerTemplate': '可选，JobManager 的template配置! 会覆盖kubernetes.pod-template配置',
  'pages.rc.clusterConfig.help.kubernets.taskManagerTemplate': '可选，TaskManager 的template配置!会覆盖kubernetes.pod-template配置',
  'pages.rc.clusterConfig.help.kubernets.jobManagerMemory': '可选，JobManager 的内存配置',
  'pages.rc.clusterConfig.help.kubernets.taskManagerMemory': '可选，taskManagerMemory 的内存配置',


  'pages.rc.alert.instanceManagement': '报警实例管理',
  'pages.rc.alert.instance.name': '名称',
  'pages.rc.alert.instance.namePleaseHolder': '请输入告警实例名称',
  'pages.rc.alert.instance.type': '类型',
  'pages.rc.alert.instance.delete': '删除报警实例',
  'pages.rc.alert.instance.create': '创建告警实例',
  'pages.rc.alert.instance.modify': '修改告警实例',
  'pages.rc.alert.instance.deleteConfirm': '确定删除选中的报警实例吗？',
  'pages.rc.alert.instance.enable': '启用报警实例',
  'pages.rc.alert.instance.enableConfirm': '您确定要启用此报警实例吗？',
  'pages.rc.alert.instance.disable': '禁用报警实例',
  'pages.rc.alert.instance.disableConfirm': '您确定要禁用此报警实例吗？',
  'pages.rc.alert.instance.disableTotalOf': '被禁用的报警实例共 {total} 个',
  'pages.rc.alert.instance.dingTalk': '钉钉告警配置',
  'pages.rc.alert.instance.email': '邮箱告警配置',
  'pages.rc.alert.instance.feishu': '飞书告警配置',
  'pages.rc.alert.instance.wechat': '企业微信告警配置',
  'pages.rc.alert.instance.webhookPleaseHolder': '请输入 webhook 地址',
  'pages.rc.alert.instance.keywordPleaseHolder': '请输入关键词',
  'pages.rc.alert.instance.secretPleaseHolder': '请输入 密令',
  'pages.rc.alert.instance.proxyPleaseHolder': '请输入代理主机',
  'pages.rc.alert.instance.portPleaseHolder': '请输入代理端口',
  'pages.rc.alert.instance.userPleaseHolder': '请输入代理用户',
  'pages.rc.alert.instance.atUsersPleaseHolder': '请输入被@用户ID(需要飞书后台的用户ID),多个逗号隔开!',
  'pages.rc.alert.instance.passwordPleaseHolder': '请输入密码',
  'pages.rc.alert.instance.atMobilesPleaseHolder': '请输入@手机号 多个使用英文逗号分开 ',
  'pages.rc.alert.instance.msgtypePleaseHolder': '请选择消息发送类型',
  'pages.rc.alert.instance.corpIdPleaseHolder': '请输入 企业Id',
  'pages.rc.alert.instance.wechatAtUsersPleaseHolder': '请输入被@用户ID(企微用户名全拼),多个逗号隔开!',
  'pages.rc.alert.instance.sendTypePleaseHolder' : '请选择发送方式！',
  'pages.rc.alert.instance.agentIdPleaseHolder': '请输入 AgentId',
  'pages.rc.alert.instance.receiversPleaseHolder': '请输入收件人邮箱！多个英文逗号隔开',
  'pages.rc.alert.instance.receiverCcsPleaseHolder': '请输入抄送人邮箱！多个英文逗号隔开!',
  'pages.rc.alert.instance.serverHostPleaseHolder': '邮件服务器主机',
  'pages.rc.alert.instance.serverPortPleaseHolder': '请输入邮件服务器端口',
  'pages.rc.alert.instance.senderPleaseHolder': '请输入邮件服务器发送者sender',
  'pages.rc.alert.instance.emailUserPleaseHolder': '请输入邮箱用户名',
  'pages.rc.alert.instance.emailPasswordPleaseHolder': '请输入邮箱密码! 注意:密码为授权码',
  'pages.rc.alert.instance.smtpSslTrustPleaseHolder': '请输入受信任域',
  'pages.rc.alert.instance.xls.file.pathPleaseHolder': '请输入XLS存放目录! 默认为 /tmp/xls',
  'pages.rc.alert.instance.webhook': 'WebHook 地址',
  'pages.rc.alert.instance.keyword': '关键词',
  'pages.rc.alert.instance.secret': '密令',
  'pages.rc.alert.instance.isEnableProxy': '是否启用代理',
  'pages.rc.alert.instance.proxy': '代理',
  'pages.rc.alert.instance.port': '端口',
  'pages.rc.alert.instance.user': '用户名',
  'pages.rc.alert.instance.password': '密码',
  'pages.rc.alert.instance.isAtAll': '是否@全部',
  'pages.rc.alert.instance.corpId': '企业Id',
  'pages.rc.alert.instance.atMobiles': '@手机号',
  'pages.rc.alert.instance.sendType': '发送方式',
  'pages.rc.alert.instance.agentId': '代理ID',
  'pages.rc.alert.instance.atUsers': '被@用户',
  'pages.rc.alert.instance.receivers': '收件人',
  'pages.rc.alert.instance.receiverCcs': '抄送人',
  'pages.rc.alert.instance.serverHost': '邮件服务器Host',
  'pages.rc.alert.instance.serverPort': '邮件服务器Port',
  'pages.rc.alert.instance.sender': '发送者sender昵称',
  'pages.rc.alert.instance.enableSmtpAuth': '是否开启邮箱验证',
  'pages.rc.alert.instance.emailUser': '邮箱用户名',
  'pages.rc.alert.instance.emailPassword': '邮箱密码',
  'pages.rc.alert.instance.starttlsEnable': '是否开启tls证书验证',
  'pages.rc.alert.instance.sslEnable': '是否开启SSL验证',
  'pages.rc.alert.instance.smtpSslTrust': '受信任域',
  'pages.rc.alert.instance.xls.file.path': 'XLS存放目录',
  'pages.rc.alert.instance.msgtype': '展示方式',
  'pages.rc.alert.instance.sendType.app': '应用',
  'pages.rc.alert.instance.sendType.wechat': '群聊',
  'pages.rc.alert.instance.markdown': 'MarkDown',
  'pages.rc.alert.instance.text': '普通文本',
  'pages.rc.alert.instance.post': '富文本',
  'pages.rc.alert.instance.table': '表格',
  'pages.rc.alert.instance.attachment': '附件',
  'pages.rc.alert.instance.tableAttachment': '表格和附件',

  'pages.rc.alert.groupManagement': '报警组管理',
  'pages.rc.alert.group.name': '报警组名称',
  'pages.rc.alert.group.groupid': '报警组ID',
  'pages.rc.alert.group.alertInstanceIds': '报警实例',
  'pages.rc.alert.group.chooseAlertInstanceIds': '请选择报警组实例',
  'pages.rc.alert.group.inputName': '请输入告警组名称',
  'pages.rc.alert.group.create': '创建告警组',
  'pages.rc.alert.group.modify': '修改告警组',
  'pages.rc.alert.group.delete': '删除报警组',
  'pages.rc.alert.group.deleteConfirm': '确定删除选中的报警组吗？',
  'pages.rc.alert.group.enable': '启用报警组',
  'pages.rc.alert.group.enableConfirm': '您确定要启用此报警组吗？',
  'pages.rc.alert.group.disable': '禁用报警组',
  'pages.rc.alert.group.disableConfirm': '您确定要禁用此报警组吗？',
  'pages.rc.alert.group.disableTotalOf': '被禁用的报警组共 {total} 个',

  'pages.rc.jar.Management': 'Jar 管理',
  'pages.rc.jar.name': '名称',
  'pages.rc.jar.id': 'Jar ID',
  'pages.rc.jar.alias': '别名',
  'pages.rc.jar.type': '类型',
  'pages.rc.jar.filePath': '文件路径',
  'pages.rc.jar.mainClass': '启动类',
  'pages.rc.jar.execParams': '执行参数',
  'pages.rc.jar.create': '创建 Jar 配置',
  'pages.rc.jar.modify': '修改 Jar 配置',
  'pages.rc.jar.delete': '删除Jar配置',
  'pages.rc.jar.deleteConfirm': '确定删除选中的Jar配置吗？',
  'pages.rc.jar.enable': '启用Jar配置',
  'pages.rc.jar.enableConfirm': '确定启用选中的Jar配置吗？',
  'pages.rc.jar.disable': '禁用Jar配置',
  'pages.rc.jar.disableConfirm': '确定禁用选中的Jar配置吗？',
  'pages.rc.jar.disableTotalOf': '被禁用的集群配置共 {total} 个',
  'pages.rc.jar.config': 'Jar 配置',
  'pages.rc.jar.filePathPleaseHolder': '值如: hdfs:///flink/app/demo.jar',
  'pages.rc.jar.filePathHelp': '请输入文件路径! 需要指定 hdfs 上的文件路径,',
  'pages.rc.jar.mainClassPleaseHolder': 'com.dlink.app.MainApp',
  'pages.rc.jar.mainClassHelp': '指定可执行 Jar 的启动类，（可选）',
  'pages.rc.jar.execParamsHelp': '指定可执行 Jar 的启动类入参，（可选）',
  'pages.rc.jar.execParamsPleaseHolder': '--id 1,2',
  'pages.rc.jar.baseConfig': '基本配置',
  'pages.rc.jar.aliasPlaceholder': '请输入别名!',
  'pages.rc.jar.namePlaceholder': '请输入名称!',


  'pages.rc.db.Management': '数据源',
  'pages.rc.db.name': '名称',
  'pages.rc.db.alias': '别名',
  'pages.rc.db.groupName': '分组类型',
  'pages.rc.db.url': '数据库连接 URL',
  'pages.rc.db.username': '用户名',
  'pages.rc.db.password': '密码',
  'pages.rc.db.flinkConfig': 'Flink 连接配置',
  'pages.rc.db.flinkTemplate': 'Flink 连接模板',
  'pages.rc.db.create': '创建数据源',
  'pages.rc.db.modify': '修改数据源',
  'pages.rc.db.delete': '删除数据源',
  'pages.rc.db.deleteConfirm': '确定删除该数据源{dbName}吗？',
  'pages.rc.db.aliasPlaceholder': '请输入别名!',
  'pages.rc.db.namePlaceholder': '请输入名称!',
  'pages.rc.db.urlPlaceholder': '请输入格式正确的 url 连接!',
  'pages.rc.db.flinkConfigPlaceholder': '请指定 Flink With 的默认配置!',
  'pages.rc.db.flinkTemplatePlaceholder': '请指定 Flink With 的生成模板!',
  'pages.rc.db.copyDatabase': '正在复制!',
  'pages.rc.db.source': '来源',
  'pages.rc.db.warehouse': '数仓',
  'pages.rc.db.application': '应用',
  'pages.rc.db.backup': '备份',
  'pages.rc.db.other': '其他',
  'pages.rc.db.no': '序号',
  'pages.rc.db.columnName': '字段名称',
  'pages.rc.db.comment': '注释',
  'pages.rc.db.type': '类型',
  'pages.rc.db.primarykey': '主键',
  'pages.rc.db.autoIncrement': '自增',
  'pages.rc.db.isNull': '非空',
  'pages.rc.db.null': '可为空',
  'pages.rc.db.default': '默认值',
  'pages.rc.db.precision': '精度',
  'pages.rc.db.decimalDigits': '小数范围',
  'pages.rc.db.character': '字符集',
  'pages.rc.db.collationRule': '排序规则',
  'pages.rc.db.javaType': 'Java 类型',

  'pages.rc.doc.Management': '文档管理',
  'pages.rc.doc.name': '名称',
  'pages.rc.doc.id': '文档 ID',
  'pages.rc.doc.category': '文档类型',
  'pages.rc.doc.functionType': '函数类型',
  'pages.rc.doc.subFunctionType': '子类型',
  'pages.rc.doc.description': '描述',
  'pages.rc.doc.fillValue': '填充值',
  'pages.rc.doc.version': '版本',
  'pages.rc.doc.create': '创建文档',
  'pages.rc.doc.modify': '修改文档',
  'pages.rc.doc.delete': '删除文档',
  'pages.rc.doc.deleteConfirm': '确定删除选中的文档吗？',
  'pages.rc.doc.enable': '启用文档',
  'pages.rc.doc.enableConfirm': '确定启用选中的文档吗？',
  'pages.rc.doc.disable': '禁用文档',
  'pages.rc.doc.disableConfirm': '确定禁用选中的文档吗？',
  'pages.rc.doc.disableTotalOf': '被禁用的文档共 {total} 个',
  'pages.rc.doc.namePlaceholder': '请输入名称!',
  'pages.rc.doc.versionPlaceholder': '请选择该文档所属版本!',
  'pages.rc.doc.enabledPlaceholder': '请选择是否启用!',
  'pages.rc.doc.fillValuePlaceholder': '请输入填充值,编辑器内使用名称触发提示 eg: 如果希望在函数LTRIM(parms)中输入参数 则语法为: LTRIM(${1:})  此时的1代表第一个光标 如需多个 数字+1即可 tab键切换光标 ; 如不需要参数则直接输入期望填充值',
  'pages.rc.doc.fillValueHelp': '请输入填充值',
  'pages.rc.doc.descriptionPlaceholder': '请输入文档描述信息!',
  'pages.rc.doc.typePlaceholder': '请选择该文档所属函数类型!',
  'pages.rc.doc.subTypePlaceholder': '请选择该文档所属函数类型!',
  'pages.rc.doc.categoryPlaceholder': '请选择该文档所属类型!',


  'pages.rc.fv.Management': '全局变量管理',
  'pages.rc.fv.id': '全局变量 ID',
  'pages.rc.fv.name': '名称',
  'pages.rc.fv.alias': '别名',
  'pages.rc.fv.fragmentValue': '全局变量值',
  'pages.rc.fv.create': '创建全局变量',
  'pages.rc.fv.modify': '修改全局变量',
  'pages.rc.fv.delete': '删除全局变量',
  'pages.rc.fv.deleteConfirm': '确定删除选中的全局变量吗？',
  'pages.rc.fv.enable': '启用全局变量',
  'pages.rc.fv.enableConfirm': '确定启用选中的全局变量吗？',
  'pages.rc.fv.disable': '禁用全局变量',
  'pages.rc.fv.disableConfirm': '确定禁用选中的全局变量吗？',
  'pages.rc.fv.disableTotalOf': '被禁用的全局变量共 {total} 个',
  'pages.rc.fv.namePlaceholder': '请输入名称!',
  'pages.rc.fv.aliasPlaceholder': '请输入别名!',
  'pages.rc.fv.fragmentValuePlaceholder': '请输入全局变量值',
  'pages.rc.fv.enabledPlaceholder': '请选择是否启用!',

  'pages.task.api.job.async' : '异步提交',
  'pages.task.api.job.stop' : '停止作业',
  'pages.task.api.job.restart' : '重启作业',
  'pages.task.api.job.instance' : '作业实例',
  'pages.task.api.savepoint.trigger' : 'SavePoint 触发',
  'pages.task.api.savepoint.stop' : 'SavePoint 停止',
  'pages.task.api.job.online' : '上线作业',
  'pages.task.api.job.offline' : '下线作业',
  'pages.task.api.job.reonline' : '重新上线作业',

  'pages.task.add.job' : '添加任务',
  'pages.task.management' : '任务管理',
  'pages.task.name' : '任务名称',
  'pages.task.namePlaceHolder' : '请输入任务名称',
  'pages.task.id' : '任务ID',
  'pages.task.alias' : '别名',
  'pages.task.type' : '类型',
  'pages.task.checkPoint' : 'CheckPoint',
  'pages.task.savePointPath' : '保存点路径',
  'pages.task.parallelism' : '并行d度',
  'pages.task.fragment' : '全局变量',
  'pages.task.clusterId' : '集群 ID',
  'pages.task.clusterName' : '集群名称',
  'pages.task.delete' : '删除任务',
  'pages.task.deleteConfirm' : '你确定要删除这个任务吗？ ',
  'pages.task.exec' : '执行任务',
  'pages.task.execConfirm' : '你确定要执行这个任务吗？ ',
  'pages.task.placeHolder' : '请输入...',
  'pages.task.edit' : '编辑任务',

  'pages.flinkColumns.position': '序号',
  'pages.flinkColumns.name': '列名',
  'pages.flinkColumns.type': '类型',
  'pages.flinkColumns.key': '主键',
  'pages.flinkColumns.key.true': '主键',
  'pages.flinkColumns.key.other': '其他',
  'pages.flinkColumns.isnull': '为空',
  'pages.flinkColumns.isnotnull': '不为空',
  'pages.flinkColumns.extras': '扩展',
  'pages.flinkColumns.watermark': '水印',

  'pages.sys.udf.template.name' :'模板名',
  'pages.sys.udf.template.namePlaceholder' :'请输入模板名！',
  'pages.sys.udf.template.codeType' :'代码类型',
  'pages.sys.udf.template.codeTypePlaceholder' :'请选择代码类型！',
  'pages.sys.udf.template.functionType' :'函数类型',
  'pages.sys.udf.template.functionTypePlaceholder' :'请选择函数类型！',
  'pages.sys.udf.template.templateCode' :'模板代码',
  'pages.sys.udf.template.templateCodePlaceholder' :'请编辑模板代码！',
  'pages.sys.udf.template.delete' :'删除模板！',
  'pages.sys.udf.template.deleteConfirm' :'确定删除该模板吗?',
  'pages.sys.udf.template.create': '创建 UDF 模板',
  'pages.sys.udf.template.modify': '修改 UDF 模板',

  'pages.sys.process.id':'进程ID',
  'pages.sys.process.name':'进程名',
  'pages.sys.process.jobid':'任务ID',
  'pages.sys.process.type':'类型',
  'pages.sys.process.status':'状态',
  'pages.sys.process.starttime':'开始时间',
  'pages.sys.process.endtime':'结束时间',
  'pages.sys.process.duration':'耗时',
  'pages.sys.process.operator':'操作人',

  'pages.devops.jobinfo.alert.title':'标题',
  'pages.devops.jobinfo.alert.content':'正文',
  'pages.devops.jobinfo.alert.status':'状态',
  'pages.devops.jobinfo.alert.status.success':'成功',
  'pages.devops.jobinfo.alert.status.failed':'失败',
  'pages.devops.jobinfo.alert.log':'日志',
  'pages.devops.jobinfo.alert.createTime':'报警时间',


  'pages.devops.jobinfo.ck.id':'ID',
  'pages.devops.jobinfo.ck.taskid':'任务ID',
  'pages.devops.jobinfo.ck.status':'状态',
  'pages.devops.jobinfo.ck.name':'名称',
  'pages.devops.jobinfo.ck.duration':'耗时',
  'pages.devops.jobinfo.ck.checkpoint_type':'类型',
  'pages.devops.jobinfo.ck.external_path':'存储位置',
  'pages.devops.jobinfo.ck.latest_ack_timestamp':'最后响应时间',
  'pages.devops.jobinfo.ck.state_size':'状态大小',
  'pages.devops.jobinfo.ck.trigger_timestamp':'触发时间',
  'pages.devops.jobinfo.ck.recovery' :'从检查点恢复！',
  'pages.devops.jobinfo.ck.recoveryConfirm' :'确定从检查点【{path}】恢复吗?',
  'pages.devops.jobinfo.ck.recovery.success' :'恢复作业成功',
  'pages.devops.jobinfo.ck.recovery.failed' :'恢复作业失败',

  'pages.devops.jobinfo.lineage' :'血缘分析',

  'pages.devops.jobinfo.version.id' :'作业ID',
  'pages.devops.jobinfo.version.name' :'作业名称',
  'pages.devops.jobinfo.version.alias' :'作业别名',
  'pages.devops.jobinfo.version.dialect' :'作业方言',
  'pages.devops.jobinfo.version.type' :'作业类型',
  'pages.devops.jobinfo.version.versionId' :'版本号',
  'pages.devops.jobinfo.version.sql' :'作业内容',
  'pages.devops.jobinfo.version.sql.showdetail' :'查看作业详情',
  'pages.devops.jobinfo.version.sql.title' :'作业执行 SQL',
  'pages.devops.jobinfo.version.diff' :'版本对比',
  'pages.devops.jobinfo.version.list' :'版本列表',
  'pages.devops.jobinfo.version.timeline' :'版本时间轴',
  'pages.devops.jobinfo.version.timeline.left' :'居左',
  'pages.devops.jobinfo.version.timeline.right' :'居右',
  'pages.devops.jobinfo.version.timeline.alternate' :'居中',
  'pages.devops.jobinfo.version.timeline.developing' :'开发中...',
  'pages.devops.jobinfo.version.timeline.top' :'返回顶部',

  'pages.devops.jobinfo.overview':'作业总览',
  'pages.devops.jobinfo.cluster':'集群信息',
  'pages.devops.jobinfo.snapshot':'作业快照',
  'pages.devops.jobinfo.exception':'异常信息',
  'pages.devops.jobinfo.log':'作业日志',
  'pages.devops.jobinfo.optimize':'自动调优',
  'pages.devops.jobinfo.config':'配置信息',
  'pages.devops.jobinfo.flinksql':'FlinkSQL',
  'pages.devops.jobinfo.datamap':'数据地图',
  'pages.devops.jobinfo.olap':'即席查询',
  'pages.devops.jobinfo.version':'历史版本',
  'pages.devops.jobinfo.alert':'告警记录',
  'pages.devops.jobinfo.savepoint.trigger':'SavePoint 触发',
  'pages.devops.jobinfo.savepoint.stop':'SavePoint 暂停',
  'pages.devops.jobinfo.savepoint.cancel':'SavePoint 停止',
  'pages.devops.jobinfo.savepoint.canceljob':'普通停止',
  'pages.devops.jobinfo.localenv':'本地环境',
  'pages.devops.jobinfo.offline':'下线',
  'pages.devops.jobinfo.smart_stop':'智能停止',
  'pages.devops.jobinfo.reonline':'重新上线',
  'pages.devops.jobinfo.reonlineJob':'重新上线任务',
  'pages.devops.jobinfo.reonlineJobConfirm':'确定重新上线该作业吗？',
  'pages.devops.jobinfo.reonline.success':'重新上线成功',
  'pages.devops.jobinfo.reonline.failed':'重新上线失败',
  'pages.devops.jobinfo.restart':'重新启动',
  'pages.devops.jobinfo.stopJob':'停止任务',
  'pages.devops.jobinfo.stopJobConfirm':'确定只停止该作业，不进行 SavePoint 操作吗？',
  'pages.devops.jobinfo.canceljob.success':'普通停止成功',
  'pages.devops.jobinfo.canceljob.failed':'普通停止失败',
  'pages.devops.jobinfo.job.key':'{key} 任务',
  'pages.devops.jobinfo.job.key.success':'{key} 成功',
  'pages.devops.jobinfo.job.key.failed':'{key} 失败',
  'pages.devops.jobinfo.job.keyConfirm':'确定{key} 该作业吗？',

  'pages.devops.baseinfo.taskid': '任务ID',
  'pages.devops.baseinfo.name': '名称',
  'pages.devops.baseinfo.status': '状态',
  'pages.devops.baseinfo.readbytes': '接收字节',
  'pages.devops.baseinfo.readrecords': '接收记录',
  'pages.devops.baseinfo.writebytes': '发送字节',
  'pages.devops.baseinfo.writerecords': '发送记录',
  'pages.devops.baseinfo.parallelism': '并行度',
  'pages.devops.baseinfo.tasks': '算子',
  'pages.devops.baseinfo.restart_number': '重启次数',


};
