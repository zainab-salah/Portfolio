import Image from "next/image";
import React from "react";
import DetailsCard from "./DetailsCard";
import Resume from "./Resume";

export default function About() {
  return (
    <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <h2 className="after-effect after:left-52">About Me</h2>
      <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
        <div className="col-span-12 space-y-2.5">
          <div className="lg:mr-16">
            <p className="text-gray-lite dark:text-color-910 leading-7">
              I'm Creative Director and UI/UX Designer from Sydney, Australia,
              working in web development and print media. I enjoy turning
              complex problems into simple, beautiful and intuitive designs.
            </p>
            <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              My aim is to bring across your message and identity in the most
              creative way. I created web design for many famous brand
              companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
