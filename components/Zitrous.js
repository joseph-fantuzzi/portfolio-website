import React, { useState, useEffect } from "react";
import styles from "../styles/Zitrous.module.css";
import { useRouter } from "next/router";
import Footer from "./Footer";
import ReturnHome from "./ReturnHome";
import Socials from "./Socials";
import Logo from "./Logo";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  projectFadeDown,
  projectFadeRight,
  projectFadeRightContainer,
  projectFadeDownContainer,
  projectFadeDownDelayed,
  arrowFadeDownContainer,
  arrowFadeDown,
} from "../utils/Animations";

const Zitrous = () => {
  const [isDark, setIsDark] = useState(null);

  const technologies = [
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React.js", icon: "devicon-react-original colored" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(window.localStorage.getItem("theme"));
    }
  }, []);

  const router = useRouter();

  const handleBack = () => {
    router.push("/cryptox");
  };

  const handleForward = () => {
    router.push("/archive");
  };

  return (
    <div className={isDark === "dark" ? styles.containerdark : styles.containerlight}>
      <div className={styles.zitrouscontainer}>
        <header className={styles.header}>
          <motion.div variants={projectFadeRightContainer} className={styles.titlecontainer}>
            <motion.div variants={projectFadeRight}>
              <Logo animation={false} logo={"zitrous"} />
            </motion.div>
            <motion.h1 variants={projectFadeRight} className={styles.title}>
              Zitrous
            </motion.h1>
            <motion.div variants={projectFadeRight}>
              <motion.a
                href="https://github.com/joseph-fantuzzi/code-to-image-converter"
                rel="noreferrer"
                target="_blank"
                className={isDark === "dark" ? styles.linkdark : styles.linklight}
              >
                <FiGithub fontSize={25} />
              </motion.a>
            </motion.div>
            <motion.div variants={projectFadeRight}>
              <motion.a
                href="https://zitrous.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className={isDark === "dark" ? styles.externallinkdark : styles.externallinklight}
              >
                <FiExternalLink fontSize={25} />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div variants={arrowFadeDownContainer} className={styles.arrowcontainer}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={arrowFadeDown}
              onClick={handleBack}
              className={isDark === "dark" ? styles.backdark : styles.backlight}
            >
              <BsArrowLeftShort fontSize={35} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={arrowFadeDown}
              onClick={handleForward}
              className={isDark === "dark" ? styles.forwarddark : styles.forwardlight}
            >
              <BsArrowRightShort fontSize={35} />
            </motion.div>
          </motion.div>
        </header>
        <div className={styles.linkscontainer}>
          <motion.div variants={projectFadeDownDelayed} className={styles.linkmobilecontainer}>
            <a
              href="https://github.com/joseph-fantuzzi/cryptocurrency-tracker"
              rel="noreferrer"
              target="_blank"
              className={isDark === "dark" ? styles.linkmobiledark : styles.linkmobilelight}
            >
              <FiGithub fontSize={25} />
            </a>
          </motion.div>
          <motion.div variants={projectFadeDownDelayed} className={styles.linkmobilecontainer}>
            <a
              href="https://cryptox-cryptocurrency-tracker.vercel.app/"
              rel="noreferrer"
              target="_blank"
              className={isDark === "dark" ? styles.linkmobiledark : styles.linkmobilelight}
            >
              <FiExternalLink fontSize={25} />
            </a>
          </motion.div>
        </div>
        <motion.main variants={projectFadeDownContainer} className={styles.main}>
          <motion.div variants={projectFadeDown}>
            <Image
              width={1150}
              height={821}
              src="/zitrous-img.png"
              alt="Zitrous site desktop image"
              className={styles.img}
              priority
            />
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Description</h2>
            <p className={styles.text}>
              This front-end application is an all-in-one code to styled image converter created
              using react.js, allowing users to easily add code snippets, choose between different
              background color themes, filter between different modes, add padding, and select the
              desired programming language before saving a beautiful image to share with others.
              Zitrous features a beautiful, responsive UI created using Styled Components. To help
              aid in embedding a text editor within the image, I used CodeMirror package to add a
              code editor with support for multiple languages. I also used html-to-image package to
              easily be able to download the source code image.
            </p>
          </motion.div>
          <div className={styles.section}>
            <motion.h2 variants={projectFadeDown} className={styles.h2}>
              Technologies
            </motion.h2>
            <div className={styles.techcontainer}>
              {technologies.map((tech, i) => {
                return (
                  <motion.div
                    variants={projectFadeDown}
                    className={isDark === "dark" ? styles.techdark : styles.techlight}
                    key={i}
                  >
                    <i style={{ fontSize: 35 }} className={tech.icon}></i>
                    <p className={styles.techname}>{tech.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Struggles</h2>
            <p className={styles.text}>
              During the development of this project, I struggled embedding the code editor within
              the image. I had issues with making the code editor&apos;s background completely
              transparent, so the terminal can be fully visible. Through reading tons of
              documentation, I figured out how to make it transparent. Also, I struggled with
              exporting the image as a png file. At first, I was using html-to-canvas package to
              accomplish that but for some reason the quality of the image was really poor. I
              decided to try another package, html-to-image, and that fixed the problem. Lastly, I
              struggled when implementing the title of the image. I wanted there to be some form of
              handling that allowed the title to fit within the terminal for all deivice sizes. I
              figured I could implement a maximum character count at different screen lengths using
              the matchMedia method on the window object.
            </p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>What would I change if I started over?</h2>
            <p className={styles.text}>
              I would do more research on the packages that need to be used to complete this
              project. I did not do enough research on the CodeMirror package that it led to some
              delays and confusion during development. Before I start developing, I need to do an
              ample amount of research to get a good idea on the steps I need to take to use it.
            </p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Future Plans</h2>
            <p className={styles.text}>
              I plan on implementing animations using Framer Motion&apos;s animation library. Also,
              I plan on adding support for more languages and adding different background and
              terminal colors. Also, I plan on allowing users to choose a file type when exporting
              the image. I would like to have support for PDF, JPEG, and PNG.
            </p>
          </motion.div>
          {/* <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Demo</h2>
          </motion.div> */}
        </motion.main>
      </div>
      <Footer />
      <ReturnHome />
      <Socials />
    </div>
  );
};

export default Zitrous;
