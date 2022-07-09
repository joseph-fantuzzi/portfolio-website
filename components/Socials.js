import styles from "../styles/Socials.module.css";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const Socials = ({ dark }) => {
  return (
    <div className={styles.socialcontainer}>
      <div className={styles.icons}>
        <a
          className={dark ? styles.linksdark : styles.linkslight}
          href="https://github.com/joseph-fantuzzi"
          id="github"
        >
          <FiGithub size={25} />
        </a>
        <a
          className={dark ? styles.linksdark : styles.linkslight}
          href="https://www.linkedin.com/in/josephfantuzzi/"
          id="linkedin"
        >
          <FiLinkedin size={25} />
        </a>
        <a
          className={dark ? styles.linksdark : styles.linkslight}
          href="https://twitter.com/?lang=en"
          id="twitter"
        >
          <FiTwitter size={25} />
        </a>
        <a
          className={dark ? styles.linksdark : styles.linkslight}
          href="mailto:dev.josephfantuzzi@gmail.com"
          id="email"
        >
          <FiMail size={25} />
        </a>
        <div className={dark ? styles.linedark : styles.linelight}></div>
      </div>
    </div>
  );
};

export default Socials;
