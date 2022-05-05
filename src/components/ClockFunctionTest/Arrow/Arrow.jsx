import React from 'react';
import classes from './Arrow.module.scss';

const Arrow = (props) => {
  let classType = "";
  if (props.classData == "minutes") {
    classType = classes.minutes;
  }
  else if (props.classData == "seconds") {
    classType = classes.seconds;
  }
  else {
    classType = classes.hours;
  }

  return (
    <div style={{ transform: `rotate(${props.time * (props.classData == "hours" ? 30 : 6)}deg)` }}>
      <div
        className={classType}>
      </div>
    </div>
  );
};

export default Arrow;