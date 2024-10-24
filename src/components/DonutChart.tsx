import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface DonutChartProps {
  data: { values: number[] };
  label: string;
  backgroundColor: string[];
}

const DonutChart: React.FC<DonutChartProps> = ({
  data,
  label,
  backgroundColor,
}) => {
  const chartRef = useRef<Chart | null>(null);

  const chartData = {
    labels: ["Total Spent", "Remaining Budget"],
    datasets: [
      {
        label,
        data: data.values,
        backgroundColor,
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

  return <Doughnut ref={chartRef} data={chartData} />;
};

export default DonutChart;
