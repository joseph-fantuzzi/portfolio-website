import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "../styles/Work.module.css";
import { CgBriefcase } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";
import { initialScrollRevealFadeUp, scrollRevealFadeUp } from "./Animations";

const Work = ({ dark }) => {
  const [isHovering, setIsHovering] = useState(false);

  const workContainer = useRef(null);
  const isInView = useInView(workContainer);
  const animationControl = useAnimation();

  isInView ? animationControl.start(scrollRevealFadeUp) : "";

  const hoverHandler = () => {
    setIsHovering(!isHovering);
  };

  return (
    <motion.div
      id="work"
      className={styles.container}
      initial={initialScrollRevealFadeUp}
      animate={animationControl}
      ref={workContainer}
    >
      <div className={styles.intro}>
        <div className={dark ? styles.icondark : styles.iconlight}>
          <CgBriefcase size={50} />
        </div>
        <h1 className={dark ? styles.titledark : styles.titlelight}>
          <span className={dark ? styles.numberdark : styles.numberlight}>03.</span>What I&apos;ve
          Worked On
        </h1>
      </div>
      <Link href="/cryptox">
        <motion.div
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.9 }}
          className={styles.imgcontainer}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          <Image
            className={styles.img}
            layout="fill"
            src="/cryptox.png"
            alt="cryptox cryptocurrency tracker"
          />
          {isHovering ? (
            <motion.div className={styles.iconcontainer}>
              <BsArrowRightSquare className={styles.icon} fontSize={60} />
            </motion.div>
          ) : null}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Work;
