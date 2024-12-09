import React from 'react';
import ChartComponent from './ChartComponent';


// Task 3 - Line Chart

export const LineChart = ({ data }) => {
  const lineChartData = {
    labels: data.months,
    datasets: [{
      label: 'Monthly Profits',
      data: data.profits,
      fill: false,
      borderColor: 'rgb(54, 162, 235)',
      tension: 0.1
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <ChartComponent type="line" data={lineChartData} options={options} />;
};
