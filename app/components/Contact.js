"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [submitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formData.user_name || !formData.user_email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_be19o4q",
        "template_ugjexyn",
        e.target,
        "qbzCscHPmmGcVYXxn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitting(false);
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
          toast.error("Error sending email.");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">

      <div data-aos="fade" className="aos-init aos-animate">
        <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
          <div className="pt-12">
            <h2 className="after-effect after:left-48 mt-12 lg:mt-0 mb-12 md:mb-[30px]">
              Contact
            </h2>
            <div className="grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-[40px] grid gap-x-5 gap-y-7">
              <div className="flex flex-wrap dark:bg-transparent dark:border-green-500 dark:border-2 p-[30px] border-[#A6A6A6] gap-2 rounded-xl bg-[#FCF4FF]">
                <span className="w-8 mt-2"></span>
                <div className="space-y-2">
                  <p className="text-xl font-semibold dark:text-white">
                    Phone :
                  </p>
                  <p>
                    <a
                      href="tel:+90 (552) 150 06 92"
                      className="text-gray-lite text-lg dark:text-[#fff] "
                    >
                      +90 (552) 150 06 92
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap dark:bg-transparent dark:border-pink-500 dark:border-2 p-[30px] border-[#A6A6A6] gap-2 rounded-xl bg-[#EEFBFF]">
                <span className="w-8 mt-2"></span>
                <div className="space-y-2">
                  <p className="text-xl font-semibold dark:text-white">
                    Email :
                  </p>

                  <p>
                    <a
                      href="mailto: zainab.salah.m@outlook.com"
                      className="text-gray-lite text-lg dark:text-[#fff] "
                    >
                      zainab.salah.m@outlook.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="  dark:border-[#5dbcdc] dark:border-2 mb-16   md:p-[48px]  p-4   bg-color-810 rounded-xl dark:bg-[#111111]  md:mb-[60px]">
              <h3 className="text-3xl ">
                <span className="text-gray-lite dark:text-[#fff] ">
                  I&apos;m always open to discuss about projects!
                </span>
              </h3>
              <form onSubmit={sendEmail}>
                <div className="relative z-0 w-full mt-[40px] mb-8 group">
                  <input
                    value={formData.user_name}
                    onChange={handleChange}
                    type="text"
                    name="user_name"
                    className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                    placeholder=" "
                    required=""
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Name *
                  </label>
                </div>
                <div className="relative z-0 w-full mb-8 group">
                  <input
                    type="email"
                    value={formData.user_email}
                    onChange={handleChange}
                    name="user_email"
                    className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                    placeholder=" "
                    id="user_email"
                    required=""
                  />
                  <label
                    htmlFor="user_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Email *
                  </label>
                </div>
                <div className="relative z-0 w-full mb-8 group">
                  <input
                    type="text"
                    name="message"
                    className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                    placeholder=" "
                    id="message"
                    required=""
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Message *
                  </label>
                </div>
                <div className="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3">
                  <button
                    disabled={submitting}
                    type="submit"
                    className="transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white dark:text-white"
                  >
                    {submitting ? `Submitting...` : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
