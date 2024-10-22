import { ProjectCard } from "../cards/ProjectCard";
import { mockProjects } from "../mocks/projects";

const ProjectsPage = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-2xl mb-4">Projects Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            title={project.name}
            description={project.description}
            date={project.date}
            status={project.status}
            tags={project.tags || []}
          />
        ))}
      </div>
    </div>
  );
};

export { ProjectsPage };
