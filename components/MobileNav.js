import React, { useState, useEffect } from "react";
import Link from "next/link";
import PaperAirplane from "./PaperAirplane";
import Toggle from "./Toggle";
import styles from "../styles/MobileNav.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const MobileNav = ({ mobileNav, setMobileNav, dark, setDark }) => {
  const [display, setDisplay] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

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
        {links.map((link) => {
          return (
            <Link key={link} href={"#"}>
              <a className={link === "Contact" ? styles.contactlink : styles.links}>
                <p className={link === "Contact" ? styles.contact : ""}>{link}</p>
                {link === "Contact" ? <PaperAirplane /> : ""}
              </a>
            </Link>
          );
        })}
        {display && <Toggle dark={dark} setDark={setDark} />}
      </div>
    </div>
  );
};

export default MobileNav;
