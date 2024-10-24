export interface ReportData {
  totalProjects: number;
  completedProjects: number;
  pendingTasks: number;
  totalBudget: number;
  trendLabels: string[];
  trendValues: number[];
  taskLabels: string[];
  taskValues: number[];
  budgetLabels: string[];
  budgetValues: number[];
  upcomingDeadlines: { task: string; date: string }[];
  teamPerformance: { member: string; completed: number; total: number }[];
  budgetComparison: { category: string; value: number }[];
}

export const mockReportData: ReportData = {
  totalProjects: 5,
  completedProjects: 3,
  pendingTasks: 2,
  totalBudget: 100000,
  trendLabels: ["Jan", "Feb", "Mar", "Apr", "May"],
  trendValues: [20000, 25000, 30000, 15000, 20000],
  taskLabels: ["Completed", "Pending", "In Progress"],
  taskValues: [3, 2, 0],
  budgetLabels: ["Q1", "Q2", "Q3", "Q4"],
  budgetValues: [25000, 25000, 25000, 25000],
  upcomingDeadlines: [
    { task: "Submit Report", date: "2024-10-30" },
    { task: "Project Presentation", date: "2024-11-15" },
  ],
  teamPerformance: [
    { member: "Alice", completed: 2, total: 3 },
    { member: "Bob", completed: 1, total: 2 },
    { member: "Charlie", completed: 0, total: 0 },
  ],
  budgetComparison: [
    { category: "Allocated Budget", value: 100000 },
    { category: "Spent", value: 80000 },
    { category: "Remaining", value: 20000 },
  ],
};
