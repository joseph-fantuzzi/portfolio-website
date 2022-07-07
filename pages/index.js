import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import Navigation from "../components/Navigation";

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem("theme")) {
      window.localStorage.setItem("theme", "light");
    } else if (window.localStorage.getItem("theme") === "dark") {
      setDark(true);
    }
  }, [dark]);

  return (
    <div className={dark ? "bgdark" : "bglight"}>
      <Head>
        <title>Joseph Fantuzzi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content="Generated by create next app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Navbar setMobileNav={setMobileNav} />
      <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} dark={dark} setDark={setDark} />
      <Main dark={dark} setDark={setDark} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Navigation />
    </div>
  );
}
