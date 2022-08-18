import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "../styles/Work.module.css";
import { CgBriefcase } from "react-icons/cg";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import {
  initialScrollRevealFadeUp,
  scrollRevealFadeUp,
  arrowHover,
  arrowTap,
} from "../utils/Animations";
import PortfolioLogos from "./PortfolioLogos";

const Work = ({ dark }) => {
  const workContainer = useRef(null);
  const isInView = useInView(workContainer);
  const animationControl = useAnimation();

  isInView ? animationControl.start(scrollRevealFadeUp) : "";

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
      <div className={styles.allworkcontainer}>
        <div className={styles.row}>
          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <p className={styles.projecttitle}>Portfolio Website</p>
            <div className={styles.logo}>
              <PortfolioLogos.PortfolioLogo />
            </div>
            <Link href="/portfolio">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
          </div>
          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <p className={styles.projecttitle}>Cryptox</p>
            <div className={styles.logo}>
              <PortfolioLogos.CryptoxLogo />
            </div>
            <Link href="/cryptox">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
          </div>
        </div>
        <div className={styles.row}>
          <div
            className={dark ? styles.workcontainerblurreddark : styles.workcontainerblurredlight}
          >
            <p className={styles.projecttitle}>Coming Soon ...</p>
            <div className={styles.logoblurred}>
              <PortfolioLogos.Logo3 />
            </div>
            <motion.div className={dark ? styles.arrowblurreddark : styles.arrowblurredlight}>
              <BsArrowRightShort fontSize={40} />
            </motion.div>
          </div>
          <div
            className={dark ? styles.workcontainerblurreddark : styles.workcontainerblurredlight}
          >
            <p className={styles.projecttitle}>Coming Soon ...</p>
            <div className={styles.logoblurred}>
              <PortfolioLogos.Logo4 />
            </div>
            <motion.div className={dark ? styles.arrowblurreddark : styles.arrowblurredlight}>
              <BsArrowRightShort fontSize={40} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
