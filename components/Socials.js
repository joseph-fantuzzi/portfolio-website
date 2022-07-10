import styles from "../styles/Socials.module.css";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { socialsFadeLeftContainer, socialsFadeLeft } from "./Animations";

const Socials = ({ dark }) => {
  return (
    <div className={styles.socialcontainer}>
      <motion.div variants={socialsFadeLeftContainer} className={styles.icons}>
        <motion.div variants={socialsFadeLeft}>
          <a
            className={dark ? styles.linksdark : styles.linkslight}
            href="https://github.com/joseph-fantuzzi"
            id="github"
          >
            <FiGithub size={25} />
          </a>
        </motion.div>
        <motion.div variants={socialsFadeLeft}>
          <a
            className={dark ? styles.linksdark : styles.linkslight}
            href="https://www.linkedin.com/in/josephfantuzzi/"
            id="linkedin"
          >
            <FiLinkedin size={25} />
          </a>
        </motion.div>
        <motion.div variants={socialsFadeLeft}>
          <a
            className={dark ? styles.linksdark : styles.linkslight}
            href="https://twitter.com/?lang=en"
            id="twitter"
          >
            <FiTwitter size={25} />
          </a>
        </motion.div>
        <motion.div variants={socialsFadeLeft}>
          <a
            className={dark ? styles.linksdark : styles.linkslight}
            href="mailto:dev.josephfantuzzi@gmail.com"
            id="email"
          >
            <FiMail size={25} />
          </a>
        </motion.div>
        <motion.div
          variants={socialsFadeLeft}
          className={dark ? styles.linedark : styles.linelight}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Socials;
