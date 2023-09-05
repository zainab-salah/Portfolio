import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
      <div className="pb-12">
        <h2 className="after-effect  left-">Projects</h2>
      
          <div className=" mt-[30px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
            <a href="https://www.re-coded.com/">
              <div className="py-2 lg:py-4 pl-5 pr-3  space-y-2 mb-2 rounded-lg dark:border-[#212425] dark:border-2 bg-yellow-100 hover:bg-yellow-200">
                <Image src="" />
              </div>
            </a>
        
          </div>
       
      </div>
    </div>
  );
};

export default Projects;
