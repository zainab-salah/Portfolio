import React from "react";

import Work from "./Edu";

export default function Resume() {
  return (
 
        <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
          <div className="pb-12">
            <h2 className="after-effect after:left-64 left-">Experience</h2>
            <div className=" mt-[30px]">
              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-blue-100 dark:bg-transparent dark:border-2 bg-blue-100">
                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                  2022-on going
                </span>
                <h3 className="text-lg dark:text-white font-bold">
                  Frontend Developer |3Q Digital
                </h3>
                <ul className="dark:text-[#b7b7b7] list-disc px-2 ">
                  <li className="">
                    Developed functional applications using Next js, ensuring
                    functions visually appealing and user friendly.
                  </li>
                  <li>
                    Successfully integrated applications with a specialized CRM
                    for customer management.
                  </li>
                  <li>
                    Developed websites, implemented server setups, performed
                    debugging, and improved SEO performance across 50+ pages.
                  </li>
                </ul>
              </div>

              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-red-100 dark:bg-transparent dark:border-2 bg-red-100">
                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                  Feb 2021 - Dec 2022,
                </span>
                <h3 className="text-lg dark:text-white font-bold">
                  Full-Stack | Noor Al-Awab
                </h3>
                <ul className="dark:text-[#b7b7b7] list-disc px-2 ">
                  <li className="">
                    Created & maintained Full-Stack E-Commerce using PHP,
                    Laravel, MySQL, and Bootstrap.
                  </li>
                  <li>Deployed site by setup Linux server setup.</li>
                </ul>
              </div>
            
            </div>
          </div>
        </div>
  
    
  );
}
