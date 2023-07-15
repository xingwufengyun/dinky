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


import {
  ApartmentOutlined,
  BarChartOutlined, CalendarOutlined, ConsoleSqlOutlined,
  DatabaseOutlined, DesktopOutlined, FolderOutlined, HistoryOutlined, InfoCircleOutlined,
  MonitorOutlined,
  PlayCircleOutlined, RightSquareOutlined,
  SettingOutlined,
  TableOutlined,
  ToolOutlined
} from "@ant-design/icons";
import React from "react";
import MetaData from "@/pages/DataStudio/LeftContainer/MetaData";
import Project from "@/pages/DataStudio/LeftContainer/Project";
import Console from "@/pages/DataStudio/BottomContainer/Console";
import JobConfig from "@/pages/DataStudio/RightContainer/JobConfig";
import ExecuteConfig from "@/pages/DataStudio/RightContainer/ExecuteConfig";
import SavePoints from "@/pages/DataStudio/RightContainer/SavePoints";
import HistoryVersion from "@/pages/DataStudio/RightContainer/HistoryVersion";
import JobInfo from "@/pages/DataStudio/RightContainer/JobInfo";

export const LeftSide = [
  {
    key: 'menu.datastudio.project',
    icon: <ConsoleSqlOutlined />,
    label: 'menu.datastudio.project',
    children: <Project/>
  },
  {
    key: 'menu.datastudio.structure',
    icon: <TableOutlined/>,
    label: 'menu.datastudio.structure',
    children: <div>structure</div>
  },
  {
    key: 'menu.datastudio.metadata',
    icon: <DatabaseOutlined/>,
    label: 'menu.datastudio.metadata',
    children: <MetaData/>
  }
];

export const RightSide = [
  {
    key: 'menu.datastudio.jobConfig',
    icon: <SettingOutlined/>,
    label: 'menu.datastudio.jobConfig',
    children: <JobConfig/>,
  },
  {
    key: 'menu.datastudio.executeConfig',
    icon: <PlayCircleOutlined/>,
    label: 'menu.datastudio.executeConfig',
    children: <ExecuteConfig/>,
  },
  {
    key: 'menu.datastudio.savePoint',
    icon: <FolderOutlined/>,
    label: 'menu.datastudio.savePoint',
    children: <SavePoints/>,
  },
  {
    key: 'menu.datastudio.historyVision',
    icon: <HistoryOutlined/>,
    label: 'menu.datastudio.historyVision',
    children: <HistoryVersion/>,

  }, {
    key: 'menu.datastudio.jobInfo',
    icon: <InfoCircleOutlined/>,
    label: 'menu.datastudio.jobInfo',
    children: <JobInfo/>,
  }
];

export const LeftBottomSide = [
  {
    key: 'menu.datastudio.console',
    icon: <RightSquareOutlined/>,
    label: 'menu.datastudio.console',
    children: <Console/>
  },
  {
    key: 'menu.datastudio.result',
    icon: <MonitorOutlined />,
    label: 'menu.datastudio.result',
  },
  {
    key: 'menu.datastudio.bi',
    icon: <BarChartOutlined />,
    label: 'menu.datastudio.bi',
  },
  {
    key: 'menu.datastudio.lineage',
    icon: <ApartmentOutlined />,
    label: 'menu.datastudio.lineage',
  },
  {
    key: 'menu.datastudio.process',
    icon: <DesktopOutlined />,
    label: 'menu.datastudio.process',
  },
  {
    key: 'menu.datastudio.history',
    icon: <CalendarOutlined/>,
    label: 'menu.datastudio.history',
  },
  {
    key: 'menu.datastudio.table-data',
    icon: <TableOutlined />,
    label: 'menu.datastudio.table-data',
  },
  {
    key: 'menu.datastudio.tool',
    icon: <ToolOutlined />,
    label: 'menu.datastudio.tool',
  }
]
