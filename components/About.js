import React, { useRef } from "react";
import styles from "../styles/About.module.css";
import { MdOutlinePersonOutline } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";
import { scrollRevealFadeUp, initialScrollRevealFadeUp } from "./Animations";

const About = ({ dark }) => {
  const aboutContainer = useRef(null);
  const isInView = useInView(aboutContainer);
  const animationControl = useAnimation();

  isInView ? animationControl.start(scrollRevealFadeUp) : "";

  return (
    <motion.div
      id="about"
      className={styles.aboutcontainer}
      initial={initialScrollRevealFadeUp}
      animate={animationControl}
      ref={aboutContainer}
    >
      <div className={styles.intro}>
        <MdOutlinePersonOutline size={50} className={dark ? styles.icondark : styles.iconlight} />
        <h1 className={dark ? styles.titledark : styles.titlelight}>
          <span className={dark ? styles.numberdark : styles.numberlight}>01.</span>About Me
        </h1>
      </div>
      <div className={dark ? styles.textcontainerdark : styles.textcontainerlight}>
        <p className={styles.text}>
          Hello! I&apos;m Joseph Fantuzzi, and I love designing and implementing elegant
          applications on the internet. Recently, I graduated from a 6 month Full Stack Web
          Development program at Bloom Institute of Technology, where I completed 960 hours of
          development material. During my time there, I learned a wide variety of concepts ranging
          from Frontend Development with React to Backend Development with Express to Database
          Design with SQL databases, all the way to learning Computer Science algorithms and data
          structures with my preferred programming language, JavaScript!
        </p>
        <p className={styles.text}>
          Before kickstarting my development journey, I was an Architectural Engineering student at
          Penn State. After realizing that was not the right career choice for me, I decided to make
          the move to learn web development!
        </p>
        <p className={styles.text}>
          Currently, I&apos;m building out different applications to enhance my skills as a software
          engineer. My experience includes building Frontend applications with view-layer
          functionality, Backend applications that provide an API with CRUD endpoints for accessing
          and manipulating the database, and Full Stack applications that encompass both client and
          server integrations. In the future, I plan on learning Blockchain Development to further
          my knowledge in the world of decentralization.
        </p>
        <p className={styles.lasttext}>
          With everything I implement, I strive to produce effective code and efficient logic. One
          thing for sure is that if I don&apos;t know how to do something, I will figure it out, and
          never give up. Check out some of my most valuable skills below!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
