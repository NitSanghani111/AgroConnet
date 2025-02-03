import { useState, useEffect, useRef } from "react";
import { Line, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const AnalyticsPage = () => {
    const chartRef = useRef<ChartJS.Chart | null>(null);

  const salesData = [
    { month: "Jan", amount: 2400 },
    { month: "Feb", amount: 1398 },
    { month: "Mar", amount: 9800 },
    { month: "Apr", amount: 3908 },
    { month: "May", amount: 4800 },
    { month: "Jun", amount: 3800 },
  ];

  const categoryData = [
    { category: "Vegetables", count: 40 },
    { category: "Fruits", count: 30 },
    { category: "Grains", count: 20 },
    { category: "Others", count: 10 },
  ];

  // Prepare chart data for Line and Bar charts
  const lineChartData = {
    labels: salesData.map((item) => item.month),
    datasets: [
      {
        label: "Sales Amount",
        data: salesData.map((item) => item.amount),
        borderColor: "#8884d8",
        fill: false,
      },
    ],
  };

  const barChartData = {
    labels: categoryData.map((item) => item.category),
    datasets: [
      {
        label: "Product Count",
        data: categoryData.map((item) => item.count),
        backgroundColor: "#8884d8",
      },
    ],
  };

  // Clean up the chart when the component unmounts or the data changes
  useEffect(() => {
    const chartInstance = chartRef.current;
    return () => {
      // Destroy chart instance on cleanup
      if (chartInstance) {
        chartInstance?.destroy();
      }
    };
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Card for Total Sales */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-medium">Total Sales</h3>
          </div>
          <div className="card-content">
            <div className="text-2xl font-bold">$12,345</div>
            <p className="text-xs text-muted">+20.1% from last month</p>
          </div>
        </div>

        {/* Other Cards */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-medium">Average Order Value</h3>
          </div>
          <div className="card-content">
            <div className="text-2xl font-bold">$234</div>
            <p className="text-xs text-muted">+4.75% from last month</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-medium">Total Orders</h3>
          </div>
          <div className="card-content">
            <div className="text-2xl font-bold">53</div>
            <p className="text-xs text-muted">+12.3% from last month</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-medium">Active Products</h3>
          </div>
          <div className="card-content">
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted">+2 new this month</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Monthly Sales Chart */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-medium">Monthly Sales</h3>
          </div>
          <div className="card-content">
            <div className="chart-container" style={{ height: "300px" }}>
              <Line ref={chartRef} data={lineChartData} />
            </div>
          </div>
        </div>

        {/* Product Categories Chart */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-medium">Product Categories</h3>
          </div>
          <div className="card-content">
            <div className="chart-container" style={{ height: "300px" }}>
              <Bar ref={chartRef} data={barChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
