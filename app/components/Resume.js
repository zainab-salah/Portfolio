import React from "react";
import Skilles from "./Skilles";
import Exp from "./Exp";
import Work from "./Work";

export default function Resume() {
  return (
    <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
      <div data-aos="fade" className="aos-init aos-animate">
        <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
          <div className="py-12">
            <h2 className="after-effect after:left-44">Resume</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-6xl text-[#F95054]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"></path>
                    </svg>
                  </div>
                  <h4 className="text-5xl dark:text-white font-medium">
                    Education
                  </h4>
                </div>
                <Exp />
                <Exp />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-6xl text-[#F95054]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
                    </svg>
                  </div>
                  <h4 className="text-5xl dark:text-white font-medium">
                    Experience
                  </h4>
                </div>
                <Work />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
