import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import styles from "../styles/Main.module.css";
import { AiOutlineDownCircle } from "react-icons/ai";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

const Main = ({ dark, setDark }) => {
  const [toggleVisibility, setToggleVisibility] = useState(false);
  const [displayTyping, setDisplayTyping] = useState(false);

  function checkMatch() {
    const x = window.matchMedia("(min-width: 800px)");
    if (!x.matches) {
      setToggleVisibility(false);
    } else {
      setToggleVisibility(true);
    }
  }

  useEffect(() => {
    checkMatch();
    if (typeof window !== "undefined") {
      setDisplayTyping(true);
    }
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      checkMatch();
    });
  }

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
            {displayTyping && (
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer",
                    "Front End Engineer",
                    "Software Engineer",
                    "UI/UX Designer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            )}
          </div>
          <p className={styles.bio}>
            Specialized in crafting and implementing modern and beautiful web experiences.
          </p>
        </div>
        <div className={styles.buttons}>
          <a href="#" className={dark ? styles.connectbtndark : styles.connectbtnlight}>
            <p className={styles.connect}>Connect</p>
            <HiOutlinePaperAirplane size={22} />
          </a>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={0}
            className={dark ? styles.workbtndark : styles.workbtnlight}
          >
            <p className={styles.work}>View My Work</p>
            <AiOutlineDownCircle size={25} />
          </Link>
        </div>
        <div className={dark ? styles.animationdark : styles.animationlight}>
          <div className={dark ? styles.circledark : styles.circlelight}></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
