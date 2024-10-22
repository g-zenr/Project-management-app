import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface PieChartProps {
  projects: Project[];
}

const PieChart: React.FC<PieChartProps> = ({ projects }) => {
  const chartRef = useRef<Chart | null>(null);

  const procurementCounts = projects
    .flatMap((project) => project.procurement)
    .reduce((acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(procurementCounts),
    datasets: [
      {
        data: Object.values(procurementCounts),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
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

  return <Pie ref={chartRef} data={data} />;
};

export default PieChart;
