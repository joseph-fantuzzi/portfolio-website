import React, { useState, useEffect, useLayoutEffect } from "react";
import Toggle from "./Toggle";
import styles from "../styles/Main.module.css";

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

  useLayoutEffect(() => {
    window.addEventListener("resize", checkMatch);
    return () => window.removeEventListener("resize", checkMatch);
  }, []);

  return (
    <main className={styles.maincontainer}>
      <div className={styles.togglecontainer}>
        {toggleVisibility && <Toggle dark={dark} setDark={setDark} />}
      </div>
      <p>Hello, I&apos;m</p>
      <h1>Joseph Fantuzzi</h1>
      <p>Full Stack Web Developer | Software Engineer</p>
    </main>
  );
};

export default Main;
