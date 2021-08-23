import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";

import styles from "./index.module.scss";
import Flex from "webviz-core/src/components/Flex";
import Panel from "webviz-core/src/components/Panel";
import PanelToolbar from "webviz-core/src/components/PanelToolbar";
import Gauge from "webviz-core/src/components/Gauge";

const STitle = styled.h1`
  padding: 16px 16px 16px 16px;
  font-size: 14;
`;

function LinearVelocity(props) {
  const topicPath = '/current_velocity';
  return (
    <Flex col clip>
      <PanelToolbar floating />
      <STitle>Linear Velocity</STitle>
      <Gauge topicPath={topicPath} />
    </Flex>
  );
}
LinearVelocity.panelType = "LinearVelocity";
LinearVelocity.defaultConfig = {};

export default hot(Panel(LinearVelocity));