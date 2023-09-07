"use client";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import Loading from "./loading";


function Providers({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return <ThemeProvider attribute="class">
       {isLoading && <Loading />}{children}</ThemeProvider>;
}

export default Providers;
