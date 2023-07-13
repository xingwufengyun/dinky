import {Tabs} from "antd";
import MovableSidebar, {MovableSidebarProps} from "@/components/Sidebar/MovableSidebar";
import React from "react";
import {connect} from "@@/exports";
import {StateType, VIEW} from "@/pages/DataStudio/model";
import {LeftSide} from "@/pages/DataStudio/route";
import {l} from "@/utils/intl";

export type LeftContainerProps = {
  size:number
}
const LeftContainer:React.FC<LeftContainerProps> = (props:any) => {
  const {dispatch,size} = props;


  const {toolContentHeight ,leftContainer , rightContainer} = props

    /**
     * 侧边栏大小变化
     * @param elementRef
     */
  const handleReSizeChange = (elementRef: any) => {
      dispatch({
          type: 'Studio/updateLeftWidth',
          payload: elementRef.offsetWidth,
      })
  }

    /**
     * 侧边栏最小化
     */
    const handleMinimize = () => {
        dispatch({
            type: 'Studio/updateSelectLeftKey',
            payload: "",
        })
    }



    const restMovableSidebarProps : MovableSidebarProps  = {
        contentHeight: toolContentHeight,
        onResize: (event: any, direction: any, elementRef: { offsetWidth: any; }) => handleReSizeChange(elementRef),
        title: (leftContainer.selectKey===''?"":l(leftContainer.selectKey)),
        handlerMinimize: ()=> handleMinimize(),
        visible: leftContainer.selectKey !== "",
        defaultSize: {width: leftContainer.width, height: leftContainer.height},
        minWidth: 200,
        maxWidth: size.width - 2 * VIEW.sideWidth - rightContainer.width - 200,
        enable: {right: true},
    }


  return(
    <MovableSidebar {...restMovableSidebarProps}>
      <Tabs activeKey={leftContainer.selectKey} items={LeftSide} tabBarStyle={{display: "none"}}/>
    </MovableSidebar>
  )
}

export default connect(({Studio}: { Studio: StateType }) => ({
  leftContainer: Studio.leftContainer,
  rightContainer: Studio.rightContainer,
  toolContentHeight: Studio.toolContentHeight,
}))(LeftContainer);

