import Footer from "../components/Footer";
import styles from "../styles/Archive.module.css";
import data from "../utils/archive-data";
import ArchiveLogos from "../components/ArchiveLogos";
import Socials from "../components/Socials";
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";

const archive = () => {
  let isDark;
  if (typeof window !== "undefined") {
    isDark = window.localStorage.getItem("dark");
  }

  const labels = ["", "Year", "Name", "Category", "Technologies", "Link"];

  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.archivecontainer}>
          <div className={styles.titlecontainer}>
            <h1 className={styles.title}>Project Archive</h1>
            <p className={styles.about}>A record of the work I&apos;ve done.</p>
          </div>
          <div className={styles.archive}>
            <div className={styles.labelcontainer}>
              {labels.map((label, i) => {
                if (label === "Category" || label === "Technologies") {
                  return (
                    <div
                      className={label === "Category" ? styles.categorylabel : styles.techlabel}
                      key={i}
                    >
                      {label}
                    </div>
                  );
                } else {
                  return (
                    <div className={styles.label} key={i}>
                      {label}
                    </div>
                  );
                }
              })}
            </div>
            <div className={styles.projectcontainer}>
              {data.personalProjects.map((project, i) => {
                return (
                  <div key={i} className={styles.project}>
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
                      <a href={project.site} className={styles.site}>
                        <FiExternalLink fontSize={22} />
                      </a>
                      <a href={project.github} className={styles.github}>
                        {project.name === "Portfolio-v0" ? "" : <FiGithub fontSize={22} />}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.apprenticeshipcontainer}>
              {data.bloomtechPRs.map((pr, i) => {
                return (
                  <div key={i} className={styles.project}>
                    <FiFolder fontSize={22} />
                    <p className={styles.date}>{pr.date}</p>
                    <h1 className={styles.name}>{pr.name}</h1>
                    <p className={styles.category}>BloomTech Apprenticeship</p>
                    <div className={styles.technologies}></div>
                    <div className={styles.link}>
                      <a href={pr.link} className={styles.github}>
                        <FiGithub fontSize={22} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.bloomtechprojectcontainer}>
              {data.bloomtechProjects.map((project, i) => {
                return (
                  <div key={i} className={styles.project}>
                    <FiFolder fontSize={22} />
                    <p className={styles.date}>{project.date}</p>
                    <h1 className={styles.name}>{project.name}</h1>
                    <p className={styles.category}>BloomTech Projects</p>
                    <div className={styles.technologies}></div>
                    <div className={styles.link}>
                      <a href={project.github} className={styles.github}>
                        <FiGithub fontSize={22} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.sprintcontainer}>
              {data.bloomtechSprints.map((sprintChallenge, i) => {
                return (
                  <div key={i} className={styles.project}>
                    <FiFolder fontSize={22} />
                    <p className={styles.date}>{sprintChallenge.date}</p>
                    <h1 className={styles.name}>
                      Sprint Challenge {i + 1}: {sprintChallenge.name}
                    </h1>
                    <p className={styles.category}>BloomTech Sprint Challenges</p>
                    <div className={styles.technologies}></div>
                    <div className={styles.link}>
                      <a href={sprintChallenge.link} className={styles.github}>
                        <FiGithub fontSize={22} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Socials />
    </div>
  );
};

export default archive;
