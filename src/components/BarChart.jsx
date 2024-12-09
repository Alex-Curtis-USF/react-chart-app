import React from 'react';
import ChartComponent from './ChartComponent';


// Task 3 - Bar Chart

export const BarChart = ({ data }) => {
  const barChartData = {
    labels: data.months,
    datasets: [{
      label: 'Monthly Sales',
      data: data.sales,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
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

  return <ChartComponent type="bar" data={barChartData} options={options} />;
};

