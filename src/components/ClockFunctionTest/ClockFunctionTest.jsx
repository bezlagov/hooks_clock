import React, { useEffect, useState } from 'react';
import background from "../../assets/clock.png";
import Arrow from './Arrow/Arrow';
import classes from './ClockFunctionTest.module.scss';

const ClockFunctionTest = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
    timerId: 0,
    timeData: new Date()
  });

  useEffect(() => {
    setTime({
      ...time,
      timerId: setInterval(
        () => tick(),
        1000
      )
    });

    return () => {
      clearInterval(time.timerId);
    }
  }, []
  );

  const tick = () => {

    const data = new Date();
    setTime(
      {
        ...time,
        hours: data.getHours(),
        minutes: data.getMinutes(),
        seconds: data.getSeconds(),
        timeData: data
      });
  }

  return (
    <div className={classes.clock} style={{ backgroundImage: `url(${background})` }}>
      <div className={classes.arrowHolder}>
        <Arrow time={time.hours} classData="hours" />
        <Arrow time={time.minutes} classData="minutes" />
        <Arrow time={time.seconds} classData="seconds" />
      </div>
    </div>
  );
};

export default ClockFunctionTest;