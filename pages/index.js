import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import Navigation from "../components/Navigation";
import Socials from "../components/Socials";
import LogoAnimation from "../components/LogoAnimation";

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  const [dark, setDark] = useState(false);
  const [showLogoAnimation, setShowLogoAnimation] = useState(false);

  useEffect(() => {
    setShowLogoAnimation(true);
  }, []);

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
      </Head>
      {showLogoAnimation ? (
        <LogoAnimation setShowLogoAnimation={setShowLogoAnimation} />
      ) : (
        <>
          <Navbar setMobileNav={setMobileNav} setShowLogoAnimation={setShowLogoAnimation} />
          <MobileNav
            mobileNav={mobileNav}
            setMobileNav={setMobileNav}
            dark={dark}
            setDark={setDark}
          />
          <Main dark={dark} setDark={setDark} />
          <About dark={dark} />
          <Skills dark={dark} />
          <Work />
          <Contact />
          <Footer />
          <Navigation dark={dark} />
          <Socials dark={dark} />
        </>
      )}
    </div>
  );
}
