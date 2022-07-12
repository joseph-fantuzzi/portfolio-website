import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Skills.module.css";
import { HiOutlinePencil } from "react-icons/hi";
import { motion, useAnimation, useInView } from "framer-motion";
import { scrollRevealFadeUp, initialScrollRevealFadeUp } from "./Animations";

const Skills = ({ dark }) => {
  const [increaseIcon, setIncreaseIcon] = useState(false);

  const skillsContainer = useRef(null);
  const isInView = useInView(skillsContainer);
  const animationControl = useAnimation();
  isInView ? animationControl.start(scrollRevealFadeUp) : "";

  const fontSize = increaseIcon ? 45 : 30;

  function checkMatch() {
    const x = window.matchMedia("(min-width: 600px)");
    if (!x.matches) {
      setIncreaseIcon(false);
    } else {
      setIncreaseIcon(true);
    }
  }

  useEffect(() => {
    checkMatch();
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      checkMatch();
    });
  }

  return (
    <motion.div
      id="skills"
      className={styles.container}
      initial={initialScrollRevealFadeUp}
      animate={animationControl}
      ref={skillsContainer}
    >
      <div className={styles.intro}>
        <div className={dark ? styles.icondark : styles.iconlight}>
          <HiOutlinePencil size={50} />
        </div>
        <h1 className={dark ? styles.titledark : styles.titlelight}>
          <span className={dark ? styles.numberdark : styles.numberlight}>02.</span>My Skills
        </h1>
      </div>
      <div className={styles.skills}>
        <div className={styles.frontandback}>
          <div>
            <p className={styles.text}>Frontend</p>
            <div className={dark ? styles.frontenddark : styles.frontendlight}>
              <div className={styles.toprow}>
                <i style={{ fontSize }} className="devicon-html5-plain colored"></i>
                <i style={{ fontSize }} className="devicon-css3-plain colored"></i>
                <i style={{ fontSize }} className="devicon-javascript-plain colored"></i>
                <i style={{ fontSize }} className="devicon-typescript-plain colored"></i>
              </div>
              <div className={styles.bottomrow}>
                <i style={{ fontSize }} className="devicon-react-original colored"></i>
                <i style={{ fontSize }} className="devicon-redux-original colored"></i>
                <i style={{ fontSize }} className="devicon-nextjs-original"></i>
                <i style={{ fontSize }} className="devicon-tailwindcss-plain colored"></i>
              </div>
            </div>
          </div>
          <div>
            <p className={styles.text}>Backend</p>
            <div className={dark ? styles.backenddark : styles.backendlight}>
              <div className={styles.backtoprow}>
                <i style={{ fontSize }} className="devicon-nodejs-plain colored"></i>
                <i style={{ fontSize }} className="devicon-express-original"></i>
              </div>
              <div className={styles.backbottomrow}>
                <i style={{ fontSize }} className="devicon-postgresql-plain colored"></i>
                <i style={{ fontSize }} className="devicon-heroku-plain colored"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.otherskillcontainer}>
          <p className={styles.othertext}>Other</p>
          <div className={dark ? styles.otherdark : styles.otherlight}>
            <i style={{ fontSize }} className="devicon-jest-plain colored"></i>
            <i style={{ fontSize }} className="devicon-git-plain colored"></i>
            <i style={{ fontSize }} className="devicon-github-original"></i>
            <i style={{ fontSize }} className="devicon-figma-plain colored"></i>
            <i style={{ fontSize }} className="devicon-google-plain colored"></i>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
