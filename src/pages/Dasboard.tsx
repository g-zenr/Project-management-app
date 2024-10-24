import React from "react";
import { mockDashboardData, DashboardData } from "../mocks/dashboardMockData";
import PieChart from "../components/PieChart";
import DonutChart from "../components/DonutChart";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import SummaryCard from "../cards/SummaryCard";

const DashboardPage: React.FC = () => {
  const dashboardData: DashboardData = mockDashboardData;

  return (
    <div className="dashboard p-5" style={{ backgroundColor: "#fafafa" }}>
      <h1 className="text-3xl font-bold mb-6 text-[#0f77be]">
        Project Management Dashboard
      </h1>

      <div className="summary mb-5 p-4 border border-gray-300 rounded shadow-md bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Overall Project Overview
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {[
            { title: "Total Projects", value: dashboardData.totalProjects },
            { title: "In Progress", value: dashboardData.inProgress },
            { title: "Completed", value: dashboardData.completed },
            { title: "Pending", value: dashboardData.pending },
          ].map((data, index) => (
            <SummaryCard
              key={index}
              title={data.title}
              value={data.value}
              bgColor="bg-white"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex w-full mb-10 gap-10">
          <div className="w-[70%] h-97 bg-white border border-gray-300 rounded shadow-md p-4 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Budget vs Actual Spend
            </h2>
            <LineChart
              data={{
                labels: dashboardData.procurementItems.map((item) => item.date),
                values: dashboardData.procurementItems.map((item) => item.cost),
              }}
              label="Procurement Costs Over Time"
              borderColor="#0f77be"
            />
          </div>
          <div className="w-[30%] h-97 bg-white border border-gray-300 rounded shadow-md p-4 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Budget Overview
            </h2>
            <DonutChart
              data={{
                values: [
                  dashboardData.totalSpent,
                  dashboardData.remainingBudget,
                ],
              }}
              label="Budget Overview"
              backgroundColor={["#0f77be", "#d1d1d1"]}
            />
          </div>
        </div>

        <div className="flex w-full gap-10">
          <div className="w-[70%] h-97 bg-white border border-gray-300 rounded shadow-md p-4 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Budget vs Costs
            </h2>
            <BarChart
              labels={dashboardData.procurementItems.map((item) => item.item)}
              data={[
                dashboardData.procurementItems.map((item) => item.cost),
                Array(dashboardData.procurementItems.length).fill(
                  dashboardData.totalBudget /
                    dashboardData.procurementItems.length
                ),
              ]}
              labelsDataset={["Cost", "Budget"]}
              colors={["#0f77be", "#d1d1d1"]}
            />
          </div>
          <div className="w-[30%] h-97 bg-white border border-gray-300 rounded shadow-md p-4 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Project Progress Breakdown
            </h2>
            <PieChart
              data={{
                labels: Object.keys(dashboardData.procurementCounts),
                values: Object.values(dashboardData.procurementCounts),
              }}
              label="Procurement Status Breakdown"
              backgroundColor={["#0f77be", "#d1d1d1", "#b0b0b0"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
