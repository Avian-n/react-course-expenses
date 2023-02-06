import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  const biggestExpenses = dataPointValues.indexOf(totalMaximum);
  let totalSum = 0;

  for (let dataPointValue of dataPointValues) {
    totalSum += dataPointValue;
  }
  console.log(totalSum);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, i) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
          totalSum={totalSum}
          biggest={i === biggestExpenses && true}
        />
      ))}
    </div>
  );
};

export default Chart;
