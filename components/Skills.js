import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Skills.module.css";
import { HiOutlinePencil } from "react-icons/hi";
import { motion, useAnimation, useInView } from "framer-motion";
import { scrollRevealFadeUp, initialScrollRevealFadeUp } from "../utils/Animations";

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
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-html5-plain colored"></i>
                  <p>HTML</p>
                </div>
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-css3-plain colored"></i>
                  <p>CSS</p>
                </div>
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-javascript-plain colored"></i>
                  <p>JavaScript</p>
                </div>
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-typescript-plain colored"></i>
                  <p>TypeScript</p>
                </div>
              </div>
              <div className={styles.bottomrow}>
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-react-original colored"></i>
                  <p>React.js</p>
                </div>
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-redux-original colored"></i>
                  <p>Redux.js</p>
                </div>
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-nextjs-original"></i>
                  <p>Next.js</p>
                </div>
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-tailwindcss-plain colored"></i>
                  <p>TailwindCSS</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className={styles.text}>Backend</p>
            <div className={dark ? styles.backenddark : styles.backendlight}>
              <div className={styles.backtoprow}>
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-nodejs-plain colored"></i>
                  <p>Node.js</p>
                </div>
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-express-original"></i>
                  <p>Express.js</p>
                </div>
              </div>
              <div className={styles.backbottomrow}>
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-postgresql-plain colored"></i>
                  <p>Postgres</p>
                </div>
                <div className={styles.iconcontainer}>
                  <i style={{ fontSize }} className="devicon-heroku-plain colored"></i>
                  <p>Heroku</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.otherskillcontainer}>
          <p className={styles.othertext}>Other</p>
          <div className={dark ? styles.otherdark : styles.otherlight}>
            <div className={styles.iconcontainer}>
              <i style={{ fontSize }} className="devicon-jest-plain colored"></i>
              <p>Jest</p>
            </div>
            <div className={styles.iconcontainer}>
              <i style={{ fontSize }} className="devicon-git-plain colored"></i>
              <p>Git</p>
            </div>
            <div className={styles.iconcontainer}>
              <i style={{ fontSize }} className="devicon-github-original"></i>
              <p>GitHub</p>
            </div>
            <div className={styles.iconcontainer}>
              <i style={{ fontSize }} className="devicon-trello-plain"></i>
              <p>Trello</p>
            </div>
            <div className={styles.iconcontainer}>
              <i style={{ fontSize }} className="devicon-figma-plain colored"></i>
              <p>Figma</p>
            </div>
            <div className={styles.iconcontainer}>
              <i style={{ fontSize }} className="devicon-google-plain colored"></i>
              <p>Google</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
