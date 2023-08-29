import React from "react";
import user from "../../public/user.jpg";
import download from "../../public/download.png";
import Image from "next/image";
export default function Main() {
  return (
    <div class="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
      <div class="col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44">
        <div class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
          <Image
            alt="avatar"
            src={user}
            width={240}
            height={240}
            class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
          />
          <div class="pt-[100px] pb-8">
            <h1 class="mt-6 mb-1 text-5xl font-semibold dark:text-white">
           Zai
            </h1>
            <h3 class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6] ">
              Ui/Ux Designer
            </h3>
            <div class="flex justify-center space-x-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="socialbtn text-[#1773EA]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 320 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </span>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="socialbtn text-[#1C9CEA]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </span>
              </a>
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="socialbtn text-[#e14a84]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                  </svg>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="socialbtn text-[#0072b1]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
              <div class="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                <span class="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 320 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                  </svg>
                </span>
                <div class="text-left ml-2.5">
                  <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Phone
                  </p>
                  <p class="dark:text-white break-all">
                    <a
                      class="hover:text-[#FA5252] duration-300 transition"
                      href="tel:+1234567890"
                    >
                      +123 456 7890
                    </a>
                  </p>
                </div>
              </div>
              <div class="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                <span class="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#6AB5B9]  shadow-md">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 384 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                </span>
                <div class="text-left ml-2.5">
                  <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Location
                  </p>
                  <p class="dark:text-white break-all">Hong kong china</p>
                </div>
              </div>
              <div class="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                <span class="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
                  </svg>
                </span>
                <div class="text-left ml-2.5">
                  <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Email
                  </p>
                  <p class="dark:text-white break-all">
                    {" "}
                    <a
                      class="hover:text-[#FA5252] duration-300 transition"
                      href="mailto:ibthemes21@gmail.com"
                    >
                      example@mail.com
                    </a>
                  </p>
                </div>
              </div>
              <div class="flex py-2.5 undefined">
                <span class="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </span>
                <div class="text-left ml-2.5">
                  <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Birthday
                  </p>
                  <p class="dark:text-white break-all">May 27, 1990</p>
                </div>
              </div>
            </div>
            <a
              href="https://bostami-nextjs.netlify.app/images/download.png"
              download=""
              class="inline-flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l  px-8 py-3 text-lg text-white rounded-[35px] mt-6"
            >
              <Image src={download} alt="icon" class="mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <header class="lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111] ">
          <nav class="hidden lg:block">
            <ul class="flex ">
              <a
                class="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]  
                  justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]
                   lg:text-white lg:dark:text-white   lg:bg-gradient-to-r   "
                href="/home-box-layout/home"
              >
                <span class="text-xl mb-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                  </svg>
                </span>
                Home
              </a>
              <a
                class="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
                href="/home-box-layout/resume"
              >
                <span class="text-xl mb-1">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                Resume
              </a>
              <a
                class="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
                href="/home-box-layout/works"
              >
                <span class="text-xl mb-1">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </span>
                Works
              </a>
              <a
                class="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
                href="/home-box-layout/blogs"
              >
                <span class="text-xl mb-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M162.4 196c4.8-4.9 6.2-5.1 36.4-5.1 27.2 0 28.1.1 32.1 2.1 5.8 2.9 8.3 7 8.3 13.6 0 5.9-2.4 10-7.6 13.4-2.8 1.8-4.5 1.9-31.1 2.1-16.4.1-29.5-.2-31.5-.8-10.3-2.9-14.1-17.7-6.6-25.3zm61.4 94.5c-53.9 0-55.8.2-60.2 4.1-3.5 3.1-5.7 9.4-5.1 13.9.7 4.7 4.8 10.1 9.2 12 2.2 1 14.1 1.7 56.3 1.2l47.9-.6 9.2-1.5c9-5.1 10.5-17.4 3.1-24.4-5.3-4.7-5-4.7-60.4-4.7zm223.4 130.1c-3.5 28.4-23 50.4-51.1 57.5-7.2 1.8-9.7 1.9-172.9 1.8-157.8 0-165.9-.1-172-1.8-8.4-2.2-15.6-5.5-22.3-10-5.6-3.8-13.9-11.8-17-16.4-3.8-5.6-8.2-15.3-10-22C.1 423 0 420.3 0 256.3 0 93.2 0 89.7 1.8 82.6 8.1 57.9 27.7 39 53 33.4c7.3-1.6 332.1-1.9 340-.3 21.2 4.3 37.9 17.1 47.6 36.4 7.7 15.3 7-1.5 7.3 180.6.2 115.8 0 164.5-.7 170.5zm-85.4-185.2c-1.1-5-4.2-9.6-7.7-11.5-1.1-.6-8-1.3-15.5-1.7-12.4-.6-13.8-.8-17.8-3.1-6.2-3.6-7.9-7.6-8-18.3 0-20.4-8.5-39.4-25.3-56.5-12-12.2-25.3-20.5-40.6-25.1-3.6-1.1-11.8-1.5-39.2-1.8-42.9-.5-52.5.4-67.1 6.2-27 10.7-46.3 33.4-53.4 62.4-1.3 5.4-1.6 14.2-1.9 64.3-.4 62.8 0 72.1 4 84.5 9.7 30.7 37.1 53.4 64.6 58.4 9.2 1.7 122.2 2.1 133.7.5 20.1-2.7 35.9-10.8 50.7-25.9 10.7-10.9 17.4-22.8 21.8-38.5 3.2-10.9 2.9-88.4 1.7-93.9z"></path>
                  </svg>
                </span>
                Blogs
              </a>
              <a
                class="w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
                href="/home-box-layout/contact"
              >
                <span class="text-xl mb-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"></path>
                    </g>
                  </svg>
                </span>
                Contact
              </a>
            </ul>
          </nav>
        </header>
        <div class="lg:rounded-2xl bg-white dark:bg-[#111111]">
          <div data-aos="fade" class="aos-init aos-animate">
            <div class="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
              <h2 class="after-effect after:left-52">About Me</h2>
              <div class="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                <div class="col-span-12 space-y-2.5">
                  <div class="lg:mr-16">
                    <p class="text-gray-lite dark:text-color-910 leading-7">
                      I'm Creative Director and UI/UX Designer from Sydney,
                      Australia, working in web development and print media. I
                      enjoy turning complex problems into simple, beautiful and
                      intuitive designs.
                    </p>
                    <p class="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                      My aim is to bring across your message and identity in the
                      most creative way. I created web design for many famous
                      brand companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <section class="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
              <h3 class="text-[35px] dark:text-white font-medium pb-5">
                What I do!
              </h3>
              <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
                <div
                  class="about-box dark:bg-transparent bg-[#FCF4FF]"
    
                >
                  <Image
                    alt="icon"
                    
                    src="/images/icons/icon-1.svg"
                    width="40"
                    height="40"
                    
                   
                    class="w-10 h-10 object-contain block"
                  
                  />
                  <div class="space-y-2 break-all">
                    <h3 class="dark:text-white text-xl font-semibold">
                      Ui/Ux Design
                    </h3>
                    <p class=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod volutpat.
                    </p>
                  </div>
                </div>
                <div
                  class="about-box dark:bg-transparent bg-[#FEFAF0]"
              
                >
                  <Image
                    alt="icon"
                    srcset="/images/icons/icon-2.svg 1x, /images/icons/icon-2.svg 2x"
                    src="/images/icons/icon-2.svg"
                    width="40"
                    height="40"
                    
                   
                    class="w-10 h-10 object-contain block"
                  
                  />
                  <div class="space-y-2 break-all">
                    <h3 class="dark:text-white text-xl font-semibold">
                      App Development
                    </h3>
                    <p class=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod volutpat.
                    </p>
                  </div>
                </div>
                <div
                  class="about-box dark:bg-transparent bg-[#FEFAF0]"
             
                >
                  <Image
                    alt="icon"
                    srcset="/images/icons/icon-3.svg 1x, /images/icons/icon-3.svg 2x"
                    src="/images/icons/icon-3.svg"
                    width="40"
                    height="40"
                    
                   
                    class="w-10 h-10 object-contain block"
                  
                  />
                  <div class="space-y-2 break-all">
                    <h3 class="dark:text-white text-xl font-semibold">
                      Photography
                    </h3>
                    <p class=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod volutpat.
                    </p>
                  </div>
                </div>
                <div
                  class="about-box dark:bg-transparent bg-[#FFF4F4]"
                  
                >
                  <Image
                    alt="icon"
                    srcset="/images/icons/icon-4.svg 1x, /images/icons/icon-4.svg 2x"
                    src="/images/icons/icon-4.svg"
                    width="40"
                    height="40"
                    
                   
                    class="w-10 h-10 object-contain block"
                  
                  />
                  <div class="space-y-2 break-all">
                    <h3 class="dark:text-white text-xl font-semibold">
                      Photography
                    </h3>
                    <p class=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod volutpat.
                    </p>
                  </div>
                </div>
                <div
                  class="about-box dark:bg-transparent bg-[#FFF0F8]"
           
                >
                  <Image
                    alt="icon"
                    srcset="/images/icons/icon-5.svg 1x, /images/icons/icon-5.svg 2x"
                    src="/images/icons/icon-5.svg"
                    width="40"
                    height="40"
                    
                   
                    class="w-10 h-10 object-contain block"
                  
                  />
                  <div class="space-y-2 break-all">
                    <h3 class="dark:text-white text-xl font-semibold">
                      Managment
                    </h3>
                    <p class=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod volutpat.
                    </p>
                  </div>
                </div>
                <div
                  class="about-box dark:bg-transparent bg-[#F3FAFF]"
       
                >
                  <Image
                    alt="icon"
                    srcset="/images/icons/icon-6.svg 1x, /images/icons/icon-6.svg 2x"
                    src="/images/icons/icon-6.svg"
                    width="40"
                    height="40"
                    
                   
                    class="w-10 h-10 object-contain block"
                  
                  />
                  <div class="space-y-2 break-all">
                    <h3 class="dark:text-white text-xl font-semibold">
                      Web Development
                    </h3>
                    <p class=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod volutpat.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
