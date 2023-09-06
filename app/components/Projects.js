"use client";

import Image from "next/image";
import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = [
    {
      name: "OpenHanded",
      description:
        "Open Handed is a dynamic crowdfunding platform designed to connect passionate individuals, innovative projects, and potential backers in an inspiring and secure online space. Our goal was to empower entrepreneurs, artists, social activists, nonprofit organizations, and individuals to turn their creative and impactful ideas into reality through the collective power of the crowd.",
      usedTools: "NextJs, Cypress, Firebase, Next-intl",
      img: "/crawd.png",
      link: "https://team-10-roan.vercel.app/",
    },
    {
      name: "Social Media App",
      description:
        "Social media application using React.js, Node.js, and MongoDB. Build a Real-World Project with React Hooks, Context API, Functional React Components, Node.js REST API, Axios and more.",
      usedTools: "NodeJS, ReactJS, HOOKS, Context API",
      img: "/twitter.png",
      link: "https://stellar-cucurucho-92c1e4.netlify.app/",
    },
    {
      name: "Trade Provision",
      description:
        "FullStack Trading App platform create accounts intgrated with Crm, change passwords, trade, check markit prices and more.",
      usedTools: "Node.js, CRM Integration , NextJS",
      img: "/brand1.png",
    },

    {
      name: "Promptopia",
      description:
        "Promptopia is an open- source AI prompting tool designed for the modern world.With Promptopia, you can effortlessly discover, create, and share creative prompts",
      usedTools: "NextJS, NextAuth, MongoDB, Tailwind CSS ",
      img: "/promt.png",
      link: "https://promptopia-next-js-full-stack-iwr1g7k4m-kainy01.vercel.app/",
    },
    {
      name: "Movie Clone",
      description:
        "User-friendly platform that brings the world of cinema to your screen. this website offers a Movie of the Week section, shows movies, their casts, ratings, trailers, related movies, genres, and so on.",
      usedTools: "JS, API",
      img: "/movie.png",
      link: "https://the-trio-of-feeders.netlify.app/",
    },
    {
      name: "Hangman Game",
      description:
        "Classic word-guessing game with JavaScript and Cnvas. Guess words while avoiding the hanged man's fate. ",
      usedTools: "HTML, CSS, JS, Canvas",
      img: "/hanged.png",
      link: "https://hanged-man.netlify.app/",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
      <div className="pb-12">
        <h2 className="after-effect  left-">Projects</h2>
        {isModalOpen && (
        <ProjectDetail project={selectedProject} onClose={closeModal} />
      )}
        <div className="mt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-1 space-y-2 mb-2 rounded-lg dark:border-[#212425] dark:border-2 ${
                backgroundColors[index % 10]
              } hover:bg-yellow-200`}
            >
              <div
                onClick={() => handleProjectClick(project)}
                className="relative overflow-hidden h-[200px] p"
              >
                <img
                  width="200"
                  height="200"
                  src={project.img}
                  alt={project.name}
                  className="object-cover object-top p-img"
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
