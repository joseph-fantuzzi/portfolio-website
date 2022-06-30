import React, { useState, useEffect, useLayoutEffect } from "react";
import Toggle from "./Toggle";
import styles from "../styles/Main.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FiPaperclip } from "react-icons/fi";

const Main = ({ dark, setDark }) => {
  const [toggleVisibility, setToggleVisibility] = useState(false);

  function checkMatch() {
    const x = window.matchMedia("(min-width: 768px)");
    if (!x.matches) {
      setToggleVisibility(false);
    } else {
      setToggleVisibility(true);
    }
  }

  useEffect(() => {
    checkMatch();
  }, []);

  return (
    <main className={styles.maincontainer}>
      <div className={styles.togglecontainer}>
        {toggleVisibility && <Toggle dark={dark} setDark={setDark} />}
      </div>
      <div className={styles.content}>
        <div className={styles.intro}>
          <p className={styles.hello}>Hello, I&apos;m</p>
          <h1 className={styles.name}>Joseph Fantuzzi</h1>
          <div className={styles.titlescontainer}>
            <p className={styles.titles}>Full Stack Web Developer</p>
            <p className={styles.titles}>Software Engineer</p>
            <p className={styles.titles}>UI/UX Designer</p>
          </div>
          <p className={styles.bio}>
            Specialized in crafting and implementing modern and beautiful web experiences.
          </p>
        </div>
        <div className={styles.buttons}>
          <a href="#" className={styles.hirebtn}>
            <p className={styles.hire}>Hire Me</p>
            <ArrowForwardIcon />
          </a>
          <a href="#" className={styles.resumebtn}>
            <p className={styles.resume}>Resume</p>
            <FiPaperclip size={20} />
          </a>
        </div>
        <div className={styles.animation}>
          <div className={styles.circle}></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
