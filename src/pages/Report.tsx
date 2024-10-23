import React from "react";
import { mockReportData, ReportData } from "../mocks/reportMockData";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import SummaryCard from "../cards/SummaryCard";

const ReportPage: React.FC = () => {
  const reportData: ReportData = mockReportData;

  return (
    <div className="report-page p-5" style={{ backgroundColor: "#fafafa" }}>
      <h1 className="text-3xl font-bold mb-6 text-[#0f77be]">Project Report</h1>

      <div className="summary mb-5 p-4 border border-gray-300 rounded shadow-md bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Summary Overview
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <SummaryCard
            title="Total Projects"
            value={reportData.totalProjects}
            bgColor="bg-white"
          />
          <SummaryCard
            title="Completed Projects"
            value={reportData.completedProjects}
            bgColor="bg-white"
          />
          <SummaryCard
            title="Pending Tasks"
            value={reportData.pendingTasks}
            bgColor="bg-white"
          />
          <SummaryCard
            title="Total Budget"
            value={mockReportData.totalProjects}
            bgColor="bg-white"
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-10">
        <div className="bg-white border border-gray-300 rounded shadow-md p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Budget Spend Over Time
          </h2>
          <LineChart
            data={{
              labels: reportData.trendLabels,
              values: reportData.trendValues,
            }}
            label="Monthly Spend"
            borderColor="#0f77be"
          />
        </div>

        <div className="bg-white border border-gray-300 rounded shadow-md p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Task Status Overview
          </h2>
          <BarChart
            labels={reportData.taskLabels}
            data={[reportData.taskValues, [reportData.completedProjects]]}
            colors={["#0f77be", "#d1d1d1", "#b0b0b0"]}
            labelsDataset={["Task Values", "Completed Projects"]}
          />
        </div>

        {/* Budget Comparison Pie Chart */}
        <div className="bg-white border border-gray-300 rounded shadow-md p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Monthly Budget Overview
          </h2>
          <PieChart
            data={{
              labels: reportData.budgetLabels,
              values: reportData.budgetValues,
            }}
            label="Monthly Budget Distribution"
            backgroundColor={[
              "#0f77be",
              "#d1d1d1",
              "#b0b0b0",
              "#a0a0a0",
              "#909090",
              "#808080",
            ]}
          />
        </div>
      </div>

      <div className="upcoming-deadlines mt-10 bg-white border border-gray-300 rounded shadow-md p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Deadlines
        </h2>
        <ul className="list-disc pl-5">
          {reportData.upcomingDeadlines.map((deadline, index) => (
            <li key={index} className="text-gray-700">
              {deadline.task} - <strong>{deadline.date}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReportPage;
