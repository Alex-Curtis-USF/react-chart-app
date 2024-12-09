import React from 'react';
import ChartComponent from './ChartComponent';


// Task 3 - Scatter Chart

export const ScatterChart = ({ data }) => {
  const scatterChartData = {
    datasets: [{
      label: 'Expenses vs Profits',
      data: data.expenses.map((expense, index) => ({
        x: expense,
        y: data.profits[index]
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Expenses'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Profits'
        }
      }
    }
  };

  return <ChartComponent type="scatter" data={scatterChartData} options={options} />;
};