import React, { useRef } from "react";
import styles from "../styles/Skills.module.css";
import { HiOutlinePencil } from "react-icons/hi";
import { motion, useAnimation, useInView } from "framer-motion";
import { scrollRevealFadeUp, initialScrollRevealFadeUp } from "./Animations";

const Skills = ({ dark }) => {
  const skillsContainer = useRef(null);
  const isInView = useInView(skillsContainer);
  const animationControl = useAnimation();

  isInView ? animationControl.start(scrollRevealFadeUp) : "";

  const fontSize = 30;

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
      <div className={styles.frontend}>
        <p>Frontend Development</p>
        <i style={{ fontSize }} className="devicon-html5-plain colored"></i>
        <i style={{ fontSize }} className="devicon-css3-plain colored"></i>
        <i style={{ fontSize }} className="devicon-javascript-plain colored"></i>
        <i style={{ fontSize }} className="devicon-typescript-plain colored"></i>
        <i style={{ fontSize }} className="devicon-react-original colored"></i>
        <i style={{ fontSize }} className="devicon-redux-original colored"></i>
        <i style={{ fontSize }} className="devicon-nextjs-original colored"></i>
        <i style={{ fontSize }} className="devicon-tailwindcss-plain colored"></i>
      </div>
      <div className={styles.backend}>
        <p>Backend Development</p>
        <i style={{ fontSize }} className="devicon-nodejs-plain colored"></i>
        <i style={{ fontSize }} className="devicon-express-original colored"></i>
        <i style={{ fontSize }} className="devicon-postgresql-plain colored"></i>
        <i style={{ fontSize }} className="devicon-heroku-plain colored"></i>
      </div>
      <div className={styles.other}>
        <p>Other Skills</p>
        <i style={{ fontSize }} className="devicon-jest-plain colored"></i>
        <i style={{ fontSize }} className="devicon-git-plain colored"></i>
        <i style={{ fontSize }} className="devicon-github-original colored"></i>
        <i style={{ fontSize }} className="devicon-npm-original-wordmark colored"></i>
        <i style={{ fontSize }} className="devicon-figma-plain colored"></i>
        <i style={{ fontSize }} className="devicon-google-plain colored"></i>
      </div>
    </motion.div>
  );
};

export default Skills;
