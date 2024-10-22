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
    Completed: "text-green-600",
    "In Progress": "text-yellow-600",
    Pending: "text-red-600",
  }[status];

  return (
    <Link
      to={`/procurement/${project.id}`}
      state={project}
      className="no-underline"
    >
      <div className="bg-white shadow-lg rounded-lg p-4 m-4 transition transform hover:scale-105">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-500 text-sm mb-2">Date: {date}</p>
        <p className={`font-bold ${statusColor}`}>Status: {status}</p>
        <div className="mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
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
