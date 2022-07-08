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
        >
          <HiOutlinePaperAirplane size={25} />
        </Link>
        <div className={dark ? styles.linedark : styles.linelight}></div>
      </div>
    </div>
  );
};

export default Navigation;
