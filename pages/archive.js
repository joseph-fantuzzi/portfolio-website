import Footer from "../components/Footer";
import styles from "../styles/Archive.module.css";
import data from "../utils/archive-data";
import ArchiveLogos from "../components/ArchiveLogos";
import Socials from "../components/Socials";
import ReturnHome from "../components/ReturnHome";
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  archiveFadeDownContainer,
  archiveFadeDownContainer2,
  archiveFadeDownContainer3,
  archiveFadeDownContainer4,
  archiveFadeDownContainer5,
  archiveFadeDown,
  archiveFadeRight,
} from "../utils/Animations";

const archive = () => {
  let isDark;
  if (typeof window !== "undefined") {
    isDark = window.localStorage.getItem("theme");
  }

  const labels = ["", "Year", "Name", "Category", "Technologies", "Link"];

  return (
    <div className={isDark === "dark" ? styles.fulldark : styles.fulllight}>
      <div className={styles.container}>
        <div className={styles.archivecontainer}>
          <motion.div variants={archiveFadeRight} className={styles.titlecontainer}>
            <h1 className={styles.title}>Project Archive</h1>
            <p className={styles.about}>A record of the work I&apos;ve done.</p>
          </motion.div>
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
                    <FiFolder fontSize={22} />
                    <p className={styles.date}>{pr.date}</p>
                    <h1 className={styles.name}>{pr.name}</h1>
                    <p className={styles.category}>BloomTech Apprenticeship</p>
                    <div className={styles.technologies}></div>
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
                    <FiFolder fontSize={22} />
                    <p className={styles.date}>{project.date}</p>
                    <h1 className={styles.name}>{project.name}</h1>
                    <p className={styles.category}>BloomTech Project</p>
                    <div className={styles.technologies}></div>
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
                    <FiFolder fontSize={22} />
                    <p className={styles.date}>{sprintChallenge.date}</p>
                    <h1 className={styles.name}>
                      Sprint Challenge {data.bloomtechSprints.length - i}: {sprintChallenge.name}
                    </h1>
                    <p className={styles.category}>BloomTech Sprint Challenge</p>
                    <div className={styles.technologies}></div>
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

export default archive;
