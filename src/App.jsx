import React, { useState, useEffect } from 'react';
import { BarChart } from './components/BarChart';
import { LineChart } from './components/LineChart';
import { ScatterChart } from './components/ScatterChart';
import { BubbleChart } from './components/BubbleChart';

const App = () => {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/financial_data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setChartData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  if (!chartData) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Financial Data Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
          <BarChart data={chartData} />
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Profit Trends</h2>
          <LineChart data={chartData} />
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Expenses vs Profits</h2>
          <ScatterChart data={chartData} />
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Combined Metrics</h2>
          <BubbleChart data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default App;
