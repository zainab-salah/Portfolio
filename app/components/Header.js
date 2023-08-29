"use client";
import React from "react";
import { Navbar } from "flowbite-react";
import ThemeSw from "./ThemeSw";
export default function Header() {
  return (
    <Navbar fluid={true} rounded={true} className="bg-transparent dark:bg-transparent">
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
       Kainy
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {/* <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link> */}
        <ThemeSw />
        {/* <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
