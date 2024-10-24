export interface BaseEntity {
  id: string;
}

export interface Procurement extends BaseEntity {
  item: string;
  cost: number;
  date: string;
  status: "Pending" | "Approved" | "Rejected";
}

export interface MonthlyBudget {
  month: string;
  amount: number;
  forecast: number;
}

export interface TableData {
  budget: number;
  totalBudget: number;
  monthlyBudget: MonthlyBudget[];
  category: string;
  expenseType: string;
}

export interface Project extends BaseEntity {
  name: string;
  description: string;
  date: string;
  status: "In Progress" | "Completed" | "Pending";
  tableData: TableData[];
  procurement: Procurement[];
  tags: string[];
}
