import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div data-aos="fade" className="aos-init aos-animate">
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

      <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
        <h3 className="text-[35px] dark:text-white font-medium pb-5">
          What I do!
        </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
          <div className="about-box dark:bg-transparent bg-[#FCF4FF]">
            <Image
              alt="icon"
              src="/images/icons/icon-1.svg"
              width="40"
              height="40"
              className="w-10 h-10 object-contain block"
            />
            <div className="space-y-2 break-all">
              <h3 className="dark:text-white text-xl font-semibold">
                Ui/Ux Design
              </h3>
              <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="about-box dark:bg-transparent bg-[#FEFAF0]">
            <Image
              alt="icon"
              srcset="/images/icons/icon-2.svg 1x, /images/icons/icon-2.svg 2x"
              src="/images/icons/icon-2.svg"
              width="40"
              height="40"
              className="w-10 h-10 object-contain block"
            />
            <div className="space-y-2 break-all">
              <h3 className="dark:text-white text-xl font-semibold">
                App Development
              </h3>
              <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="about-box dark:bg-transparent bg-[#FEFAF0]">
            <Image
              alt="icon"
              srcset="/images/icons/icon-3.svg 1x, /images/icons/icon-3.svg 2x"
              src="/images/icons/icon-3.svg"
              width="40"
              height="40"
              className="w-10 h-10 object-contain block"
            />
            <div className="space-y-2 break-all">
              <h3 className="dark:text-white text-xl font-semibold">
                Photography
              </h3>
              <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="about-box dark:bg-transparent bg-[#FFF4F4]">
            <Image
              alt="icon"
              srcset="/images/icons/icon-4.svg 1x, /images/icons/icon-4.svg 2x"
              src="/images/icons/icon-4.svg"
              width="40"
              height="40"
              className="w-10 h-10 object-contain block"
            />
            <div className="space-y-2 break-all">
              <h3 className="dark:text-white text-xl font-semibold">
                Photography
              </h3>
              <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="about-box dark:bg-transparent bg-[#FFF0F8]">
            <Image
              alt="icon"
              srcset="/images/icons/icon-5.svg 1x, /images/icons/icon-5.svg 2x"
              src="/images/icons/icon-5.svg"
              width="40"
              height="40"
              className="w-10 h-10 object-contain block"
            />
            <div className="space-y-2 break-all">
              <h3 className="dark:text-white text-xl font-semibold">
                Managment
              </h3>
              <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="about-box dark:bg-transparent bg-[#F3FAFF]">
            <Image
              alt="icon"
              srcset="/images/icons/icon-6.svg 1x, /images/icons/icon-6.svg 2x"
              src="/images/icons/icon-6.svg"
              width="40"
              height="40"
              className="w-10 h-10 object-contain block"
            />
            <div className="space-y-2 break-all">
              <h3 className="dark:text-white text-xl font-semibold">
                Web Development
              </h3>
              <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
