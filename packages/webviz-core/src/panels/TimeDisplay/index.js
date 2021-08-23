import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";

import styles from "./index.module.scss";
import Flex from "webviz-core/src/components/Flex";
import Panel from "webviz-core/src/components/Panel";
import PanelToolbar from "webviz-core/src/components/PanelToolbar";
import Clock from 'react-digital-clock';
import ROSLIB from 'roslib';

const ROS =  new ROSLIB.Ros({ url : 'ws://localhost:9090'});

const STitle = styled.h1`
  padding: 16px 16px 16px 16px;
  font-size: 14;
`;

function TimeDisplay(props) {
  const [sclock, setSClock] = useState();
  const clock_topic = new ROSLIB.Topic({
    ros : ROS,
    name : '/clock',
    messageType : 'rosgraph_msgs/Clock'
  });

   //subscribing to the topic /vehicle_cmd
   useEffect(()=>{
    clock_topic.subscribe(function(message){
        let str = message.clock.nsecs.toString().substring(0,2);  // cut first two characters
        let result = parseInt(str); // convert it to a number
        setSClock(message.clock.secs + "." + result + " s");
    });
  }, [sclock]);

  return (
    <Flex col clip>
      <PanelToolbar floating />
      <STitle>Time Display</STitle>
      <table className={styles.table}>
        <tr>
          <td>Simulation Time</td>
          <td>{sclock}</td>
        </tr>
        <tr>
          <td>Real Time</td>
          <td><Clock/></td>
        </tr>
      </table>

       



    </Flex>
  );
}

TimeDisplay.panelType = "TimeDisplay";
TimeDisplay.defaultConfig = {};

export default hot(Panel(TimeDisplay));