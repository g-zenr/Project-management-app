import { useLocation } from "react-router-dom";
import { ProcurementTable } from "./ProcurementTable";
import { ProcurementItemsTable } from "./ProcurementItemsTable";
import { ProjectDescription } from "./ProjectDescription";

interface MonthlyBudget {
  month: string;
  year: number;
  amount: number;
  forecast: number;
}

interface Procurement {
  id: string;
  projectId: string;
  item: string;
  cost: number;
  date: string;
  status: "Pending" | "Approved" | "Rejected";
}

interface TableData {
  budget: number;
  forecast: number;
  totalBudget: number;
  monthlyBudget: MonthlyBudget[];
  category: string;
  expenseType: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  date: string;
  status: "In Progress" | "Completed" | "Pending";
  tableData: TableData[]; 
  procurement: Procurement[];
  tags: string[];
}

const ProcurementPage = () => {
  const location = useLocation();
  const project: Project | null = location.state;

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="p-5">
      <h1 className="font-bold text-2xl mb-4">
        Procurement Details for {project.name}
      </h1>
      <ProjectDescription project={project} />
      <ProcurementTable tableData={project.tableData} />{" "}
      <ProcurementItemsTable procurement={project.procurement} />
    </div>
  );
};

export { ProcurementPage };
