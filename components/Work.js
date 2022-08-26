import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "../styles/Work.module.css";
import { CgBriefcase } from "react-icons/cg";
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";
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
            <div className={styles.logo}>
              <PortfolioLogos.PortfolioLogo />
            </div>
            <p className={styles.projecttitle}>Portfolio</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                A portfolio website to display my technical skills, showcase projects I&apos;ve
                worked on, and to provide a means to contact me.
              </p>
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
            <div className={styles.linkscontainer}>
              <a
                className={styles.links}
                href="https://github.com/joseph-fantuzzi/portfolio-website"
                rel="noreferrer"
                target="_blank"
              >
                <FiGithub fontSize={22} />
              </a>
            </div>
          </div>
          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <div className={styles.logo}>
              <PortfolioLogos.CryptoxLogo />
            </div>
            <p className={styles.projecttitle}>Cryptox</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                A full-stack cryptocurrency tracking web application that enables users to monitor
                the top 250 cryptocurrencies.
              </p>
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
            <div className={styles.linkscontainer}>
              <a
                className={styles.links}
                href="https://github.com/joseph-fantuzzi/cryptocurrency-tracker"
                rel="noreferrer"
                target="_blank"
              >
                <FiGithub fontSize={22} />
              </a>
              <a
                className={styles.links}
                href="https://cryptox-cryptocurrency-tracker.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink fontSize={22} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <div className={styles.logo}>
              <PortfolioLogos.ZitrousLogo />
            </div>
            <p className={styles.projecttitle}>Zitrous</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                A code to styled image converter. This front-end app allows users to easily add code
                snippets and download a beautiful image to share with others.
              </p>
            </div>
            <Link href="/zitrous">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
            <div className={styles.linkscontainer}>
              <a
                className={styles.links}
                href="https://github.com/joseph-fantuzzi/code-to-image-converter"
                rel="noreferrer"
                target="_blank"
              >
                <FiGithub fontSize={22} />
              </a>
              <a
                className={styles.links}
                href="https://zitrous.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink fontSize={22} />
              </a>
            </div>
          </div>
          <div
            className={dark ? styles.workcontainerblurreddark : styles.workcontainerblurredlight}
          >
            <div className={styles.logoblurred}>
              <PortfolioLogos.Logo4 />
            </div>
            <p className={styles.projecttitleblurred}>Coming Soon ...</p>
            <motion.div className={dark ? styles.arrowblurreddark : styles.arrowblurredlight}>
              <BsArrowRightShort fontSize={40} />
            </motion.div>
            <div className={styles.linkscontainer}>
              <div className={styles.linksblurred}>
                <FiGithub fontSize={22} />
              </div>
              <div className={styles.linksblurred}>
                <FiExternalLink fontSize={22} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.archivecontainer}>
          <div className={styles.archive}>
            <Link href="/archive">
              <div className={styles.archivebtn}>
                <h1 className={styles.archivetitle}>View Archive</h1>
                <AiOutlineFolderOpen fontSize={25} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
