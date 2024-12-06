import React from "react";
import projects from "../data/projects.json";
import { FaEye, FaGithub } from "react-icons/fa";

const Work = () => {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 py-16 pt-24" id="work">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out transform cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-36 w-full object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                  {project.description}
                </p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-gray-700 transition-colors"
                    >
                      <FaEye />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Work;