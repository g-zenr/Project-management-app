import React from "react";
import { mockProjects, Project } from "../mocks/projects";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import DonutChart from "../components/DonutChart";
import ProcurementLineChart from "../components/ProcurementLineChart";

const DashboardPage: React.FC = () => {
  const projects: Project[] = mockProjects;

  const totalProjects = projects.length;
  const inProgress = projects.filter((p) => p.status === "In Progress").length;
  const completed = projects.filter((p) => p.status === "Completed").length;
  const pending = projects.filter((p) => p.status === "Pending").length;

  const totalBudget = projects.reduce(
    (acc, project) =>
      acc + project.tableData.reduce((sum, data) => sum + data.totalBudget, 0),
    0
  );

  const totalSpent = projects.reduce(
    (acc, project) =>
      acc + project.procurement.reduce((sum, item) => sum + item.cost, 0),
    0
  );

  const remainingBudget = totalBudget - totalSpent;

  const allProcurementItems = projects.flatMap(
    (project) => project.procurement
  );

  return (
    <div className="dashboard p-5">
      <h1 className="text-2xl font-bold mb-5">Project Management Dashboard</h1>

      <div className="summary mb-5 p-4 border rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Overall Project Overview</h2>

        <div className="grid grid-cols-4 gap-4">
          <div className="p-2 border rounded bg-blue-100">
            <h3 className="text-lg font-semibold">Total Projects</h3>
            <p>{totalProjects}</p>
          </div>
          <div className="p-2 border rounded bg-green-100">
            <h3 className="text-lg font-semibold">In Progress</h3>
            <p>{inProgress}</p>
          </div>
          <div className="p-2 border rounded bg-yellow-100">
            <h3 className="text-lg font-semibold">Completed</h3>
            <p>{completed}</p>
          </div>
          <div className="p-2 border rounded bg-red-100">
            <h3 className="text-lg font-semibold">Pending</h3>
            <p>{pending}</p>
          </div>
        </div>
      </div>

      {/* Charts Grid Layout */}
      <div className="flex flex-col w-full">
        {/* First row: Bar Graph and Pie Chart */}
        <div className="flex w-full mb-8">
          {" "}
          {/* Increased margin-bottom for more space */}
          <div className="w-[70%] h-97">
            {" "}
            <h2 className="text-lg font-semibold">Budget vs Actual Spend</h2>
            <BarChart
              totalBudget={totalBudget}
              totalSpent={totalSpent}
              procurementItems={allProcurementItems}
            />
          </div>
          <div className="w-[30%] h-97">
            {" "}
            <h2 className="text-lg font-semibold">
              Budget Overview (Donut Chart)
            </h2>
            <DonutChart
              totalBudget={totalBudget}
              totalSpent={totalSpent}
              remainingBudget={remainingBudget}
            />
          </div>
        </div>

        {/* Second row: Bar Graph and Pie Chart */}
        <div className="flex w-full">
          <div className="w-[70%] h-97">
            {" "}
            {/* Increased height */}
            <h2 className="text-lg font-semibold">
              Procurement Costs Over Time
            </h2>
            <ProcurementLineChart procurementItems={allProcurementItems} />
          </div>
          <div className="w-[30%] h-97">
            {" "}
            <h2 className="text-lg font-semibold">
              Project Progress Breakdown
            </h2>
            <PieChart projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
