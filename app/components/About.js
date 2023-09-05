import React from "react";

export default function About() {
  return (
    <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <h2 className="after-effect after:left-52">About Me</h2>
      <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
        <div className="col-span-12 space-y-2.5">
          <div className="lg:mr-16">
            <p className="text-gray-lite dark:text-color-910 leading-7">
              A passionate frontend developer originally from Iraq and currently
              based in Turkey. I hold a bachelor&apos;s degree in Mathematics,
              which has equipped me with a strong foundation for problem-solving
              and analytical thinking.
            </p>
            <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              I&apos;m passionate about creating user-friendly web interfaces
              and enjoy collaborating with teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
