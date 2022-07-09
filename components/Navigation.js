import styles from "../styles/Navigation.module.css";
import { BiHome } from "react-icons/bi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { CgBriefcase } from "react-icons/cg";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { Link } from "react-scroll";

const Navigation = ({ dark }) => {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.icons}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          className={dark ? styles.icondark : styles.iconlight}
          id="home-btn"
        >
          <BiHome size={25} />
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          className={dark ? styles.icondark : styles.iconlight}
          id="about-btn"
        >
          <MdOutlinePersonOutline size={25} />
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          className={dark ? styles.icondark : styles.iconlight}
          id="skills-btn"
        >
          <HiOutlinePencil size={25} />
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={0}
          className={dark ? styles.icondark : styles.iconlight}
          id="work-btn"
        >
          <CgBriefcase size={25} />
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          className={dark ? styles.icondark : styles.iconlight}
          id="contact-btn"
        >
          <HiOutlinePaperAirplane size={25} />
        </Link>
        <div className={dark ? styles.linedark : styles.linelight}></div>
      </div>
    </div>
  );
};

export default Navigation;
