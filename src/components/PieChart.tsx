import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface PieChartProps {
  data: { labels: string[]; values: number[] };
  label: string;
  backgroundColor: string[];
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  label,
  backgroundColor,
}) => {
  const chartRef = useRef<Chart | null>(null);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label,
        data: data.values,
        backgroundColor,
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

  return <Pie ref={chartRef} data={chartData} />;
};

export default PieChart;
