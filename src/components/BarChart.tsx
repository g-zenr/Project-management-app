import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface BarChartProps {
  totalBudget: number;
  totalSpent: number;
  procurementItems: { item: string; cost: number }[];
}

const BarChart: React.FC<BarChartProps> = ({
  totalBudget,
  totalSpent,
  procurementItems,
}) => {
  const chartRef = useRef<Chart | null>(null);

  const data = {
    labels: procurementItems.map((item) => item.item),
    datasets: [
      {
        label: "Cost",
        data: procurementItems.map((item) => item.cost),
        backgroundColor: "#36A2EB",
      },
      {
        label: "Budget",
        data: Array(procurementItems.length).fill(
          totalBudget / procurementItems.length
        ), // Average budget for comparison
        backgroundColor: "#FF6384",
      },
    ],
  };

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <Bar ref={chartRef} data={data} />;
};

export default BarChart;
