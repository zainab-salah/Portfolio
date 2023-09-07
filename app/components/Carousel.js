"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide + 3;
    if (newSlide >= images.length) {
      newSlide = 0;
    }
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide - 3;
    if (newSlide < 0) {
      newSlide = images.length - 3;
    }
    setCurrentSlide(newSlide);
  };

  const autoMoveToNextSlide = () => {
    handleNextSlide();
  };

  useEffect(() => {
    const intervalId = setInterval(autoMoveToNextSlide, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  return (
    <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
      <h2 className="after-effect after:left-60 left-">Work With</h2>

      <div className="flex relative items-center mx-auto w-full justify-center">
        <div className="">
          <FaChevronLeft
            onClick={handlePrevSlide}
            className="absolute left-0 m-auto text-2xl inset-y-1/2 cursor-pointer text-[#F95054] z-20 transition-transform duration-300  "
          />
          <div className="w-full h-[100px] lg:h-[200px] flex overflow-hidden mx-auto transition-opacity duration-300">
            <Swipe
              onSwipeLeft={handleNextSlide}
              onSwipeRight={handlePrevSlide}
              className="z-10 w-full gap-5 lg:gap-32 h-full flex items-center xl:justify-between justify-center transition-transform duration-300"
            >
              {images.slice(currentSlide, currentSlide + 3).map((image) => {
                return (
                  <div
                    key={image.src}
                    className="text-center flex flex-col items-center rounded-lg p-2 dark:bg-slate-50 justify-center
                     transform transition-transform ease-in-out hover:scale-105"
                  >
                    <Image
                      alt={image.alt}
                      src={image}
                      priority
                      className="lg:w-[70px] transition-opacity duration-300 hover:opacity-75 "
                    />
                    {/* <p className="text-center hidden xl:block  lg:w-full dark:text-black my-3 lpy-1 lg:px-2 rounded-full  hover:bg-[#F95054] hover:text-white cursor-pointer transition-background duration-300">
                      {image.alt}
                    </p> */}
                  </div>
                );
              })}
            </Swipe>
          </div>
          <FaChevronRight
            onClick={handleNextSlide}
            className="absolute right-0 m-auto text-2xl inset-y-1/2 cursor-pointer text-[#F95054] z-20 transition-transform duration-300  "
          />

          <div className="relative justify-center p-2 lg:flex  hidden">
            {Array.from({ length: Math.ceil(images.length / 3) }).map(
              (_, index) => {
                return (
                  <div
                    className={
                      index === Math.floor(currentSlide / 3)
                        ? "h-2 w-2 bg-[#F95054] rounded-full lg:mx-2 mx-1 mb-2 cursor-pointer transition-background duration-300"
                        : "h-2 w-2 bg-gray-300 rounded-full lg:mx-2 mx-1 mb-2 cursor-pointer transition-background duration-300"
                    }
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index * 3);
                    }}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const images = [
  {
    src: "https://img.icons8.com/color/48/null/javascript--v1.png",
    alt: "JavaScript",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/officel/40/null/react.png",
    alt: "ReactJS",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/color/48/nextjs.png",
    alt: "NextJS",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/fluency/48/typescript--v2.png",
    alt: "TypeScript",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/color/48/redux.png",
    alt: "Redux",
    width: "48",
    height: "48",
  },

  {
    src: "https://img.icons8.com/color/48/null/nodejs.png",
    alt: "NodeJS",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/color/48/null/css3.png",
    alt: "CSS3",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/color/48/null/html-5--v2.png",
    alt: "HTML5",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/color/48/null/sass.png",
    alt: "Sass",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/color/48/tailwindcss.png",
    alt: "Tailwind CSS",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/color/48/null/bootstrap.png",
    alt: "Bootstrap",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/color/48/firebase.png",
    alt: "Firebase",
    width: "48",
    height: "48",
  },
  {
    src: "https://www.cypress.io/images/layouts/cypress-logo.svg",
    alt: "Cypress",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/color/48/null/mysql-logo.png",
    alt: "MySQL",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/color/48/null/mongodb.png",
    alt: "MongoDB",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/color/48/null/c-plus-plus-logo.png",
    alt: "C++",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/officel/40/null/php-logo.png",
    alt: "PHP",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/stickers/45/null/laravel.png",
    alt: "Laravel",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
    alt: "Postman",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-apache-a-free-and-open-source-cross-platform-web-server-software-logo-color-tal-revivo.png",
    alt: "Apache2",
    width: "48",
    height: "48",
  },
  {
    src: "https://img.icons8.com/ios-filled/50/000000/digitalocean.png",
    alt: "DigitalOcean",
    width: "48",
    height: "48",
  },
];
