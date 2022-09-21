import React, { useState, useEffect } from "react";
import styles from "../styles/Portfolio.module.css";
import { useRouter } from "next/router";
import Footer from "./Footer";
import ReturnHome from "./ReturnHome";
import Socials from "./Socials";
import Logo from "./Logo";
import { FiGithub } from "react-icons/fi";
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

const Portfolio = () => {
  const [isDark, setIsDark] = useState(null);

  const technologies = [
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Next.js", icon: "devicon-nextjs-original" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
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

  const handleForward = () => {
    router.push("/cryptox");
  };

  return (
    <div className={isDark === "dark" ? styles.containerdark : styles.containerlight}>
      <div className={styles.portfoliocontainer}>
        <header className={styles.header}>
          <motion.div variants={projectFadeRightContainer} className={styles.titlecontainer}>
            <motion.div variants={projectFadeRight}>
              <Logo animation={false} logo={"portfolio"} />
            </motion.div>
            <motion.h1 variants={projectFadeRight} className={styles.title}>
              Portfolio
            </motion.h1>
            <motion.div variants={projectFadeRight}>
              <motion.a
                href="https://github.com/joseph-fantuzzi/portfolio-website"
                rel="noreferrer"
                target="_blank"
                className={isDark === "dark" ? styles.linkdark : styles.linklight}
              >
                <FiGithub fontSize={25} />
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
        <motion.div variants={projectFadeDownDelayed} className={styles.linkmobilecontainer}>
          <a
            href="https://github.com/joseph-fantuzzi/portfolio-website"
            rel="noreferrer"
            target="_blank"
            className={isDark === "dark" ? styles.linkmobiledark : styles.linkmobilelight}
          >
            <FiGithub fontSize={25} />
          </a>
        </motion.div>
        <motion.main variants={projectFadeDownContainer} className={styles.main}>
          <motion.div variants={projectFadeDown}>
            <Image
              width={1150}
              height={700}
              src="/portfolio-img.png"
              alt="Portfolio site desktop image"
              className={styles.img}
              priority
            />
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Description</h2>
            <p className={styles.text}>
              A front-end responsive web application that displays my technical skills, showcases
              projects I&apos;ve worked on, and provides a means to contact me. This app was built
              using Next.js and standard CSS. The project features rich animations accomplished
              using Framer Motion&apos;s animation library. The User Interface includes beautiful
              color contrast, proper white spacing, impressive rendering, hovering and scrolling
              animations, and an initial rendering logo animation designed using svgator. This
              project is designed for all device types and sizes.
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
              Since this was my first time using Next.js, I struggled with the client and server
              rendering differences. I struggled especially with the dark mode implementation, since
              there could be server and client rendering differences due to local storage changes.
              To fix this issue, I researched how to set the local storage only on the client. After
              a bit of research, I found that using a conditional before changing local storage
              solves the problem. I checked if the the window object&apos;s type is not undefined.
              When it is undefined, it is being rendered on the server since there is no window
              object. So, having it not be undefined means only when the web app is being rendered
              in the browser. This fixed the problem and ultimately was a great lesson.
            </p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>What would I change if I started over?</h2>
            <p className={styles.text}>
              I would certainly use TailwindCSS or Styled Components to aid in the CSS styling
              process. Although, I&apos;ve used both before, I find it much easier and more
              efficient and effective to use CSS pre-processors or CSS libraries to aid in the CSS
              design process. I have found that using standard CSS within Next.js is quite
              challenging since component-level css in Next.js need to have different module
              stylesheets. I like to have my stylesheets organized by certain components, so it
              definitely would have been much simpler to integrate something like TailwindCSS into
              this application.
            </p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Future Plans</h2>
            <p className={styles.text}>
              In the future, I plan on implementing a section about my hobbies and personal
              interests. I believe it is a good idea for viewers of this web application to know
              what I like to do in my free time.
            </p>
          </motion.div>
        </motion.main>
      </div>
      <Footer />
      <ReturnHome />
      <Socials />
    </div>
  );
};

export default Portfolio;
