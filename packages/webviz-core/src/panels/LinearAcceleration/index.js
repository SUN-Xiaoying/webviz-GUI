// @flow
//
//  Copyright (c) 2019-present, Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

import React, { useState, useCallback, useMemo } from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";

import Flex from "webviz-core/src/components/Flex";
import Panel from "webviz-core/src/components/Panel";
import PanelToolbar from "webviz-core/src/components/PanelToolbar";
import Gauge from "webviz-core/src/components/Gauge";

const STitle = styled.h1`
  padding: 16px 16px 0px 16px;
  font-size: 14;
`;

function LinearAcceleration(props) {

    const topicPath = '/current_velocity';

    return (
        <Flex col clip>
            <PanelToolbar floating />
            <STitle>Linear Acceleration</STitle>
            <Gauge topicPath={topicPath} />
        </Flex>
    );
}
LinearAcceleration.panelType = "LinearAcceleration";
LinearAcceleration.defaultConfig = {};

export default hot(Panel(LinearAcceleration));