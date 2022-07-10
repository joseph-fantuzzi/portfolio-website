import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Logo from "./Logo";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navFadeDownContainer, navFadeDown } from "./Animations";

const Navbar = ({ setMobileNav }) => {
  const [hamburgerVisible, setHamburgerVisible] = useState(false);

  function checkMatch() {
    const x = window.matchMedia("(min-width: 800px)");
    if (!x.matches) {
      setHamburgerVisible(true);
    } else {
      setHamburgerVisible(false);
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

  const links = ["About", "Skills", "Work", "Contact"];

  return (
    <div id="home" className={styles.container}>
      <div className={styles.navcontainer}>
        <Logo />
        <motion.div variants={navFadeDownContainer} className={styles.linkcontainer}>
          {links.map((link, index) => {
            return (
              <motion.div variants={navFadeDown} key={index}>
                <Link
                  key={index}
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
              </motion.div>
            );
          })}
          <motion.a variants={navFadeDown} href="#" className={styles.resumelink}>
            Resume
          </motion.a>
        </motion.div>
        {hamburgerVisible && (
          <MenuRoundedIcon
            className={styles.hamburger}
            fontSize="large"
            onClick={() => setMobileNav(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
