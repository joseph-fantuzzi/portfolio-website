import styles from "../styles/Socials.module.css";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const Socials = ({ dark }) => {
  return (
    <div className={styles.socialcontainer}>
      <div className={styles.icons}>
        <a
          className={dark ? styles.linksdark : styles.linkslight}
          href="https://github.com/joseph-fantuzzi"
        >
          <FiGithub size={25} />
        </a>
        <a
          className={dark ? styles.linksdark : styles.linkslight}
          href="https://www.linkedin.com/in/josephfantuzzi/"
        >
          <FiLinkedin size={25} />
        </a>
        <a
          className={dark ? styles.linksdark : styles.linkslight}
          href="https://twitter.com/?lang=en"
        >
          <FiTwitter size={25} />
        </a>
        <a
          className={dark ? styles.linksdark : styles.linkslight}
          href="mailto:dev.josephfantuzzi@gmail.com"
        >
          <FiMail size={25} />
        </a>
        <div className={dark ? styles.linedark : styles.linelight}></div>
      </div>
    </div>
  );
};

export default Socials;
