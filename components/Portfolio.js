import styles from "../styles/Portfolio.module.css";
import { useRouter } from "next/router";
import Footer from "./Footer";
import ReturnHome from "./ReturnHome";
import Socials from "./Socials";
import Logo from "./Logo";
import { FiGithub } from "react-icons/fi";
import { TbArrowBackUp } from "react-icons/tb";

const Portfolio = () => {
  const technologies = ["Next.js", "CSS", "Framer Motion"];

  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.portfoliocontainer}>
        <header className={styles.header}>
          <div className={styles.titlecontainer}>
            <Logo animation={false} />
            <h1 className={styles.title}>Portfolio</h1>
            <a
              href="https://github.com/joseph-fantuzzi/portfolio-website"
              rel="noreferrer"
              target="_blank"
              className={styles.link}
            >
              <FiGithub fontSize={25} />
            </a>
          </div>
          <div onClick={handleBack} className={styles.back}>
            <TbArrowBackUp fontSize={35} />
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.section}>
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
          </div>
          <div className={styles.section}>
            <h2 className={styles.h2}>Technologies</h2>
            {technologies.map((tech, i) => {
              return (
                <div className={styles.tech} key={i}>
                  {tech}
                </div>
              );
            })}
          </div>
          <div className={styles.section}>
            <h2 className={styles.h2}>Struggles</h2>
            <p className={styles.text}>
              Since this was my first time using Next.js, I struggled with the client and server
              rendering differences.
            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.h2}>What would I change if I started over?</h2>
            <p className={styles.text}>
              I would certainly use TailwindCSS or Styled Components to aid in the CSS styling
              process. Although, I&apos;ve used both before, I find it much easier and more
              efficient and effective to use CSS pre-processors or CSS libraries to aid in the CSS
              design process.{" "}
            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.h2}>Demo</h2>
          </div>
        </main>
      </div>
      <Footer />
      <ReturnHome />
      <Socials />
    </div>
  );
};

export default Portfolio;
