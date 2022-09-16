import React, { useState, useEffect } from "react";
import styles from "../styles/Zitrous.module.css";
import { useRouter } from "next/router";
import Footer from "./Footer";
import ReturnHome from "./ReturnHome";
import Socials from "./Socials";
import Logo from "./Logo";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { TbArrowBackUp } from "react-icons/tb";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  projectFadeDown,
  projectFadeRight,
  projectFadeRightContainer,
  projectFadeDownContainer,
  projectFadeDownDelayed,
} from "../utils/Animations";

const Zitrous = () => {
  const [isDark, setIsDark] = useState(null);

  const technologies = [
    { name: "JS", icon: "devicon-javascript-plain colored" },
    { name: "React.js", icon: "devicon-react-original colored" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(window.localStorage.getItem("theme"));
    }
  }, []);

  const router = useRouter();

  const handleBack = () => {
    router.push("/");
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
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={projectFadeDown}
            onClick={handleBack}
            className={isDark === "dark" ? styles.backdark : styles.backlight}
          >
            <TbArrowBackUp fontSize={35} />
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
              using react, allowing users to easily add code snippets, choose between different
              background color themes, filter between different modes, add padding, and select the
              desired programming language before saving a beautiful image to share with others.
            </p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Technologies</h2>
            <div className={styles.techcontainer}>
              {technologies.map((tech, i) => {
                return (
                  <div className={styles.tech} key={i}>
                    <i style={{ fontSize: 35 }} className={tech.icon}></i>
                    <p className={styles.techname}>{tech.name}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Struggles</h2>
            <p className={styles.text}></p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>What would I change if I started over?</h2>
            <p className={styles.text}></p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Future Plans</h2>
            <p className={styles.text}></p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Demo</h2>
          </motion.div>
        </motion.main>
      </div>
      <Footer />
      <ReturnHome />
      <Socials />
    </div>
  );
};

export default Zitrous;
