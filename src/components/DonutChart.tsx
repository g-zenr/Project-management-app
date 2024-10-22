// DonutChart.tsx
import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface DonutChartProps {
  totalBudget: number;
  totalSpent: number;
  remainingBudget: number;
}

const DonutChart: React.FC<DonutChartProps> = ({
  totalBudget,
  totalSpent,
  remainingBudget,
}) => {
  const chartRef = useRef<Chart | null>(null);

  const data = {
    labels: ["Total Spent", "Remaining Budget"],
    datasets: [
      {
        data: [totalSpent, remainingBudget],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverOffset: 4,
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

  return <Doughnut ref={chartRef} data={data} />;
};

export default DonutChart;
