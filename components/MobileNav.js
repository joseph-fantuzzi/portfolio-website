import React, { useState, useEffect } from "react";
import PaperAirplane from "./PaperAirplane";
import Toggle from "./Toggle";
import styles from "../styles/MobileNav.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-scroll";

const MobileNav = ({ mobileNav, setMobileNav, dark, setDark }) => {
  const [display, setDisplay] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

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
        return styles.mobilenavopenlight;
      }
    } else {
      if (dark) {
        return styles.mobilenavdark;
      } else {
        return styles.mobilenavlight;
      }
    }
  };

  return (
    <div className={getMobileContainerClass()}>
      <CloseRoundedIcon
        className={dark ? styles.closedark : styles.closelight}
        fontSize="large"
        onClick={() => setMobileNav(false)}
      />
      <div className={styles.textdiv}>
        {links.map((link) => {
          return (
            <Link
              key={link}
              activeClass="active"
              to={`${link.toLowerCase()}`}
              spy={true}
              smooth={true}
              offset={0}
              className={
                link === "Contact"
                  ? styles.contactlink
                  : dark
                  ? styles.linksdark
                  : styles.linkslight
              }
            >
              <p className={link === "Contact" ? styles.contact : ""}>{link}</p>
              {link === "Contact" ? <PaperAirplane /> : ""}
            </Link>
          );
        })}
        {display && <Toggle dark={dark} setDark={setDark} />}
      </div>
    </div>
  );
};

export default MobileNav;
