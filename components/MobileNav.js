import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import styles from "../styles/MobileNav.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { mobileNavFadeLeft } from "../utils/Animations";

const MobileNav = ({ mobileNav, setMobileNav, dark, setDark }) => {
  const [display, setDisplay] = useState(false);

  const links = ["About", "Skills", "Work", "Contact"];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDisplay(true);
    }
  }, []);

  return (
    <div className={mobileNav ? styles.mobilenavopen : styles.mobilenav}>
      <CloseRoundedIcon
        className={styles.close}
        fontSize="large"
        onClick={() => setMobileNav(false)}
      />
      <div className={styles.textdiv}>
        {links.map((link, index) => {
          return (
            <motion.div
              custom={index}
              variants={mobileNavFadeLeft}
              animate={mobileNav ? "visible" : "hidden"}
              key={index}
            >
              <Link
                key={link}
                activeClass="active"
                to={`${link.toLowerCase()}`}
                spy={true}
                smooth={true}
                offset={-40}
                className={styles.links}
                onClick={() => setMobileNav(false)}
              >
                <p className={styles.numbers}>0{index + 1}.</p>
                <p>{link}</p>
              </Link>
            </motion.div>
          );
        })}
        <motion.div
          custom={4}
          variants={mobileNavFadeLeft}
          animate={mobileNav ? "visible" : "hidden"}
        >
          <div className={styles.resumelinkcontainer}>
            <a href="/Joseph.Fantuzzi-Resume.pdf" target="_blank" className={styles.resumelink}>
              Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          custom={5}
          variants={mobileNavFadeLeft}
          animate={mobileNav ? "visible" : "hidden"}
        >
          {display && <Toggle dark={dark} setDark={setDark} />}
        </motion.div>
      </div>
    </div>
  );
};

export default MobileNav;
