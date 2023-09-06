import React from "react";

const ProjectDetail = ({ project, onClose }) => {
  return (
    <div className="mx-auto w-[90%] absolute flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-md shadow-lg max-w-md">
        <h2 className="text-xl font-semibold">{project.name}</h2>
        <img
          src={project.img}
          alt={project.name}
          className="w-full object-cover h-[200px] mt-2 rounded-lg"
        />
        <p className="mt-4">{project.description}</p>
        <p className="mt-2 flex justify-between">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Project Link
          </a>
          <button
            onClick={onClose}
            className="  text-gray-900 hover:text-gray-800"
          >
            Close
          </button>
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
