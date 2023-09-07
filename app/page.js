"use client";
import React, { useState } from "react";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ThemeSw from "./components/ThemeSw";
import LeftSide from "./components/LeftSide";
import Edu from "./components/Edu";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import ProjectDetail from "./components/ProjectDetail";
export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      <ToastContainer />
      {isModalOpen && (
        <ProjectDetail project={selectedProject} onClose={closeModal} />
      )}
      <div className="flex justify-between lg:pt-10 lg:pr-32 pt-5 pr-5">
        <div />

        <ThemeSw />
      </div>
      <section
        className="container absolute
  min-h-screen bg-no-repeat bg-center bg-cover bg-fixed   md:pb-16 w-full
    "
      >
        <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
          <LeftSide />

          <div className="col-span-12 lg:col-span-8">
            <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
              <div data-aos="fade" className="aos-init aos-animate">
                <About />
                <Carousel />
                <Resume />
                <Edu />
                <Projects
                  handleProjectClick={handleProjectClick}
                  projects={projects}
                />
                <Contact />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const projects = [
  {
    name: "OpenHanded",
    description:
      "Open Handed is a dynamic crowdfunding platform designed to connect passionate individuals, innovative projects, and potential backers in an inspiring and secure online space. Our goal was to empower entrepreneurs, artists, social activists, nonprofit organizations, and individuals to turn their creative and impactful ideas into reality through the collective power of the crowd.",
    usedTools: "NextJs, Cypress, Firebase, Next-intl",
    img: "/crawd.png",
    link: "https://team-10-roan.vercel.app/",
    linkG: "https://github.com/202303-PRM-TR-FEW/Crowdfunding-Platform-Team-10",
  },
  {
    name: "Social Media App",
    description:
      "Social media application using React.js, Node.js, and MongoDB. Build a Real-World Project with React Hooks, Context API, Functional React Components, Node.js REST API, Axios and more.",
    usedTools: "NodeJS, ReactJS, HOOKS, Context API",
    img: "/twitter.png",
    link: "https://stellar-cucurucho-92c1e4.netlify.app/",
    linkG: "https://github.com/zainab-salah/social-mui-react-project",
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
    link: "https://promptopia-next-js-full-stack.vercel.app/",
    linkG: "https://github.com/zainab-salah/Promptopia-NextJS-FullStack/",
  },
  {
    name: "Movie Clone",
    description:
      "User-friendly platform that brings the world of cinema to your screen. this website offers a Movie of the Week section, shows movies, their casts, ratings, trailers, related movies, genres, and so on.",
    usedTools: "JS, API",
    img: "/movie.png",
    link: "https://the-trio-of-feeders.netlify.app/",
    linkG: "https://github.com/zainab-salah/NextJs-movie",
  },
  {
    name: "Hangman Game",
    description:
      "Classic word-guessing game with JavaScript and Cnvas. Guess words while avoiding the hanged man's fate. ",
    usedTools: "HTML, CSS, JS, Canvas",
    img: "/hanged.png",
    link: "https://hanged-man.netlify.app/",
    linkG: "https://github.com/cerenss/hangman-game",
  },
];
