import React, { useState, useEffect } from "react";
import styles from "../styles/Cryptox.module.css";
import { useRouter } from "next/router";
import Footer from "./Footer";
import ReturnHome from "./ReturnHome";
import Socials from "./Socials";
import Logo from "./Logo";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  projectFadeDown,
  projectFadeRight,
  projectFadeRightContainer,
  projectFadeDownContainer,
  projectFadeDownDelayed,
  arrowFadeDownContainer,
  arrowFadeDown,
} from "../utils/Animations";

const Cryptox = () => {
  const [isDark, setIsDark] = useState(null);

  const technologies = [
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React.js", icon: "devicon-react-original colored" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
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
    router.push("/portfolio");
  };

  const handleForward = () => {
    router.push("/zitrous");
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
          <motion.div variants={arrowFadeDownContainer} className={styles.arrowcontainer}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={arrowFadeDown}
              onClick={handleBack}
              className={isDark === "dark" ? styles.backdark : styles.backlight}
            >
              <BsArrowLeftShort fontSize={35} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={arrowFadeDown}
              onClick={handleForward}
              className={isDark === "dark" ? styles.forwarddark : styles.forwardlight}
            >
              <BsArrowRightShort fontSize={35} />
            </motion.div>
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
          <div className={styles.imgcontainer}>
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
              This full-stack application tracks the top 250 cryptocurrencies and was created with a
              React.js front-end and a node.js, express.js, and postgres back-end. Cryptox has full
              CRUD capabilities, authenticates users with JSON web tokens, and hashes passwords
              using bcrypt.js. While entering the application, users are greeted at a landing page
              where they can get an understanding of the intended use of the app. They will then
              have the option to register an account or log in if they already have one. Once logged
              in, users will be able to view the top 250 cryptocurrencies sorted from highest market
              cap to lowest market cap. Users are able to favorite certain coins as they wish and
              view their favorite coins in the favorites list page. Search functionality is also
              present when users want to filter through a coin of their choosing. Not only that, but
              users are also able to view their account page where they can see their username and
              have the ability to change their password. Dark mode feature is implemented as well to
              give users a better viewing experience during night hours. Overall, this application
              does a great job at delivering a modern and beautful user experience for users to
              enjoy and provides tracking capabilities for the world of decentralized money.
            </p>
          </motion.div>
          <div className={styles.section}>
            <motion.h2 variants={projectFadeDown} className={styles.h2}>
              Technologies
            </motion.h2>
            <div className={styles.techcontainer}>
              {technologies.map((tech, i) => {
                return (
                  <motion.div
                    variants={projectFadeDown}
                    className={isDark === "dark" ? styles.techdark : styles.techlight}
                    key={i}
                  >
                    <i style={{ fontSize: 35 }} className={tech.icon}></i>
                    <p className={styles.techname}>{tech.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Struggles</h2>
            <p className={styles.text}>
              Throughout the development of this project, I came across minor struggles here and
              there. Most were fixed through online research. The most notable struggle I had would
              be the design process. I am a big believer in beautiful-looking UIs and wanted this
              application to stand out. I had a rough time figuring out how I wanted to structure
              all of the content. I conducted a lot of research and realized that keeping it simple
              would be the best option so users can easily parse through different cryptocurrencies.
              Also, I struggled a bit when converting my back-end database from SQLite to
              PostgreSQL. After googling and finding articles on migrating to PostgreSQL, I was able
              to migrate databases smoothly. All in all, the development process has been a learning
              experience for this project and I have learned that I can never give up and anything
              can be figured out with enough research and personal drive.
            </p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>What would I change if I started over?</h2>
            <p className={styles.text}>
              I would definitely create more mockups and concept charts before starting the
              development process. I, like many out there, like to dive into the development process
              as soon as possible. I need to learn to not only create design prototypes, but also
              figure out the intended user experience as a whole. Instead of thinking about it as I
              go along, having a much more structured and planned approach will lead to an easier
              development process. Also, I would have used Redux as a state management tool instead
              of consistently drilling down props using React. Since this project is a full-stack
              application with many slices of state and different components, it would have been
              smarter to implement Redux&apos;s state management library to make accessing state
              variables much easier.
            </p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Future Plans</h2>
            <p className={styles.text}>
              This project has been a long time in the making. There are still many features I plan
              on implementing in the future. Firstly, I plan on creating a better landing page that
              has more scrollable content. This landing page will give users more information on
              what it is like once you register an account. Also, I plan on implementing a coin
              chart for each cryptocurrency. Each crypto coin has its own route with content
              specific to that coin, but is currently unfinished. I would like users to be able to
              view a chart of the recent price data of that specific coin. I plan on using a chart
              library to make it easier to implement. Lastly, I plan on adding a news page where
              users can see the most recent and most popular crypto news articles. This will keep
              users in the loop on the latest in the cryptocurrency market.
            </p>
          </motion.div>
          {/* <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Demo</h2>
          </motion.div> */}
        </motion.main>
      </div>
      <Footer />
      <ReturnHome />
      <Socials />
    </div>
  );
};

export default Cryptox;
