import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  status: "In Progress" | "Completed" | "Pending";
  tags: string[];
  project: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  date,
  status,
  tags,
  project,
}) => {
  const statusColor = {
    Completed: "text-green-500",
    "In Progress": "text-yellow-500",
    Pending: "text-red-500",
  }[status];

  return (
    <Link
      to={`/procurement/${project.id}`}
      state={project}
      className="no-underline"
    >
      <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 h-full flex flex-col">
        <h2 className="font-semibold text-lg text-gray-800 mb-1">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">{date}</p>
        <p className={`font-semibold ${statusColor} text-sm`}>
          Status: {status}
        </p>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-700 text-xs font-medium mr-2 mb-2 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export { ProjectCard };
