import React from "react";
import { MdOutlineSchool } from "react-icons/md";

export default function Edu() {
  return (
    <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
      <div className="pb-12">
        <h2 className="h2">Education & Certifications</h2>
        <div className=" mt-[30px] ">
          <div className="py-2 lg:py-4 pl-5 pr-3  space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-green-100">
            <div className="flex gap-5">
              <MdOutlineSchool className="text-5xl text-[#F95054] " />
              <div>
                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                  2015 - 2019
                </span>
                <h3 className="text-xl dark:text-white">
                  Bachelor in Mathematics Science
                </h3>
                <p className="dark:text-[#b7b7b7]">University of Baghdad</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
            <a href="https://www.re-coded.com/">
              <div className="py-2 lg:py-4 pl-5 pr-3  space-y-2 mb-2 rounded-lg dark:border-[#212425] dark:border-2 bg-yellow-100 hover:bg-yellow-200">
                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                  Mar 2023 - Sep 2023,
                </span>
                <h3 className="text-xl dark:text-white">
                  Recoded Frontend Bootcamp
                </h3>
                <p className="dark:text-[#b7b7b7]">
                  Html, Css, Js, ReactJS, NextJS & Jest
                </p>
              </div>
            </a>
            <a href="https://shecodestooiq.com/">
              <div className="py-2 lg:py-4 pl-5 pr-3  space-y-2 mb-2 rounded-lg dark:border-[#212425] dark:border-2 bg-pink-100 hover:bg-pink-200">
                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                  Mar 2022 - Sep 2022,
                </span>
                <h3 className="text-xl dark:text-white">
                  SheCodesToo Bootcamp
                </h3>
                <p className="dark:text-[#b7b7b7]">WordPress and softskills</p>
              </div>
            </a>
            <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">
              <div className="py-2 lg:py-4 pl-5 pr-3  space-y-2 mb-2 rounded-lg dark:border-[#212425] dark:border-2 bg-purple-100 hover:bg-purple-200">
                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                  2020
                </span>
                <h3 className="text-xl dark:text-white">
                  Web Development Bootcamp
                </h3>
                <p className="dark:text-[#b7b7b7]">
                  by Dr. Angela Yu full-stack web developer. HTML, CSS,
                  Javascript, Node, React, MongoDB and more.
                </p>
              </div>
            </a>

            <div className="py-2 lg:py-4 pl-5 pr-3  space-y-2 mb-2 rounded-lg dark:border-[#212425] dark:border-2 bg-lime-100 hover:bg-lime-200">
              <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                Jun 2021 - Sep 2021
              </span>
              <h3 className="text-xl dark:text-white">
                YANHAD FullStack Bootcamp
              </h3>
              <p className="dark:text-[#b7b7b7]">
                Frontend: (HTML, CSS, React Hooks, NextJS). Backend: (nodejs,
                TypeScript, TypeORM).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
