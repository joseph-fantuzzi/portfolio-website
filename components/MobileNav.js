import React, { useState } from "react";
import Link from "next/link";
import PaperAirplane from "./PaperAirplane";
import styles from "../styles/MobileNav.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const MobileNav = ({ mobileNav, setMobileNav }) => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleCloseBtn = () => {
    setMobileNav(false);
  };

  return (
    <div className={mobileNav ? styles.mobilenavopen : styles.mobilenav}>
      <CloseRoundedIcon className={styles.close} fontSize="large" onClick={handleCloseBtn} />
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
      </div>
    </div>
  );
};

export default MobileNav;
