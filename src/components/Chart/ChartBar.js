import React from 'react';

import './ChartBar.css';

const ChartBar = props => {
  let barFillHeight = '0%';
  if (props.maxValue > 0) {
    barFillHeight =
      (props.value / props.totalSum) * 100 < 3 && (props.value / props.totalSum) * 100 > 0.0001
        ? '4%'
        : (props.value / props.totalSum) * 100 + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={
            props.biggest
              ? { height: barFillHeight, backgroundColor: 'red' }
              : { height: barFillHeight }
          }
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
