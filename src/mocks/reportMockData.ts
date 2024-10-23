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
}
export const mockReportData = {
  totalProjects: 5,
  completedProjects: 3,
  pendingTasks: 2,
  totalBudget: 100000,
  trendLabels: ["Jan", "Feb", "Mar", "Apr", "May"],
  trendValues: [20000, 25000, 30000, 15000, 20000],
  taskLabels: ["Completed", "Pending", "In Progress"],
  taskValues: [3, 2, 0], // Ensure these are numbers
  budgetLabels: ["Q1", "Q2", "Q3", "Q4"],
  budgetValues: [25000, 25000, 25000, 25000],
  upcomingDeadlines: [
    { task: "Submit Report", date: "2024-10-30" },
    { task: "Project Presentation", date: "2024-11-15" },
  ],
};
