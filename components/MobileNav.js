import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import styles from "../styles/MobileNav.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-scroll";

const MobileNav = ({ mobileNav, setMobileNav, dark, setDark }) => {
  const [display, setDisplay] = useState(false);

  const links = ["About", "Skills", "Work", "Contact"];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDisplay(true);
    }
  }, []);

  const getMobileContainerClass = () => {
    if (mobileNav) {
      if (dark) {
        return styles.mobilenavopendark;
      } else {
        return styles.mobilenavopen;
      }
    } else {
      if (dark) {
        return styles.mobilenavdark;
      } else {
        return styles.mobilenav;
      }
    }
  };

  return (
    <div className={getMobileContainerClass()}>
      <CloseRoundedIcon
        className={styles.close}
        fontSize="large"
        onClick={() => setMobileNav(false)}
      />
      <div className={styles.textdiv}>
        {links.map((link, index) => {
          return (
            <Link
              key={link}
              activeClass="active"
              to={`${link.toLowerCase()}`}
              spy={true}
              smooth={true}
              offset={0}
              className={styles.links}
            >
              <p className={styles.numbers}>0{index + 1}.</p>
              <p>{link}</p>
            </Link>
          );
        })}
        <a href="#" className={styles.resumelink}>
          Resume
        </a>
        {display && <Toggle dark={dark} setDark={setDark} />}
      </div>
    </div>
  );
};

export default MobileNav;
