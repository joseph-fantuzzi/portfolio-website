import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  const [dark, setDark] = useLocalStorage("dark", false);

  return (
    <div>
      <Head>
        <title>Joseph Fantuzzi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar setMobileNav={setMobileNav} />
      <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} dark={dark} setDark={setDark} />
      <Main dark={dark} setDark={setDark} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
