import React from "react";
import user from "../../public/user.jpg";
import download from "../../public/download.png";
import Image from "next/image";
import { LeftSide } from "./LeftSide";
import About from "./About";
import DetailsCard from "./DetailsCard";
import Resume from "./Resume";
import Footer from "./Footer";
 
export default function Main() {
  return (
    <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
      <LeftSide />

      <div className="col-span-12 lg:col-span-8">


        <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
          <div data-aos="fade" className="aos-init aos-animate">
            <About />
            <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
              <h3 className="text-[35px] dark:text-white font-medium pb-5">
                What I do!
              </h3>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
                <DetailsCard />
                <DetailsCard />
           
              </div>
            </section>
            <Resume />
          </div>
        <Footer />
        </div>
      </div>
    </div>
  );
}
