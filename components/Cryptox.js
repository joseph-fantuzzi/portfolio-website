import React, { useState, useEffect } from "react";
import styles from "../styles/Cryptox.module.css";
import { useRouter } from "next/router";
import Footer from "./Footer";
import ReturnHome from "./ReturnHome";
import Socials from "./Socials";
import Logo from "./Logo";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { TbArrowBackUp } from "react-icons/tb";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  projectFadeDown,
  projectFadeRight,
  projectFadeRightContainer,
  projectFadeDownContainer,
  projectFadeDownDelayed,
} from "../utils/Animations";

const Cryptox = () => {
  const [isDark, setIsDark] = useState(null);

  const technologies = [
    { name: "JS", icon: "devicon-javascript-plain colored" },
    { name: "React.js", icon: "devicon-react-original colored" },
    { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express.js", icon: "devicon-express-original" },
    { name: "Postgres", icon: "devicon-postgresql-plain colored" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(window.localStorage.getItem("theme"));
    }
  }, []);

  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className={isDark === "dark" ? styles.containerdark : styles.containerlight}>
      <div className={styles.cryptoxcontainer}>
        <header className={styles.header}>
          <motion.div variants={projectFadeRightContainer} className={styles.titlecontainer}>
            <motion.div variants={projectFadeRight}>
              <Logo animation={false} logo={"cryptox"} />
            </motion.div>
            <motion.h1 variants={projectFadeRight} className={styles.title}>
              Cryptox
            </motion.h1>
            <motion.div variants={projectFadeRight}>
              <motion.a
                href="https://github.com/joseph-fantuzzi/cryptocurrency-tracker"
                rel="noreferrer"
                target="_blank"
                className={isDark === "dark" ? styles.linkdark : styles.linklight}
              >
                <FiGithub fontSize={25} />
              </motion.a>
            </motion.div>
            <motion.div variants={projectFadeRight}>
              <motion.a
                href="https://cryptox-cryptocurrency-tracker.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className={isDark === "dark" ? styles.externallinkdark : styles.externallinklight}
              >
                <FiExternalLink fontSize={25} />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={projectFadeDown}
            onClick={handleBack}
            className={isDark === "dark" ? styles.backdark : styles.backlight}
          >
            <TbArrowBackUp fontSize={35} />
          </motion.div>
        </header>
        <div className={styles.linkscontainer}>
          <motion.div variants={projectFadeDownDelayed} className={styles.linkmobilecontainer}>
            <a
              href="https://github.com/joseph-fantuzzi/cryptocurrency-tracker"
              rel="noreferrer"
              target="_blank"
              className={isDark === "dark" ? styles.linkmobiledark : styles.linkmobilelight}
            >
              <FiGithub fontSize={25} />
            </a>
          </motion.div>
          <motion.div variants={projectFadeDownDelayed} className={styles.linkmobilecontainer}>
            <a
              href="https://cryptox-cryptocurrency-tracker.vercel.app/"
              rel="noreferrer"
              target="_blank"
              className={isDark === "dark" ? styles.linkmobiledark : styles.linkmobilelight}
            >
              <FiExternalLink fontSize={25} />
            </a>
          </motion.div>
        </div>
        <motion.main variants={projectFadeDownContainer} className={styles.main}>
          <div variants={projectFadeDown} className={styles.imgcontainer}>
            <motion.div variants={projectFadeDown}>
              <Image
                width={480}
                height={352}
                src="/cryptox-img.png"
                alt="Cryptox site desktop image"
                className={styles.img}
              />
            </motion.div>
            <motion.div variants={projectFadeDown}>
              <Image
                width={480}
                height={352}
                src="/cryptox-dashboard.png"
                alt="Cryptox site dashboard image"
                className={styles.img}
              />
            </motion.div>
          </div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Description</h2>
            <p className={styles.text}>
              This full-stack application tracks the top 250 cryptocurrencies, allows for user
              functionality, and has full CRUD capabilities. While entering the application, users
              are greeted at a landing page where they can get an understanding of the intended use
              of the app. They will then have the option to register an account or log in if they
              already have one. Once logged in, users will be able to view the top 250
              cryptocurrencies sorted from highest market cap to lowest market cap. Users are able
              to favorite certain coins as they wish and view their favorite coins in the favorites
              list page. Search functionality is also present when users want to filter through a
              coin of their choosing. Not only that, but users are also able to view their account
              page where they can see their username and have the ability to change their password.
              Dark mode feature is implemented as well to give users a better viewing experience
              during night hours. Overall, this application does a great job at delivering a modern
              and beautful user experience for users to enjoy and provides tracking capabilities for
              the world of decentralized money.
            </p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Technologies</h2>
            <div className={styles.techcontainer}>
              {technologies.map((tech, i) => {
                return (
                  <div className={styles.tech} key={i}>
                    <i style={{ fontSize: 35 }} className={tech.icon}></i>
                    <p className={styles.techname}>{tech.name}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Struggles</h2>
            <p className={styles.text}></p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>What would I change if I started over?</h2>
            <p className={styles.text}></p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Future Plans</h2>
            <p className={styles.text}></p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Demo</h2>
          </motion.div>
        </motion.main>
      </div>
      <Footer />
      <ReturnHome />
      <Socials />
    </div>
  );
};

export default Cryptox;
