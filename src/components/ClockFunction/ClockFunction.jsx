import React, { useEffect, useState } from 'react';

const ClockFunction = () => {
  const [time, setTime] = useState({
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
    setTime(
      {
        ...time,
        timeData: new Date()
      });
  }

  return (
    <div>
      <h1>Clock class component</h1>
      <h2>Сейчас {time.timeData.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default ClockFunction;