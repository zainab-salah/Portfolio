"use client";
import { ThemeProvider } from "next-themes";

import "aos/dist/aos.css";

function Providers({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default Providers;
