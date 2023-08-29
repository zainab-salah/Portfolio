import React from "react";

export default function Contact() {
  return (
    <div class="lg:rounded-2xl bg-white dark:bg-[#111111]">
      <div data-aos="fade" class="aos-init aos-animate">
        <div class="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
          <div class="pt-12">
            <h2 class="after-effect after:left-48 mt-12 lg:mt-0 mb-12 md:mb-[30px]">
              Contact
            </h2>
            <div class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-[40px] grid gap-x-5 gap-y-7">
              <div
                class="flex flex-wrap dark:bg-transparent p-[30px] border-[#A6A6A6] gap-2 rounded-xl "
                style="background: rgb(252, 244, 255);"
              >
                <span class="w-8 mt-2">
                  <img
                    alt="icon"
                    srcset="/_next/image?url=%2Fimages%2Fcontact%2Fphone-call%201.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcontact%2Fphone-call%201.png&amp;w=64&amp;q=75 2x"
                    src="/_next/image?url=%2Fimages%2Fcontact%2Fphone-call%201.png&amp;w=64&amp;q=75"
                    width="30"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    class="text-4xl dark:text-white"
                    loading="lazy"
                    style=""
                  />
                </span>
                <div class="space-y-2">
                  <p class="text-xl font-semibold dark:text-white">Phone :</p>
                  <p>
                    <a
                      href="tel:+452 666 386"
                      class="text-gray-lite text-lg dark:text-[#A6A6A6] "
                    >
                      +452 666 386
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+654 764 878"
                      class="text-gray-lite text-lg dark:text-[#A6A6A6] "
                    >
                      +654 764 878
                    </a>
                  </p>
                </div>
              </div>
              <div
                class="flex flex-wrap dark:bg-transparent p-[30px] border-[#A6A6A6] gap-2 rounded-xl "
                style="background: rgb(238, 251, 255);"
              >
                <span class="w-8 mt-2">
                  <img
                    alt="icon"
                    srcset="/_next/image?url=%2Fimages%2Fcontact%2Femail%201.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcontact%2Femail%201.png&amp;w=64&amp;q=75 2x"
                    src="/_next/image?url=%2Fimages%2Fcontact%2Femail%201.png&amp;w=64&amp;q=75"
                    width="30"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    class="text-4xl dark:text-white"
                    loading="lazy"
                    style=""
                  />
                </span>
                <div class="space-y-2">
                  <p class="text-xl font-semibold dark:text-white">Email :</p>
                  <p>
                    <a
                      href="mailto:ibthemes21@gmail.com"
                      class="text-gray-lite text-lg dark:text-[#A6A6A6] "
                    >
                      ibthemes@gmail.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:xyz@abc.com"
                      class="text-gray-lite text-lg dark:text-[#A6A6A6] "
                    >
                      mailto:xyz@abc.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="  dark:border-[#212425] dark:border-2 mb-16  md:p-[48px]  p-4   bg-color-810 rounded-xl dark:bg-[#111111]  md:mb-[60px]">
              <h3 class="text-4xl ">
                <span class="text-gray-lite dark:text-[#A6A6A6] ">
                  I'm always open to discussing product
                </span>
                <br />
                <span class="font-semibold dark:text-white">
                  design work or partnerships.
                </span>
              </h3>
              <form id="myForm">
                <div class="relative z-0 w-full mt-[40px] mb-8 group">
                  <input
                    type="text"
                    name="name"
                    class="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                    placeholder=" "
                    required=""
                  />
                  <label
                    for="name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Name *
                  </label>
                </div>
                <div class="relative z-0 w-full mb-8 group">
                  <input
                    type="email"
                    name="user_email"
                    class="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                    placeholder=" "
                    id="user_email"
                    required=""
                  />
                  <label
                    for="user_email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Email *
                  </label>
                </div>
                <div class="relative z-0 w-full mb-8 group">
                  <input
                    type="text"
                    name="message"
                    class="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                    placeholder=" "
                    id="message"
                    required=""
                  />
                  <label
                    for="message"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Message *
                  </label>
                </div>
                <div class="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3">
                  <input
                    type="submit"
                    class=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white dark:text-white "
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer class="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black">
        <div class="container">
          <p class="text-center py-6 text-gray-lite dark:text-color-910 ">
            © 2023 All Rights Reserved by{" "}
            <a
              class="hover:text-[#FA5252] duration-300 transition"
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noopener noreferrer"
            >
              ib-themes
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
