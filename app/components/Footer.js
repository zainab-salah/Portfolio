import React from "react";

export default function Footer() {
  return (
    <footer className="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black">
      <div className="container">
        <p className="text-center py-6 text-gray-lite dark:text-color-910 ">
          © 2023 
          <a
            className="hover:text-[#FA5252] duration-300 transition mx-2"
            href="https://github.com/zainab-salah"
          >
            Zainab Salah
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
