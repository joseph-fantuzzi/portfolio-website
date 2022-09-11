import styles from "../styles/Portfolio.module.css";
import { useRouter } from "next/router";
import Footer from "./Footer";
import ReturnHome from "./ReturnHome";
import Socials from "./Socials";
import Logo from "./Logo";
import { FiGithub } from "react-icons/fi";
import { TbArrowBackUp } from "react-icons/tb";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  projectFadeDown,
  projectFadeRight,
  projectFadeRightContainer,
  projectFadeDownContainer,
} from "../utils/Animations";

const Portfolio = () => {
  const technologies = [
    { name: "JS", icon: "devicon-javascript-plain colored" },
    { name: "Next.js", icon: "devicon-nextjs-original" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
  ];

  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.portfoliocontainer}>
        <header className={styles.header}>
          <motion.div variants={projectFadeRightContainer} className={styles.titlecontainer}>
            <motion.div variants={projectFadeRight}>
              <Logo animation={false} />
            </motion.div>
            <motion.h1 variants={projectFadeRight} className={styles.title}>
              Portfolio
            </motion.h1>
            <motion.div variants={projectFadeRight}>
              <motion.a
                href="https://github.com/joseph-fantuzzi/portfolio-website"
                rel="noreferrer"
                target="_blank"
                className={styles.link}
              >
                <FiGithub fontSize={25} />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={projectFadeDown}
            onClick={handleBack}
            className={styles.back}
          >
            <TbArrowBackUp fontSize={35} />
          </motion.div>
        </header>
        <div className={styles.linkmobilecontainer}>
          <a
            href="https://github.com/joseph-fantuzzi/portfolio-website"
            rel="noreferrer"
            target="_blank"
            className={styles.linkmobile}
          >
            <FiGithub fontSize={25} />
          </a>
        </div>
        <motion.main variants={projectFadeDownContainer} className={styles.main}>
          <motion.div variants={projectFadeDown}>
            <Image
              width={1150}
              height={700}
              src="/portfolio-img.png"
              alt="Portfolio site desktop image"
              className={styles.img}
            />
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Description</h2>
            <p className={styles.text}>
              A front-end responsive web application that displays my technical skills, showcases
              projects I&apos;ve worked on, and provides a means to contact me. This app was built
              using Next.js and standard CSS. The project features rich animations accomplished
              using Framer Motion&apos;s animation library. The User Interface includes beautiful
              color contrast, proper white spacing, impressive rendering, hovering, and scrolling
              animations, and an initial rendering logo animation designed using svgator. This
              project is designed for all device types and sizes.
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
            <p className={styles.text}>
              Since this was my first time using Next.js, I struggled with the client and server
              rendering differences. I struggled especially with the dark mode implementation, since
              what is rendered on server different from client due to local storage changes. To fix
              this issue, I researched how to set the local storage only on the client. After a bit
              of research, I found that using a conditional before changing local storage solves the
              problem. I checked if the the window object&apos;s type is not undefined. When it is
              undefined, it is being rendered on the server since there is no window object. So,
              having it not be undefined means only when the web app is being rendered in the
              browser.
            </p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>What would I change if I started over?</h2>
            <p className={styles.text}>
              I would certainly use TailwindCSS or Styled Components to aid in the CSS styling
              process. Although, I&apos;ve used both before, I find it much easier and more
              efficient and effective to use CSS pre-processors or CSS libraries to aid in the CSS
              design process.
            </p>
          </motion.div>
          <motion.div variants={projectFadeDown} className={styles.section}>
            <h2 className={styles.h2}>Future Plans</h2>
            <p className={styles.text}>
              In the future, I plan on implementing a section about my hobbies and personal
              interests. I believe it is a good idea for users of this web application to know what
              I like to do in my free time.
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