import Image from "next/image";
import React from "react";
const Projects = ({
  handleProjectClick,

  projects,
}) => {
  return (
    <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
      <div className="pb-12">
        <h2 className="after-effect  left-">Projects</h2>

        <div className="mt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-[2px] space-y-2 mb-2 rounded-lg  cursor-pointer ${
                backgroundColors[index % 10]
              } hover:bg-yellow-200`}
            >
              <div
                onClick={() => handleProjectClick(project)}
                className="relative overflow-hidden h-[200px] p"
              >
                <Image
                  width="200"
                  height="200"
                  src={project.img}
                  alt={project.name}
                  unoptimized={true} 
                  priority
                  className="object-cover object-top p-img rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

const backgroundColors = [
  "bg-yellow-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-red-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-indigo-100",
  "bg-gray-100",
  "bg-teal-100",
  "bg-orange-100",
];
