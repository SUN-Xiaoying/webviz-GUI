import React, {useState, useEffect} from "react";
import ROSLIB from 'roslib';
import styles from "./index.module.scss";

const ROS =  new ROSLIB.Ros({ url : 'ws://localhost:9090'});

function Gauge(props){

  const [topic, setTopic] = useState(props.topicPath);
  const [shift, setShift] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const velocity_listener = new ROSLIB.Topic({
      ros : ROS,
      name : topic,
      messageType : 'geometry_msgs/TwistStamped'
  });

  useEffect(()=>{
    velocity_listener.subscribe(function(message)
    {
      let value = message.twist.linear.x;
      let max_gauge_speed = 10;

      //shifting value by one decimal
      setShift((value / max_gauge_speed)/3);

      document.documentElement.style.setProperty("--transform",`rotate(${shift}turn)`);
      // to convert the value to km/hr from m/s
      setVelocity( Math.round((value * 180) / 50));
    });
  }, [velocity]);
  
  return (
    <div className ={styles.container}>
    <div className ={styles.box}>
      <div className ={styles.fill}></div>
      <div className ={styles.cover}>{velocity} km/h</div>
    </div>
  </div>
  )
};

export default Gauge;

