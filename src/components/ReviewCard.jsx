import React, { useState } from "react";
import { Icon } from "@iconify/react";
import projectFiles from "../components/projects.json";

const ReviewCard = ({ theme }) => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <>
      {projectFiles.Projects.map((project) => (
        <div
          key={project.P_id}
          className="w-80 h-96 hover:scale-[1.02] relative group"
          onMouseEnter={() => setHoveredProjectId(project.P_id)}
          onMouseLeave={() => setHoveredProjectId(null)}
        >
          <img
            src={project.img}
            alt="project image"
            className={`w-full h-full rounded-xl object-cover absolute transition-opacity ${
              hoveredProjectId === project.P_id ? "opacity-40 shadow-inner" : "opacity-100"
            }`}
          />

          <div className="relative p-10 z-40">
            <h1
              className={`border rounded-md inline-block py-1 px-4 font-medium ${
                project.status === "Live"
                  ? "text-green-500 border-green-500"
                  : "text-red-500 border-red-500"
              }`}
            >
              {project.status}
            </h1>
            <h2 className={`text-2xl font-medium ${hoveredProjectId === project.P_id ? 'text-white' : 'text-[#8b8b8b]'}`}>{project.project_name}</h2>
          </div>

          {hoveredProjectId === project.P_id && (
            <div className="absolute bottom-5 left-0 right-0 p-5 translate-y-5 transform z-30 transition-all opacity-100">
              <p className="text-white text-sm">{project.description}</p>
              <div className="flex gap-x-4 mt-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} text-sm rounded-md py-1 px-2 flex items-center justify-center gap-x-1 duration-75 hover:translate-y-0.5`}
                  >
                    <Icon icon="mdi:web" className="size-5" />
                    Website
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${theme === "dark" ? "bg-white text-black" : "bg-black text-white"} text-sm rounded-md py-1 px-2 flex items-center justify-center gap-x-1 duration-75 hover:translate-y-0.5`}
                  >
                    <Icon icon="formkit:github" className="size-5" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ReviewCard;