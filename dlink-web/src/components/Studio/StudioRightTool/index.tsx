import {Tabs} from "antd";
import {SettingOutlined, ScheduleOutlined, ContainerOutlined} from "@ant-design/icons";
import {StateType} from "@/pages/DataStudio/model";
import {connect} from "umi";
import StudioConfig from "./StudioConfig";
import StudioSetting from "./StudioSetting";
import StudioSavePoint from "./StudioSavePoint";
import StudioHistory from "./StudioHistory";
import StudioEnvSetting from "./StudioEnvSetting";
import StudioSqlConfig from "./StudioSqlConfig";
import StudioUDFInfo from "./StudioUDFInfo";
import StudioJarSetting from "./StudioJarSetting";
import StudioGuide from "./StudioGuide";
import StudioTaskInfo from "./StudioTaskInfo";
import {DIALECT, isSql} from "@/components/Studio/conf";

const {TabPane} = Tabs;

const StudioRightTool = (props: any) => {

  const {current, form, toolHeight} = props;

  const renderContent = () => {
    if (isSql(current.task.dialect)) {
      return renderSqlContent();
    }
    if (DIALECT.FLINKJAR === current.task.dialect) {
      return renderJarContent();
    }
    if (DIALECT.FLINKSQLENV === current.task.dialect) {
      return renderEnvContent();
    }
    if (DIALECT.JAVA === current.task.dialect) {
      return renderUDFContent();
    }
    return renderFlinkSqlContent();
  };

  const renderTaskInfoContent = () => {
    return (
      <TabPane tab={<span><ContainerOutlined/> 作业信息</span>} key="StudioTaskInfo">
        <StudioTaskInfo form={form}/>
      </TabPane>
    )
  };

  const renderSqlContent = () => {
    return (<>
      <TabPane tab={<span><SettingOutlined/> 执行配置</span>} key="StudioSqlConfig">
        <StudioSqlConfig form={form}/>
      </TabPane>
    </>)
  };

  const renderJarContent = () => {
    return (<>
      <TabPane tab={<span><SettingOutlined/> 作业配置</span>} key="StudioJarSetting">
        <StudioJarSetting form={form}/>
      </TabPane>
    </>)
  };

  const renderEnvContent = () => {
    return (<>
      <TabPane tab={<span><SettingOutlined/> 作业配置</span>} key="StudioEnvSetting">
        <StudioEnvSetting form={form}/>
      </TabPane>
    </>)
  };

  const renderUDFContent = () => {
    return (<>
      <TabPane tab={<span><SettingOutlined/> UDF信息</span>} key="StudioUDFInfo">
        <StudioUDFInfo form={form}/>
      </TabPane>
    </>)
  };

  const renderFlinkSqlContent = () => {
    return (<><TabPane tab={<span><SettingOutlined/> 作业配置</span>} key="StudioSetting">
      <StudioSetting form={form}/>
    </TabPane>
      <TabPane tab={<span><SettingOutlined/> 执行配置</span>} key="StudioConfig">
        <StudioConfig form={form}/>
      </TabPane>
      <TabPane tab={<span><ScheduleOutlined/> 保存点</span>} key="StudioSavePoint">
        <StudioSavePoint/>
      <TabPane tab={<span><ScheduleOutlined /> 版本历史</span>} key="StudioHistory" >
        <StudioHistory />
      </TabPane>
    </>)
  };

  return (
    <>
      {current?.task ?
        <Tabs defaultActiveKey="1" size="small" tabPosition="right" style={{height: toolHeight}}>
          {renderContent()}
          {renderTaskInfoContent()}
        </Tabs> : <StudioGuide toolHeight={toolHeight}/>}
    </>
  );
};

export default connect(({Studio}: { Studio: StateType }) => ({
  sql: Studio.sql,
  toolHeight: Studio.toolHeight,
  current: Studio.current,
}))(StudioRightTool);
