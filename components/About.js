import styles from "../styles/About.module.css";
import { MdOutlinePersonOutline } from "react-icons/md";

const About = () => {
  return (
    <div id="about" className={styles.aboutcontainer}>
      <div className={styles.about}>
        <div className={styles.intro}>
          <MdOutlinePersonOutline size={50} />
          <h1 className={styles.title}>About Me</h1>
        </div>
        <p className={styles.text}>
          I&apos;m a former Penn State Architectural Engineering student pursuing a dream of
          innovation to becoming a Full Stack Engineer for Web2 and Web3. I recently graduated from
          a 6 month Full Stack Development program at Bloom Institute of Technology. During my time
          there, I learned a wide variety of concepts ranging from Frontend Development, Backend
          Development, and Computer Science. Currently, I&apos;m building out different applications
          to enhance my skills as a developer. In the future, I plan on learning Blockchain/Web3
          Development to further my knowledge in the world of decentralization. My current
          experience includes building frontend applications with view-layer functionality and
          efficient logic, backend applications that provide an API with endpoints for accessing and
          manipulating the database server, and full stack applications that encompass both client
          and server integrations. Experience with authentication systems, relational database
          management systems, and client-server relationships.
        </p>
      </div>
    </div>
  );
};

export default About;
