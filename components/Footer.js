import styles from "../styles/Footer.module.css";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";
import { BiHome } from "react-icons/bi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { CgBriefcase } from "react-icons/cg";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { Link } from "react-scroll";

const Footer = ({ dark, links }) => {
  return (
    <div className={dark ? styles.footercontainerdark : styles.footercontainerlight}>
      <div className={styles.links}>
        <div className={styles.socialscontainer}>
          <a
            rel="noreferrer"
            target="_blank"
            className={styles.link}
            href="https://github.com/joseph-fantuzzi"
          >
            <FiGithub size={20} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className={styles.link}
            href="https://www.linkedin.com/in/josephfantuzzi/"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className={styles.link}
            href="https://twitter.com/joseph_fantuzzi"
          >
            <FiTwitter size={20} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className={styles.link}
            href="mailto:dev.josephfantuzzi@gmail.com"
          >
            <FiMail size={20} />
          </a>
        </div>
        <div className={links ? styles.linkcontainer : styles.hidden}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            className={styles.link}
          >
            <BiHome size={20} />
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-40}
            className={styles.link}
          >
            <MdOutlinePersonOutline size={25} />
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-40}
            className={styles.link}
          >
            <HiOutlinePencil size={20} />
          </Link>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-40}
            className={styles.link}
          >
            <CgBriefcase size={20} />
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            className={styles.link}
          >
            <HiOutlinePaperAirplane size={20} />
          </Link>
        </div>
      </div>
      <p className={styles.text}>Designed and Created By Joseph Fantuzzi 2022</p>
    </div>
  );
};

export default Footer;
