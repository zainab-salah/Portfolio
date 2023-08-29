"use client";
import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Providers({ children }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []);

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default Providers;
