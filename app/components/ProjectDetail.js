import React from "react";
import { FaCode, FaLink } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
const ProjectDetail = ({ project, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center  items-center z-50 bg-black  bg-opacity-75
     shadow-lg  dark:bg-[#dededeb6]
     dark:text-white
      "
      onClick={onClose}
    >
      <div className="flex items-start gap-5">
  
        <div className="bg-white p-4 rounded-md shadow-lg max-w-md dark:bg-[#323232]">
          <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold lg:block flex justify-between items-start">
            {project.name}
            <button
          onClick={onClose}
          className=" hover:text-gray-800 block lg:hidden
              "
        >
          <AiOutlineCloseCircle className="text-4xl   font-bold mr-2 text-center text-[#ff8888] cursor-pointer" />
        </button>
          </h2>

    
          <div className="flex my-2 items-center justify-center gap-10">
          {project.linkG? (
            <a
              href={project.linkG}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn ">
                <PiGithubLogoBold className=" text-[#E4405F] cursor-pointer" />
              </span>
            </a>
            ):null}
          {project.link? (

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn ">
                <FaLink className="text-[#0072b1] cursor-pointer" />
              </span>
            </a>
            ):null}

          </div>

          <p className="gap-2 flex mt-5 text-[#536e40] font-bold">
            <FaCode className="text-2xl " />

            {project.usedTools}
          </p>

          <p className="mt-4">{project.description}</p>
          <Image
            src={project.img}
            height={200}
            width={380}
            alt={project.name}
            className="w-full object-top h-[200px]  object-cover rounded-xl mt-6
          "
          />
        </div>
        <button
          onClick={onClose}
          className=" hover:text-gray-800 hidden lg:block "
        >
          <AiOutlineCloseCircle
            className="text-5xl font-bold mr-2 text-center text-[#ff8888] cursor-pointer
          "
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
