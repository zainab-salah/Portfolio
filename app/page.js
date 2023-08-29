import React from "react";
import Header from "./components/Header";
import Image from "next/image";

import Main from "./components/Main";
export default function Home() {
  return (
    <section
      className="container
  min-h-screen bg-no-repeat bg-center bg-cover bg-fixed   md:pb-16 w-full
    "
    >
      <Header />
     <Main />
    </section>
  );
}
