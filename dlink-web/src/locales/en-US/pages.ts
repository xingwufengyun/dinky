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
  'pages.layouts.userLayout.title': 'Dinky Real-time Computing Platform',

  'pages.login.accountLogin.tab': 'Account Login',
  'pages.login.accountLogin.errorMessage': 'Incorrect UserName/Password（admin/ant.design)',
  'pages.login.failure': 'Login Failed, Please Try Again!',
  'pages.login.success': 'Login Success!',
  'pages.login.chooseTenant': 'Please Choose Tenant',
  'pages.login.username.placeholder': 'Username: Admin Or User',
  'pages.login.username.required': 'Please Input Your UserName!',
  'pages.login.password.placeholder': 'Password: ant.design',
  'pages.login.password.required': 'Please Input Your Password!',
  'pages.login.phoneLogin.tab': 'Phone Login',
  'pages.login.phoneLogin.errorMessage': 'Verification Code Error',
  'pages.login.phoneNumber.placeholder': 'Phone Number',
  'pages.login.phoneNumber.required': 'Please Input Your Phone Number!',
  'pages.login.phoneNumber.invalid': 'Phone Number Is Invalid!',
  'pages.login.captcha.placeholder': 'Verification Code',
  'pages.login.captcha.required': 'Please Input Verification Code!',
  'pages.login.phoneLogin.getVerificationCode': 'Get Code',
  'pages.getCaptchaSecondText': 'sec(s)',
  'pages.login.rememberMe': 'Remember Me',
  'pages.login.forgotPassword': 'Forgot Password ?',
  'pages.login.submit': 'Login',
  'pages.login.loginWith': 'Login With :',
  'pages.login.registerAccount': 'Register Account',
  'pages.welcome.advancedComponent': 'Advanced Component',
  'pages.welcome.link': 'Welcome',
  'pages.welcome.advancedLayout': 'Advanced Layout',
  'pages.welcome.alertMessage': 'Faster And Stronger Heavy-duty Components Have Been Released {version}.',
  'pages.admin.subPage.title': 'This Page Can Only Be Viewed By Admin',
  'pages.admin.subPage.alertMessage':
    'Umi UI Is Now Released, Welcome To Use Npm Run UI To Start The Experience.',
  'pages.searchTable.createForm.newRule': 'New Rule',
  'pages.searchTable.updateForm.ruleConfig': 'Rule Configuration',
  'pages.searchTable.updateForm.basicConfig': 'Basic Information',
  'pages.searchTable.updateForm.ruleName.nameLabel': 'Rule Name',
  'pages.searchTable.updateForm.ruleName.nameRules': 'Please Enter The Rule Name!',
  'pages.searchTable.updateForm.ruleDesc.descLabel': 'Rule Description',
  'pages.searchTable.updateForm.ruleDesc.descPlaceholder': 'Please Enter At Least Five Characters',
  'pages.searchTable.updateForm.ruleDesc.descRules':
    'Please Enter A Rule Description Of At Least Five Characters!',
  'pages.searchTable.updateForm.ruleProps.title': 'Configure Properties',
  'pages.searchTable.updateForm.object': 'Monitoring Object',
  'pages.searchTable.updateForm.ruleProps.templateLabel': 'Rule Template',
  'pages.searchTable.updateForm.ruleProps.typeLabel': 'Rule Type',
  'pages.searchTable.updateForm.schedulingPeriod.title': 'Set Scheduling Period',
  'pages.searchTable.updateForm.schedulingPeriod.timeLabel': 'Starting Time',
  'pages.searchTable.updateForm.schedulingPeriod.timeRules': 'Please Choose a Start Time!',
  'pages.searchTable.titleDesc': 'Description',
  'pages.searchTable.ruleName': 'Rule Name Is Required',
  'pages.searchTable.titleCallNo': 'Number Of Service Calls',
  'pages.searchTable.titleStatus': 'Status',
  'pages.searchTable.nameStatus.default': 'Default',
  'pages.searchTable.nameStatus.running': 'Running',
  'pages.searchTable.nameStatus.online': 'Online',
  'pages.searchTable.nameStatus.abnormal': 'Abnormal',
  'pages.searchTable.titleUpdatedAt': 'Last Scheduled At',
  'pages.searchTable.exception': 'Please Enter The Reason For The Exception!',
  'pages.searchTable.titleOption': 'Option',
  'pages.searchTable.config': 'Configuration',
  'pages.searchTable.subscribeAlert': 'Subscribe To Alerts',
  'pages.searchTable.title': 'Enquiry Form',
  'pages.searchTable.new': 'New',
  'pages.searchTable.chosen': 'Chosen',
  'pages.searchTable.item': 'Item',
  'pages.searchTable.totalServiceCalls': 'Total Number Of Service Calls',
  'pages.searchTable.tenThousand': '0000',
  'pages.searchTable.batchDeletion': 'Batch Deletion',
  'pages.searchTable.batchApproval': 'Batch Approval',


  'pages.devops.jobstatus.CREATED': 'Created',
  'pages.devops.jobstatus.INITIALIZING': 'Initialize',
  'pages.devops.jobstatus.RUNNING': 'Running',
  'pages.devops.jobstatus.FINISHED': 'Finished',
  'pages.devops.jobstatus.FAILING': 'Abnormal',
  'pages.devops.jobstatus.FAILED': 'Failed',
  'pages.devops.jobstatus.SUSPENDED': 'Paused',
  'pages.devops.jobstatus.CANCELLING': 'Canceling',
  'pages.devops.jobstatus.CANCELED': 'Canceled',
  'pages.devops.jobstatus.RESTARTING': 'Restarting',
  'pages.devops.jobstatus.UNKNOWN': 'Unknown',

  'pages.devops.LastUpdateTime': 'LastUpdateTime',

  'pages.settings.UserManagement': 'User Management',
  'pages.settings.Flink': 'Flink Setting',
  'pages.settings.FlinkURL': 'Submit the Jar file path to FlinkSQL',

  'pages.settings.FlinkSQLJarMainParameter': 'Submit The Main Class entry To the Jar For FlinkSQL',
  'pages.settings.FlinkSQLJarMainClass': 'The Main Class Of The Jar That Submitted FlinkSQL',
  'pages.settings.FlinkRestAPI': 'Using Rest API',
  'pages.settings.FlinkURLSplit': 'FlinkSQL Statement Separator',
  'pages.settings.FlinkSQLLogic': 'Calculate Consanguinity Using A Logical Plan',
  'pages.settings.FlinkJobID': 'Maximum Waiting Time For Getting A Job ID (seconds)',
  'pages.settings.FlinkNoSetting': 'Not Setting',
  'pages.settings.FlinkNoUseSetting': 'After The Flink Task Is Enabled, Operations Such As Savepoint And Stop Are Performed Through The RestAPI Of JobManager',
  'pages.settings.FlinkLogic': 'Whether The Calculation Of Field Consanguinity Analysis For Flink Tasks Is Based On A Logical Plan Is Supported Only In Version 1.14',

  'pages.user.UserManger': 'User Management',
  'pages.user.UserName': 'User Name',
  'pages.user.UserJobNumber': 'Job Number',
  'pages.user.UserPhoneNumber': 'Phone Number',
  'pages.user.UserNickName': 'Nick Name',

  'pages.user.UserDeleteUser': 'Delete User',
  'pages.user.UserCreateUser': 'Create User',
  'pages.user.UserUpdateUser': 'Update User',
  'pages.user.AssignRole': 'Assign Role',
  'pages.user.delete': 'Delete User',
  'pages.user.deleteConfirm': 'Are you sure you want to delete this User？',
  'pages.user.enable': 'Enable User',
  'pages.user.enableConfirm': 'Are you sure you want to enable this User？',
  'pages.user.disable': 'Disable User',
  'pages.user.disableConfirm': 'Are you sure you want to disable this User？',
  'pages.user.UserEnterUserName': 'Please enter user name',
  'pages.user.UserEnterUniqueUserName': 'Please enter unique user name',
  'pages.user.UserEnterJobNumber': 'Please enter job number',
  'pages.user.UserEnterNickName': 'Please enter nickname',
  'pages.user.UserEnterPhoneNumber': 'Please enter phone number',
  'pages.user.UserOldPassword': 'Old Password',
  'pages.user.UserNewPassword': 'New Password',
  'pages.user.UserRepeatNewPassword': 'Repeat New Password',
  'pages.user.UserEnterOldPassword': 'Please enter old password',
  'pages.user.UserEnterNewPassword': 'Please enter new password',
  'pages.user.UserEnterRepeatNewPassword': 'Please enter repeat new password',
  'pages.user.UserNewPasswordNotMatch': 'The new passwords do not match',
  'pages.user.disableTotalOf': 'Total Of {total} User Is Disabled',


  'pages.tenant.TenantManager': 'Tenant Management',
  'pages.tenant.TenantCode': 'Tenant Code',
  'pages.tenant.AssignUser': 'Assign Users',
  'pages.tenant.assignUser.pleaseHolder': 'Please enter username/nickname Search',
  'pages.tenant.create': 'Create Tenant',
  'pages.tenant.update': 'Update Tenant',
  'pages.tenant.EnterTenantCode': 'Please enter Tenant Code!',
  'pages.tenant.EnterTenantNote': 'Please enter Tenant Note!',
  'pages.tenant.delete': 'Delete Tenant',
  'pages.tenant.deleteConfirm': 'Are you sure you want to delete this Tenant？',
  'pages.tenant.enable': 'Enable Tenant',
  'pages.tenant.enableConfirm': 'Are you sure you want to enable this Tenant？',
  'pages.tenant.disable': 'Disable Tenant',
  'pages.tenant.disableConfirm': 'Are you sure you want to disable this Tenant？',


  'pages.nameSpace.NameSpaceManagement': 'NameSpace Management',
  'pages.nameSpace.NameSpaceCode': 'NameSpace Code',
  'pages.nameSpace.belongTenant': 'Belong Tenant',
  'pages.nameSpace.deleteNameSpace': 'Delete NameSpace',
  'pages.nameSpace.deleteNameSpaceConfirm': 'Are you sure you want to delete this NameSpace？',
  'pages.nameSpace.enableNameSpace': 'Enable NameSpace',
  'pages.nameSpace.enableNameSpaceConfirm': 'Are you sure you want to enable this NameSpace？',
  'pages.nameSpace.disableNameSpace': 'Disable NameSpace',
  'pages.nameSpace.disableNameSpaceConfirm': 'Are you sure you want to disable this NameSpace？',
  'pages.nameSpace.create': 'Create NameSpace',
  'pages.nameSpace.update': 'Update NameSpace',
  'pages.nameSpace.EnterNameSpaceCode': 'Please enter NameSpace Code!',
  'pages.nameSpace.EnterNameSpaceNote': 'Please enter NameSpace Note!',
  'pages.nameSpace.disableTotalOf': 'Total Of {total} Namespace Is Disabled',

  'pages.role.roleManagement': 'Role Management',
  'pages.role.roleCode': 'Role Code',
  'pages.role.roleName': 'Role Name',
  'pages.role.namespaceIds': 'Namespace',
  'pages.role.belongTenant': 'Belong Tenant',
  'pages.role.create': 'Create Role',
  'pages.role.update': 'Update Role',
  'pages.role.EnterRoleCode': 'Please enter Role Code!',
  'pages.role.EnterRoleName': 'Please enter Role Name!',
  'pages.role.selectNameSpace': 'Please select NameSpace!',
  'pages.role.EnterNote': 'Please enter Role Note!',
  'pages.role.delete': 'Delete Role',
  'pages.role.deleteConfirm': 'Are you sure you want to delete this Role？',
  'pages.role.enable': 'Enable Role',
  'pages.role.enableConfirm': 'Are you sure you want to enable this Role？',
  'pages.role.disable': 'Disable Role',
  'pages.role.disableConfirm': 'Are you sure you want to disable this Role？',

  'pages.regist.openAPI': 'OpenAPI Document',
  'pages.regist.BusinessComponent': 'Business Component Document',

  'pages.metadata.NoDatabaseSelected': 'No database selected',
  'pages.metadata.Application': 'Application',
  'pages.metadata.TableInfo': 'Table Info',
  'pages.metadata.Description': 'Description',
  'pages.metadata.DataSearch': 'Data Search',
  'pages.metadata.GenerateSQL': 'Generate SQL',
  'pages.metadata.FieldInformation': 'Field information',

  'pages.TableData.QueryConditions': 'Query Conditions',
  'pages.TableData.sorting': 'Sorting',
  'pages.TableData.data': 'Data',
  'pages.TableData.search': 'Search',

  'pages.datastudio.label.info': 'Info',
  'pages.datastudio.label.result': 'Result',

  'pages.datastudio.label.lineage': 'Lineage',
  'pages.datastudio.label.lineage.expand.field': 'Expand Field',
  'pages.datastudio.label.lineage.collapse.field': 'Collapse Field',
  'pages.datastudio.label.lineage.expand.lineage': 'Expand Lineage',
  'pages.datastudio.label.lineage.collapse.lineage': 'Collapse Lineage',


  'pages.datastudio.label.process': 'Process',
  'pages.datastudio.label.history': 'History',
  'pages.datastudio.label.function': 'Function',

  'pages.datastudio.label.directory': 'Directory',
  'pages.datastudio.label.structure': 'Structure',
  'pages.datastudio.label.session': 'Session',
  'pages.datastudio.label.cluster': 'Cluster',
  'pages.datastudio.label.datasource': 'Data Source',
  'pages.datastudio.label.meta': 'Meta Data',
  'pages.datastudio.label.globalvariable': 'Global Variable',
  'pages.datastudio.label.guidepage': 'Guide Page',

  'pages.datastudio.label.registcluster': 'Regist Cluster',
  'pages.datastudio.label.registclusterconfig': 'Regist Cluster Config',
  'pages.datastudio.label.registjar': 'Regist Jar',
  'pages.datastudio.label.registdatasource': 'Regist Datasource',
  'pages.datastudio.label.registdocument': 'Regist Document',
  'pages.datastudio.label.configsystemconfig': 'Config System Config',
  'pages.datastudio.label.officialdocumentation': 'Official Documentation',
  'pages.datastudio.label.quickguide': 'Quick Guide',

  'pages.datastudio.label.welcomeuse': 'Welcome to Use Dinky v{version}',
  'pages.datastudio.label.dinkydescribe': 'Real Time is the Future,Dinky is the best partner of Flink, making Flink SQL easier to use, and is committed to the construction of stream batch integrated development platform',
  'pages.datastudio.label.maxrows': 'Max Rows',

  'pages.devops.result.success': 'Successful',
  'pages.devops.lable.online': 'Online',
  'pages.devops.lable.offline': 'Offline',
  'pages.devops.lable.onlinelist': 'Online List',
  'pages.devops.lable.offlinelist': 'Offline List',
  'pages.devops.lable.instance': 'Instance',

  'pages.registerCenter.clusterManagement': 'Cluster Instance Management',
  'pages.registerCenter.cluster.instanceName': 'Instance name',
  'pages.registerCenter.cluster.alias': 'Alias',
  'pages.registerCenter.cluster.type': 'Type',
  'pages.registerCenter.cluster.jobManagerAddress': 'JobManger Address',
  'pages.registerCenter.cluster.version': 'Version',
  'pages.registerCenter.cluster.jobManagerHaAddress': 'JobManger HA address',
  'pages.registerCenter.cluster.instanceId': 'Instance Id',
  'pages.registerCenter.cluster.create': 'Create cluster',
  'pages.registerCenter.cluster.modify': 'Modify Cluster Instance',
  'pages.registerCenter.cluster.delete': 'Delete Flink Instance',
  'pages.registerCenter.cluster.deleteConfirm': 'Are you sure you want to delete this Flink instance? ',
  'pages.registerCenter.cluster.recycle': 'Recycle Flink instance',
  'pages.registerCenter.cluster.recycleConfirm': 'Are you sure to recycle all automatically created and expired Flink instances? ',
  'pages.registerCenter.cluster.recycle.success' : 'Total Of {total} Flink instances were successfully recycled',
  'pages.registerCenter.cluster.enable': 'Enable Flink instance',
  'pages.registerCenter.cluster.enableConfirm': 'Are you sure you want to enable this Flink instance? ',
  'pages.registerCenter.cluster.disable': 'Disable Flink instance',
  'pages.registerCenter.cluster.disableConfirm': 'Are you sure you want to disable this Flink instance? ',
  'pages.registerCenter.cluster.disableTotalOf': 'Total Of {total} Flink instances Is Disabled',
  'pages.registerCenter.cluster.jobManagerHaAddress.validate.slash': 'No rules! Cannot contain /',
  'pages.registerCenter.cluster.jobManagerHaAddress.validate.port': 'Does not meet the rules! Port number range [0-65535]',
  'pages.registerCenter.cluster.jobManagerHaAddressPlaceholderText': 'Add the RestApi address of the JobManager of the Flink cluster. In HA mode, the addresses are separated by commas, for example: 192.168.123.101:8081,192.168.123.102:8081,192.168.123.103:8081',
  'pages.registerCenter.cluster.jobManagerHaAddressPlaceholder': 'Please enter the JobManager HA address!',
  'pages.registerCenter.cluster.typePlaceholder': 'Please select cluster type!',
  'pages.registerCenter.cluster.aliasPlaceholder': 'Please enter alias!',
  'pages.registerCenter.cluster.namePlaceholder': 'Please enter name!',

  'pages.registerCenter.clusterConfigManagement': 'Cluster Configuration Management',
  'pages.registerCenter.clusterConfig.name': 'Cluster Configuration Name',
  'pages.registerCenter.clusterConfig.alias': 'Alias',
  'pages.registerCenter.clusterConfig.id': 'Cluster Configuration ID',
  'pages.registerCenter.clusterConfig.type': 'Type',
  'pages.registerCenter.clusterConfig.hadoopConfigPath': 'Hadoop configuration file path',
  'pages.registerCenter.clusterConfig.flinkConfigPath': 'Flink configuration file path',
  'pages.registerCenter.clusterConfig.libPath': 'lib path',
  'pages.registerCenter.clusterConfig.isAvailable': 'Is Available',
  'pages.registerCenter.clusterConfig.available': 'Available',
  'pages.registerCenter.clusterConfig.notAvailable': 'Not Available',
  'pages.registerCenter.clusterConfig.create': 'Create Cluster Configuration',
  'pages.registerCenter.clusterConfig.modify': 'Modify Cluster Configuration',
  'pages.registerCenter.clusterConfig.delete': 'Delete Cluster Configuration',
  'pages.registerCenter.clusterConfig.deleteConfirm': 'Are you sure you want to delete this  Cluster Configuration? ',
  'pages.registerCenter.clusterConfig.enable': 'Enable Cluster Configuration',
  'pages.registerCenter.clusterConfig.enableConfirm': 'Are you sure you want to enable this  Cluster Configuration? ',
  'pages.registerCenter.clusterConfig.disable': 'Disable Cluster Configuration',
  'pages.registerCenter.clusterConfig.disableConfirm': 'Are you sure you want to disable this  Cluster Configuration? ',
  'pages.registerCenter.clusterConfig.disableTotalOf': 'There are {total} of disabled  Cluster Configuration',
  'pages.registerCenter.clusterConfig.baseConfig': 'Basic Configuration',
  'pages.registerCenter.clusterConfig.otherConfig': 'Other Configuration',
  'pages.registerCenter.clusterConfig.addDefineConfig': 'Add a Custom Item',
  'pages.registerCenter.clusterConfig.typePlaceholder': 'Please select cluster type!',
  'pages.registerCenter.clusterConfig.aliasPlaceholder': 'Please enter Alias!',
  'pages.registerCenter.clusterConfig.namePlaceholder': 'Please enter Name!',
  'pages.registerCenter.clusterConfig.hadoopConfigPathPlaceholder': 'Please enter the hadoop configuration file path, the value is /etc/hadoop/conf! ',
  'pages.registerCenter.clusterConfig.hadoopConfigPathHelp': 'Specify the configuration file path (without / at the end), the following files need to be included: core-site.xml, hdfs-site.xml, yarn-site.xml! ',
  'pages.registerCenter.clusterConfig.defineConfig.highPriority': 'Custom configuration (high priority)',
  'pages.registerCenter.clusterConfig.flinkConfig': 'Flink Configuration',
  'pages.registerCenter.clusterConfig.hadoopConfig': 'Hadoop Configuration',
  'pages.registerCenter.clusterConfig.k8sConfig': 'Kubernetes Configuration',
  'pages.registerCenter.clusterConfig.libPathPlaceholder': 'Please enter the hdfs path of lib! Values such as hdfs:///flink/lib',
  'pages.registerCenter.clusterConfig.libPathHelp': 'Specify the hdfs path of lib (without / at the end), which needs to include Flink runtime dependencies',
  'pages.registerCenter.clusterConfig.flinkConfigPathPlaceholder': 'Please enter the flink-conf.yaml path! Values like /opt/module/flink/conf ',
  'pages.registerCenter.clusterConfig.flinkConfigPathHelp': 'Please enter the flink-conf.yaml path! Values like /opt/module/flink/conf ',


  'pages.registerCenter.alert.instanceManagement': 'Alarm Instance Management',
  'pages.registerCenter.alert.instance.name': 'Name',
  'pages.registerCenter.alert.instance.namePleaseHolder': 'please enter alarm instance name',
  'pages.registerCenter.alert.instance.type': 'Type',
  'pages.registerCenter.alert.instance.delete': 'Delete the Alarm Instance ',
  'pages.registerCenter.alert.instance.create': 'Create Alarm Instance',
  'pages.registerCenter.alert.instance.modify': 'Modify Alarm Instance',
  'pages.registerCenter.alert.instance.deleteConfirm': 'Are you sure to delete the selected Alarm Instance? ',
  'pages.registerCenter.alert.instance.enable': 'Enable Alarm Instance ',
  'pages.registerCenter.alert.instance.enableConfirm': 'Are you sure you want to enable this Alarm Instance? ',
  'pages.registerCenter.alert.instance.disable': 'Disable the Alarm Instance ',
  'pages.registerCenter.alert.instance.disableConfirm': 'Are you sure you want to disable this Alarm Instance? ',
  'pages.registerCenter.alert.instance.disableTotalOf': 'Total Of {total} Alarm Instance Is Disabled',

  'pages.registerCenter.alert.instance.dingTalk': 'DingDingTalk Configuration',
  'pages.registerCenter.alert.instance.email': 'Email Configuration',
  'pages.registerCenter.alert.instance.feishu': 'FeiShu Configuration',
  'pages.registerCenter.alert.instance.wechat': 'WeChat Configuration',

  'pages.registerCenter.alert.instance.webhookPleaseHolder': 'please enter webhook url',
  'pages.registerCenter.alert.instance.keywordPleaseHolder': 'please enter keyword',
  'pages.registerCenter.alert.instance.secretPleaseHolder': 'please enter secret',
  'pages.registerCenter.alert.instance.proxyPleaseHolder': 'please enter proxy',
  'pages.registerCenter.alert.instance.portPleaseHolder': 'please enter port',
  'pages.registerCenter.alert.instance.userPleaseHolder': 'please enter user',
  'pages.registerCenter.alert.instance.atUsersPleaseHolder': 'Please enter the user ID (user ID of Feishu background is required), separated by multiple commas!',
  'pages.registerCenter.alert.instance.passwordPleaseHolder': 'please enter password',
  'pages.registerCenter.alert.instance.atMobilesPleaseHolder': 'Please enter the members that need @, multiple use, separated by numbers',
  'pages.registerCenter.alert.instance.msgtypePleaseHolder': 'please choose message Send Type`',
  'pages.registerCenter.alert.instance.corpIdPleaseHolder': 'Please enter CorpId',
  'pages.registerCenter.alert.instance.wechatAtUsersPleaseHolder': 'Please enter the @user ID (enterprise and micro user name spelled out), separated by multiple commas!',
  'pages.registerCenter.alert.instance.sendTypePleaseHolder' : 'Please choose Send Type',
  'pages.registerCenter.alert.instance.agentIdPleaseHolder': 'Please enter AgentId',
  'pages.registerCenter.alert.instance.receiversPleaseHolder': 'Please enter recipient email address! Separate multiple commas',
  'pages.registerCenter.alert.instance.receiverCcsPleaseHolder': 'Please enter the receiverCcs email address! Separate multiple commas!',
  'pages.registerCenter.alert.instance.serverHostPleaseHolder': 'Mail server host',
  'pages.registerCenter.alert.instance.serverPortPleaseHolder': 'Please enter the mail server port',
  'pages.registerCenter.alert.instance.senderPleaseHolder': 'Please enter the mail server sender sender',
  'pages.registerCenter.alert.instance.emailUserPleaseHolder': 'Please enter your email username',
  'pages.registerCenter.alert.instance.emailPasswordPleaseHolder': 'Please enter the email password! Note: the password is the authorization code',
  'pages.registerCenter.alert.instance.smtpSslTrustPleaseHolder': 'Please enter a trusted domain',
  'pages.registerCenter.alert.instance.xls.file.pathPleaseHolder': 'Please enter the XLS storage directory! The default is /tmp/xls',


  'pages.registerCenter.alert.instance.webhook': 'WebHook Url',
  'pages.registerCenter.alert.instance.keyword': 'KeyWord',
  'pages.registerCenter.alert.instance.secret': 'Secret',
  'pages.registerCenter.alert.instance.isEnableProxy': 'IsEnableProxy',
  'pages.registerCenter.alert.instance.proxy': 'Proxy',
  'pages.registerCenter.alert.instance.port': 'Port',
  'pages.registerCenter.alert.instance.user': 'User',
  'pages.registerCenter.alert.instance.password': 'Password',
  'pages.registerCenter.alert.instance.isAtAll': 'IsAtAll',
  'pages.registerCenter.alert.instance.corpId': 'CorpId',
  'pages.registerCenter.alert.instance.atMobiles': 'At Mobiles',
  'pages.registerCenter.alert.instance.sendType': 'Send Type',
  'pages.registerCenter.alert.instance.agentId': 'AgentId',
  'pages.registerCenter.alert.instance.atUsers': 'At Users',
  'pages.registerCenter.alert.instance.receivers': 'Receivers',
  'pages.registerCenter.alert.instance.receiverCcs': 'ReceiverCcs',
  'pages.registerCenter.alert.instance.serverHost': 'Mail server Host',
  'pages.registerCenter.alert.instance.serverPort': 'Mail server Port',
  'pages.registerCenter.alert.instance.sender': 'Sender nickname',
  'pages.registerCenter.alert.instance.enableSmtpAuth': 'Enable SmtpAuth',
  'pages.registerCenter.alert.instance.emailUser': 'Email user',
  'pages.registerCenter.alert.instance.emailPassword': 'Email password',
  'pages.registerCenter.alert.instance.starttlsEnable': 'Start Tls Enable',
  'pages.registerCenter.alert.instance.sslEnable': 'Ssl Enable',
  'pages.registerCenter.alert.instance.smtpSslTrust': 'Smtp Ssl Trust',
  'pages.registerCenter.alert.instance.xls.file.path': 'XLS storage directory',
  'pages.registerCenter.alert.instance.msgtype': 'Send Message Type',

  'pages.registerCenter.alert.instance.sendType.app': 'Application',
  'pages.registerCenter.alert.instance.sendType.wechat': 'WeChat',
  'pages.registerCenter.alert.instance.markdown': 'MarkDown',
  'pages.registerCenter.alert.instance.text': 'Text',
  'pages.registerCenter.alert.instance.post': 'Post',
  'pages.registerCenter.alert.instance.table': 'Table',
  'pages.registerCenter.alert.instance.attachment': 'Attachment',
  'pages.registerCenter.alert.instance.tableAttachment': 'Table And Attachment',

  'pages.registerCenter.alert.groupManagement': 'Alarm Group Management ',
  'pages.registerCenter.alert.group.name': 'Alarm Group Name',
  'pages.registerCenter.alert.group.groupid ': 'Alarm group ID ',
  'pages.registerCenter.alert.group.alertInstanceIds': 'Alarm instance',
  'pages.registerCenter.alert.group.chooseAlertInstanceIds': 'please choose Alarm Instance',
  'pages.registerCenter.alert.group.inputName': 'please input Alarm group name',
  'pages.registerCenter.alert.group.create': 'Create Alarm Group',
  'pages.registerCenter.alert.group.modify': 'Modify Alarm Group',
  'pages.registerCenter.alert.group.delete': 'Delete the Alarm group ',
  'pages.registerCenter.alert.group.deleteConfirm': 'Are you sure to delete the selected Alarm group? ',
  'pages.registerCenter.alert.group.enable': 'Enable Alarm group ',
  'pages.registerCenter.alert.group.enableConfirm': 'Are you sure you want to enable this Alarm group? ',
  'pages.registerCenter.alert.group.disable': 'Disable the Alarm group ',
  'pages.registerCenter.alert.group.disableConfirm': 'Are you sure you want to disable this Alarm group? ',
  'pages.registerCenter.alert.group.disableTotalOf': 'Total Of {total} Alarm group Is Disabled',

  'pages.registerCenter.jar.Management': 'Jar Configuration Management',
  'pages.registerCenter.jar.name': 'Name',
  'pages.registerCenter.jar.id': 'Jar ID',
  'pages.registerCenter.jar.alias': 'Alias',
  'pages.registerCenter.jar.type': 'Type',
  'pages.registerCenter.jar.filePath': 'File Path',
  'pages.registerCenter.jar.mainClass': 'Startup Class',
  'pages.registerCenter.jar.execParams': 'Execution Parameters',
  'pages.registerCenter.jar.create': 'Create Jar Configuration',
  'pages.registerCenter.jar.modify': 'Modify Jar Configuration',
  'pages.registerCenter.jar.delete': 'Delete Jar Configuration',
  'pages.registerCenter.jar.deleteConfirm': 'Are you sure you want to delete the selected Jar configuration? ',
  'pages.registerCenter.jar.enable': 'Enable Jar Configuration',
  'pages.registerCenter.jar.enableConfirm': 'Are you sure to enable the selected Jar configuration? ',
  'pages.registerCenter.jar.disable': 'Disable Jar Configuration',
  'pages.registerCenter.jar.disableConfirm': 'Are you sure to disable the selected Jar configuration? ',
  'pages.registerCenter.jar.disableTotalOf': 'Total Of {total} cluster configurations Is Disabled',
  'pages.registerCenter.jar.config': 'Jar Configuration',
  'pages.registerCenter.jar.filePathPleaseHolder': 'value such as: hdfs:///flink/app/demo.jar',
  'pages.registerCenter.jar.filePathHelp': 'Please enter the file path! You need to specify the file path on hdfs,',
  'pages.registerCenter.jar.mainClassPleaseHolder': 'com.dlink.app.MainApp',
  'pages.registerCenter.jar.mainClassHelp': 'Specify the startup class of the executable Jar, (optional)',
  'pages.registerCenter.jar.execParamsHelp': 'Specify the startup class input parameter of the executable Jar, (optional)',
  'pages.registerCenter.jar.execParamsPleaseHolder': '--id 1,2',
  'pages.registerCenter.jar.baseConfig': 'Base Configuration',
  'pages.registerCenter.jar.aliasPlaceholder': 'Please enter alias!',
  'pages.registerCenter.jar.namePlaceholder': 'Please enter name!',

  'pages.registerCenter.db.Management': 'DataSource',
  'pages.registerCenter.db.name': 'Name',
  'pages.registerCenter.db.alias': 'Alias',
  'pages.registerCenter.db.groupName': 'Group Type',
  'pages.registerCenter.db.url': 'Database Connection URL',
  'pages.registerCenter.db.username': 'Username',
  'pages.registerCenter.db.password': 'Password',
  'pages.registerCenter.db.flinkConfig': 'Flink Connection Configuration',
  'pages.registerCenter.db.flinkTemplate': 'Flink Connection Template',
  'pages.registerCenter.db.create': 'Create DataSource',
  'pages.registerCenter.db.modify': 'Modify DataSource',
  'pages.registerCenter.db.delete': 'Delete DataSource',
  'pages.registerCenter.db.deleteConfirm': 'Are you sure you want to delete this data source {dbName}? ',
  'pages.registerCenter.db.aliasPlaceholder': 'Please enter alias!',
  'pages.registerCenter.db.namePlaceholder': 'Please enter name!',
  'pages.registerCenter.db.urlPlaceholder': 'Please enter a properly formatted url connection!',
  'pages.registerCenter.db.flinkConfigPlaceholder': 'Please specify the default configuration of Flink With!',
  'pages.registerCenter.db.flinkTemplatePlaceholder': 'Please specify the generated template of Flink With!',
  'pages.registerCenter.db.source': 'Source',
  'pages.registerCenter.db.warehouse': 'Data WareHouse',
  'pages.registerCenter.db.application': 'Application',
  'pages.registerCenter.db.backup': 'Backup',
  'pages.registerCenter.db.other': 'Other',
  'pages.registerCenter.db.no': 'Number',
  'pages.registerCenter.db.columnName': 'Field name',
  'pages.registerCenter.db.comment': 'Comment',
  'pages.registerCenter.db.type': 'type',
  'pages.registerCenter.db.primarykey': 'Primary Key',
  'pages.registerCenter.db.autoIncrement': 'AutoIncrement',
  'pages.registerCenter.db.isNull': 'Not Null',
  'pages.registerCenter.db.null': 'Nullable',
  'pages.registerCenter.db.default': 'Default',
  'pages.registerCenter.db.precision': 'Precision',
  'pages.registerCenter.db.decimalDigits': 'Decimal Digits',
  'pages.registerCenter.db.character': 'Character Set',
  'pages.registerCenter.db.collationRule': 'Collation Rule',
  'pages.registerCenter.db.javaType': 'Java Type',

  'pages.registerCenter.doc.Management': 'Document Management',
  'pages.registerCenter.doc.name': 'Name',
  'pages.registerCenter.doc.id': 'Document ID',
  'pages.registerCenter.doc.category': 'Document Type',
  'pages.registerCenter.doc.functionType': 'Function Type',
  'pages.registerCenter.doc.subFunctionType': 'SubType',
  'pages.registerCenter.doc.description': 'Description',
  'pages.registerCenter.doc.fillValue': 'Fill value',
  'pages.registerCenter.doc.version': 'Version',
  'pages.registerCenter.doc.create': 'Create Document',
  'pages.registerCenter.doc.modify': 'Modify Document',
  'pages.registerCenter.doc.delete': 'Delete Document',
  'pages.registerCenter.doc.deleteConfirm': 'Are you sure you want to delete the selected Document? ',
  'pages.registerCenter.doc.enable': 'Enable Documentation',
  'pages.registerCenter.doc.enableConfirm': 'Are you sure you want to enable the selected Document? ',
  'pages.registerCenter.doc.disable': 'Disable Document',
  'pages.registerCenter.doc.disableConfirm': 'Are you sure you want to disable the selected Document? ',
  'pages.registerCenter.doc.disableTotalOf': 'Total Of {total} Documents Is Disabled',
  'pages.registerCenter.doc.namePlaceholder': 'Please enter a name!',
  'pages.registerCenter.doc.versionPlaceholder': 'Please select the version this Document belongs to!',
  'pages.registerCenter.doc.enabledPlaceholder': 'Please choose whether to enable!',
  'pages.registerCenter.doc.fillValuePlaceholder': 'Please enter the fill value, use the name in the editor to trigger the prompt eg: If you want to input parameters in the function LTRIM(parms), the syntax is: LTRIM(${1:}) At this time The 1 represents the first cursor. If you need multiple numbers + 1, you can switch the cursor with the tab key; if you don`t need parameters, directly enter the desired fill value',
  'pages.registerCenter.doc.fillValueHelp': 'Please enter the fill value',
  'pages.registerCenter.doc.descriptionPlaceholder': 'Please enter the Document description information!',
  'pages.registerCenter.doc.typePlaceholder': 'Please select the function type this Document belongs to!',
  'pages.registerCenter.doc.subTypePlaceholder': 'Please select the function type this Document belongs to!',
  'pages.registerCenter.doc.categoryPlaceholder': 'Please select the type of this Document!',

  'pages.registerCenter.fv.Management': 'Global Variable Management',
  'pages.registerCenter.fv.id': 'Global Variable ID',
  'pages.registerCenter.fv.name': 'Name',
  'pages.registerCenter.fv.alias': 'Alias',
  'pages.registerCenter.fv.fragmentValue': 'Global Variable value',
  'pages.registerCenter.fv.create': 'Create Global Variable',
  'pages.registerCenter.fv.modify': 'Modify Global Variables',
  'pages.registerCenter.fv.delete': 'Delete Global Variable',
  'pages.registerCenter.fv.deleteConfirm': 'Are you sure you want to delete the selected Global Variable? ',
  'pages.registerCenter.fv.enable': 'Enable Global Variables',
  'pages.registerCenter.fv.enableConfirm': 'Are you sure to enable the selected Global Variable? ',
  'pages.registerCenter.fv.disable': 'Disable Global Variables',
  'pages.registerCenter.fv.disableConfirm': 'Are you sure you want to disable the selected Global Variable? ',
  'pages.registerCenter.fv.disableTotalOf': 'Total Of {total} Global Variables Is Disabled',
  'pages.registerCenter.fv.namePlaceholder': 'Please enter a name!',
  'pages.registerCenter.fv.aliasPlaceholder': 'Please enter an alias!',
  'pages.registerCenter.fv.fragmentValuePlaceholder': 'Please enter the Global Variable value',
  'pages.registerCenter.fv.enabledPlaceholder': 'Please choose whether to enable!',

  'pages.task.api.job.async' : 'Asynchronous submit',
  'pages.task.api.job.stop' : 'Stop job',
  'pages.task.api.job.restart' : 'Restart job',
  'pages.task.api.job.instance' : 'Job instance',
  'pages.task.api.savepoint.trigger' : 'SavePoint trigger',
  'pages.task.api.savepoint.stop' : 'SavePoint stop',
  'pages.task.api.job.online' : 'Online job',
  'pages.task.api.job.offline' : 'Offline job',
  'pages.task.api.job.reonline' : 'Re-online job',

  'pages.sys.udf.template.name' : 'Template Name',
  'pages.sys.udf.template.namePlaceholder' : 'Please enter the template name! ',
  'pages.sys.udf.template.codeType' : 'Code Type',
  'pages.sys.udf.template.codeTypePlaceholder' : 'Please select code type! ',
  'pages.sys.udf.template.functionType' : 'Function Type',
  'pages.sys.udf.template.functionTypePlaceholder' : 'Please select function type! ',
  'pages.sys.udf.template.templateCode' : 'Template Code',
  'pages.sys.udf.template.templateCodePlaceholder' : 'Please edit the template code! ',
  'pages.sys.udf.template.delete' : 'Delete Template! ',
  'pages.sys.udf.template.deleteConfirm' : 'Are you sure you want to delete this template?',
  'pages.sys.udf.template.create': 'Create UDF Template',
  'pages.sys.udf.template.modify': 'Modify UDF Template',

  'pages.sys.process.id':'Process ID',
  'pages.sys.process.name': 'Process Name',
  'pages.sys.process.jobid':'Job ID',
  'pages.sys.process.type': 'Type',
  'pages.sys.process.status': 'Status',
  'pages.sys.process.starttime': 'Start Time',
  'pages.sys.process.endtime': 'End Time',
  'pages.sys.process.duration': 'Duration',
  'pages.sys.process.operator': 'Operator',
};

