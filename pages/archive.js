import Footer from "../components/Footer";
import styles from "../styles/Archive.module.css";
import data from "../utils/archive-data";
import { FiFolder } from "react-icons/fi";

const archive = () => {
  let isDark;
  if (typeof window !== "undefined") {
    isDark = window.localStorage.getItem("dark");
  }

  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.archivecontainer}>
          <div className={styles.titlecontainer}>
            <h1 className={styles.title}>Project Archive</h1>
            <p className={styles.about}>A record of the work I&apos;ve done.</p>
          </div>
          <div className={styles.archive}>
            <div className={styles.personal}>
              {data.personalProjects.map((project, i) => {
                return (
                  <div key={i} className={styles.project}>
                    <FiFolder fontSize={22} />
                    <h1>{project.name}</h1>
                  </div>
                );
              })}
            </div>
            <div className={styles.bloomtech}>
              {data.bloomtechPRs.map((pr, i) => {
                return (
                  <div key={i} className={styles.project}>
                    <FiFolder fontSize={22} />
                    <h1>{pr.name}</h1>
                  </div>
                );
              })}
              {data.bloomtechProjects.map((project, i) => {
                return (
                  <div key={i} className={styles.project}>
                    <FiFolder fontSize={22} />
                    <h1>{project.name}</h1>
                  </div>
                );
              })}
              {data.bloomtechSprints.map((sprintChallenge, i) => {
                return (
                  <div key={i} className={styles.project}>
                    <FiFolder fontSize={22} />
                    <h1>
                      Sprint Challenge {i + 1}: {sprintChallenge.name}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default archive;
