import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import styles from "../styles/Archive.module.css";
import data from "../utils/archive-data";
import ArchiveLogos from "./ArchiveLogos";
import Image from "next/image";
import Socials from "./Socials";
import ReturnHome from "./ReturnHome";
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  archiveFadeDownContainer,
  archiveFadeDownContainer2,
  archiveFadeDownContainer3,
  archiveFadeDownContainer4,
  archiveFadeDownContainer5,
  archiveFadeDown,
  archiveFadeRight,
  arrowFadeDownContainer,
  arrowFadeDown,
} from "../utils/Animations";

const Archive = () => {
  const [isDark, setIsDark] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(window.localStorage.getItem("theme"));
    }
  }, []);

  const labels = ["", "Year", "Name", "Category", "Technologies", "Link"];

  const handleBack = () => {
    router.push("/zitrous");
  };

  const handleForward = () => {
    router.push("/");
  };

  return (
    <div className={isDark === "dark" ? styles.fulldark : styles.fulllight}>
      <div className={styles.container}>
        <div className={styles.archivecontainer}>
          <div className={styles.headercontainer}>
            <motion.div variants={archiveFadeRight} className={styles.titlecontainer}>
              <h1 className={styles.title}>Project Archive</h1>
              <p className={styles.about}>A record of the work I&apos;ve done.</p>
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
          </div>
          <div className={styles.archive}>
            <motion.div variants={archiveFadeDownContainer} className={styles.labelcontainer}>
              {labels.map((label, i) => {
                if (label === "Category" || label === "Technologies") {
                  return (
                    <motion.div
                      variants={archiveFadeDown}
                      className={label === "Category" ? styles.categorylabel : styles.techlabel}
                      key={i}
                    >
                      {label}
                    </motion.div>
                  );
                } else {
                  return (
                    <motion.div variants={archiveFadeDown} className={styles.label} key={i}>
                      {label}
                    </motion.div>
                  );
                }
              })}
            </motion.div>
            <motion.div variants={archiveFadeDownContainer2} className={styles.projectcontainer}>
              {data.personalProjects.map((project, i) => {
                return (
                  <motion.div variants={archiveFadeDown} key={i} className={styles.project}>
                    {project.name === "Portfolio-v1" ? (
                      <ArchiveLogos.PortfolioLogo />
                    ) : project.name === "Cryptox" ? (
                      <ArchiveLogos.CryptoxLogo />
                    ) : project.name === "Zitrous" ? (
                      <ArchiveLogos.ZitrousLogo />
                    ) : (
                      <FiFolder fontSize={22} />
                    )}
                    <p className={styles.date}>{project.date}</p>
                    <h1 className={styles.name}>{project.name}</h1>
                    <p className={styles.category}>Personal</p>
                    <div className={styles.technologies}>
                      {project.technologies.map((tech, i) => {
                        return <p key={i}>{tech}</p>;
                      })}
                    </div>
                    <div className={styles.link}>
                      <a
                        href={project.site}
                        rel="noreferrer"
                        target="_blank"
                        className={isDark === "dark" ? styles.sitedark : styles.sitelight}
                      >
                        <FiExternalLink fontSize={22} />
                      </a>
                      <a
                        href={project.github}
                        rel="noreferrer"
                        target="_blank"
                        className={isDark === "dark" ? styles.githubdark : styles.githublight}
                      >
                        {project.name === "Portfolio-v0" ? "" : <FiGithub fontSize={22} />}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div
              variants={archiveFadeDownContainer3}
              className={styles.apprenticeshipcontainer}
            >
              {data.bloomtechPRs.map((pr, i) => {
                return (
                  <motion.div variants={archiveFadeDown} key={i} className={styles.project}>
                    <div>
                      <Image
                        src="/bloomtech-logo.jpeg"
                        alt="bloomtech-logo"
                        width="22px"
                        height="22px"
                        className={styles.image}
                      />
                    </div>
                    <p className={styles.date}>{pr.date}</p>
                    <h1 className={styles.name}>{pr.name}</h1>
                    <p className={styles.category}>BloomTech Apprenticeship</p>
                    <div className={styles.technologies}>
                      {pr.technologies.map((tech, i) => {
                        return <p key={i}>{tech}</p>;
                      })}
                    </div>
                    <div className={styles.link}>
                      <a
                        href={pr.link}
                        rel="noreferrer"
                        target="_blank"
                        className={isDark === "dark" ? styles.githubdark : styles.githublight}
                      >
                        <FiGithub fontSize={22} />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div
              variants={archiveFadeDownContainer4}
              className={styles.bloomtechprojectcontainer}
            >
              {data.bloomtechProjects.map((project, i) => {
                return (
                  <motion.div variants={archiveFadeDown} key={i} className={styles.project}>
                    <div>
                      <Image
                        src="/bloomtech-logo.jpeg"
                        alt="bloomtech-logo"
                        width="22px"
                        height="22px"
                        className={styles.image}
                      />
                    </div>
                    <p className={styles.date}>{project.date}</p>
                    <h1 className={styles.name}>{project.name}</h1>
                    <p className={styles.category}>BloomTech Project</p>
                    <div className={styles.technologies}>
                      {project.technologies.map((tech, i) => {
                        return <p key={i}>{tech}</p>;
                      })}
                    </div>
                    <div className={styles.link}>
                      <a
                        href={project.github}
                        rel="noreferrer"
                        target="_blank"
                        className={isDark === "dark" ? styles.githubdark : styles.githublight}
                      >
                        <FiGithub fontSize={22} />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div variants={archiveFadeDownContainer5} className={styles.sprintcontainer}>
              {data.bloomtechSprints.map((sprintChallenge, i) => {
                return (
                  <motion.div variants={archiveFadeDown} key={i} className={styles.project}>
                    <div>
                      <Image
                        src="/bloomtech-logo.jpeg"
                        alt="bloomtech-logo"
                        width="22px"
                        height="22px"
                        className={styles.image}
                      />
                    </div>
                    <p className={styles.date}>{sprintChallenge.date}</p>
                    <h1 className={styles.name}>
                      Sprint Challenge {data.bloomtechSprints.length - i}: {sprintChallenge.name}
                    </h1>
                    <p className={styles.category}>BloomTech Sprint Challenge</p>
                    <div className={styles.technologies}>
                      {sprintChallenge.technologies.map((tech, i) => {
                        return <p key={i}>{tech}</p>;
                      })}
                    </div>
                    <div className={styles.link}>
                      <a
                        href={sprintChallenge.link}
                        rel="noreferrer"
                        target="_blank"
                        className={isDark === "dark" ? styles.githubdark : styles.githublight}
                      >
                        <FiGithub fontSize={22} />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
      <ReturnHome isDark={isDark} />
      <Socials delay={false} isDark={isDark} />
    </div>
  );
};

export default Archive;
