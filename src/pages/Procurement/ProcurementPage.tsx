import { useLocation } from "react-router-dom";
import { ProcurementTable } from "./ProcurementTable";
import { ProcurementItemsTable } from "./ProcurementItemsTable";
import { ProjectDescription } from "./ProjectDescription";
import { Project } from "../../types/common"; 

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
      <ProcurementTable tableData={project.tableData} />
      <ProcurementItemsTable procurement={project.procurement} />
    </div>
  );
};

export { ProcurementPage };
