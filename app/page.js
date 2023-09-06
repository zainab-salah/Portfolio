import React from "react";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ThemeSw from "./components/ThemeSw";
import LeftSide from "./components/LeftSide";
import Edu from "./components/Edu";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <>
      <div className="flex justify-between lg:pt-10 lg:pr-32 pt-5 pr-5">
        <div />

        <ThemeSw />
      </div>
      <section
        className="container
  min-h-screen bg-no-repeat bg-center bg-cover bg-fixed   md:pb-16 w-full
    "
      >
        <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
          <LeftSide />

          <div className="col-span-12 lg:col-span-8">
            <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
              <div data-aos="fade" className="aos-init aos-animate">
                <About />
                <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
                  <h2 className="after-effect after:left-60 left-">
                    Work With
                  </h2>

                  <Carousel />
                </section>
                <Resume />
                <Edu />
                <Projects />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
