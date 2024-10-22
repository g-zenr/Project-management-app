interface Procurement {
  id: string;
  projectId: string;
  item: string;
  cost: number;
  date: string;
  status: "Pending" | "Approved" | "Rejected";
  category: string;
  expenseType: string;
}

interface MonthlyBudget {
  month: string; // e.g., "January", "February", etc.
  year: number;
  amount: number;
  forecast: number;
}

interface Project {
  id: string;
  name: string;
  description: string;
  date: string;
  status: "In Progress" | "Completed" | "Pending";
  budget: number;
  forecast: number;
  totalBudget: number;
  monthlyBudget: MonthlyBudget[]; // Changed to monthly budget
  procurement: Procurement[];
  tags: string[];
}

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Project Alpha",
    description: "This project focuses on developing a new product.",
    date: "2024-01-01",
    status: "In Progress",
    budget: 100000,
    forecast: 120000,
    totalBudget: 150000,
    monthlyBudget: [
      { month: "January", year: 2024, amount: 10000, forecast: 12000 },
      { month: "February", year: 2024, amount: 15000, forecast: 17000 },
      { month: "March", year: 2024, amount: 20000, forecast: 22000 },
      { month: "April", year: 2024, amount: 30000, forecast: 35000 },
      { month: "May", year: 2024, amount: 25000, forecast: 27000 },
      { month: "June", year: 2024, amount: 15000, forecast: 17000 },
      // Add more months as needed...
    ],
    procurement: [
      {
        id: "p1",
        projectId: "1",
        item: "Material A",
        cost: 20000,
        date: "2024-01-10",
        status: "Approved",
        category: "Materials",
        expenseType: "Capital",
      },
      {
        id: "p2",
        projectId: "1",
        item: "Material B",
        cost: 15000,
        date: "2024-01-15",
        status: "Pending",
        category: "Materials",
        expenseType: "Operational",
      },
    ],
    tags: ["Development", "Product"],
  },
  {
    id: "2",
    name: "Project Beta",
    description: "This project is focused on improving internal processes.",
    date: "2024-03-01",
    status: "Pending",
    budget: 50000,
    forecast: 70000,
    totalBudget: 80000,
    monthlyBudget: [
      { month: "March", year: 2024, amount: 10000, forecast: 12000 },
      { month: "April", year: 2024, amount: 15000, forecast: 17000 },
      { month: "May", year: 2024, amount: 20000, forecast: 22000 },
      { month: "June", year: 2024, amount: 30000, forecast: 35000 },
      { month: "July", year: 2024, amount: 25000, forecast: 27000 },
      { month: "August", year: 2024, amount: 15000, forecast: 17000 },
      // Add more months as needed...
    ],
    procurement: [],
    tags: ["Process Improvement", "Efficiency"],
  },
];
