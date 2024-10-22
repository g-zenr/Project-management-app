// ProcurementLineChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface ProcurementLineChartProps {
  procurementItems: {
    item: string;
    cost: number;
    status: string;
    date: string;
  }[];
}

const ProcurementLineChart: React.FC<ProcurementLineChartProps> = ({
  procurementItems,
}) => {
  // Prepare data for the line chart
  const labels = procurementItems.map((item) => item.date);
  const data = procurementItems.map((item) => item.cost);
  const statuses = procurementItems.map((item) => item.status);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Procurement Costs",
        data: data,
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Cost ($)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} height={150} />
    </div>
  );
};

export default ProcurementLineChart;
