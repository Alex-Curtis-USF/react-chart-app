import React from 'react';
import ChartComponent from './ChartComponent';


// Task 3 - Bubble Chart

export const BubbleChart = ({ data }) => {
  const bubbleChartData = {
    datasets: [{
      label: 'Sales, Expenses, and Profits',
      data: data.expenses.map((expense, index) => ({
        x: expense,
        y: data.profits[index],
        r: data.sales[index] / 1000 // Scale down sales for reasonable bubble sizes
      })),
      backgroundColor: 'rgba(153, 102, 255, 0.5)'
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

  return <ChartComponent type="bubble" data={bubbleChartData} options={options} />;
};