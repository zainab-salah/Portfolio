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
                <span className="text-tiny text-gray-lite dark:text-[#6a6a6a]">
                  2015 - 2019
                </span>
                <h3 className="text-xl dark:text-[#F95054]">
                  Bachelor in Mathematics Science
                </h3>
                <p className="dark:text-[#504848]">University of Baghdad</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
            {courses.map((course, index) => (
              <a key={index} href={course.href}>
                <div
                  className={`py-2 lg:py-4 pl-5 pr-3 space-y-2 mb-2 rounded-lg dark:border-[#212425] ${course.borderColor} dark:bg-transparent dark:border-2 ${course.bgColor}`}
                >
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    {course.date}
                  </span>
                  <h3 className="text-xl dark:text-white">{course.title}</h3>
                  <p className="dark:text-[#b7b7b7]">{course.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const courses = [
  {
    href: "https://www.re-coded.com/",
    date: "Mar 2023 - Sep 2023",
    title: "Recoded Frontend Bootcamp",
    description: "Html, Css, Js, ReactJS, NextJS & Jest",
    bgColor: "bg-yellow-100 hover:bg-yellow-200",
    borderColor: "dark:border-yellow-100 ",
  },
  {
    href: "https://shecodestooiq.com/",
    date: "Mar 2022 - Sep 2022",
    title: "SheCodesToo Bootcamp",
    description: "WordPress and Soft Skills",
    bgColor: "bg-pink-100 hover:bg-pink-200",
    borderColor: "dark:border-pink-100 ",
  },
  {
    href: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    date: "2020",
    title: "Web Development Bootcamp",
    description:
      "by Dr. Angela Yu fullStack web developer. HTML, CSS, Javascript, Node, React, MongoDB and more.",
    bgColor: "bg-purple-100 hover:bg-purple-200",
    borderColor: "dark:border-purple-100 ",
  },
  {
    date: "Jun 2021 - Sep 2021",
    title: "YANHAD FullStack Bootcamp",
    description:
      "Frontend: (HTML, CSS, React Hooks, NextJS). Backend: (nodejs, TypeScript, TypeORM).",
    bgColor: "bg-lime-100 hover:bg-lime-200",
    borderColor: "dark:border-lime-100 ",
  },
];
