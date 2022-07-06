import styles from "../styles/Navigation.module.css";
import { BiHome } from "react-icons/bi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { CgBriefcase } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.nav}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          className={styles.icon}
        >
          <BiHome size={17} />
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          className={styles.icon}
        >
          <MdOutlinePersonOutline size={17} />
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          className={styles.icon}
        >
          <HiOutlinePencil size={17} />
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          className={styles.icon}
        >
          <CgBriefcase size={17} />
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          className={styles.icon}
        >
          <FiMail size={17} />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
