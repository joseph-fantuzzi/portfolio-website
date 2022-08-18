import styles from "../styles/Navigation.module.css";
import { BiHome } from "react-icons/bi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { CgBriefcase } from "react-icons/cg";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navigationFadeRight, navigationFadeRightContainer } from "../utils/Animations";

const Navigation = ({ dark }) => {
  return (
    <div className={styles.navcontainer}>
      <motion.div variants={navigationFadeRightContainer} className={styles.icons}>
        <motion.div variants={navigationFadeRight}>
          <div className={dark ? styles.icondarkcontainer : styles.iconlightcontainer}>
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
          </div>
        </motion.div>
        <motion.div variants={navigationFadeRight}>
          <div className={dark ? styles.icondarkcontainer : styles.iconlightcontainer}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-40}
              className={dark ? styles.icondark : styles.iconlight}
            >
              <MdOutlinePersonOutline size={25} />
            </Link>
          </div>
        </motion.div>
        <motion.div variants={navigationFadeRight}>
          <div className={dark ? styles.icondarkcontainer : styles.iconlightcontainer}>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-40}
              className={dark ? styles.icondark : styles.iconlight}
            >
              <HiOutlinePencil size={25} />
            </Link>
          </div>
        </motion.div>
        <motion.div variants={navigationFadeRight}>
          <div className={dark ? styles.icondarkcontainer : styles.iconlightcontainer}>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-40}
              className={dark ? styles.icondark : styles.iconlight}
            >
              <CgBriefcase size={25} />
            </Link>
          </div>
        </motion.div>
        <motion.div variants={navigationFadeRight}>
          <div className={dark ? styles.icondarkcontainer : styles.iconlightcontainer}>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-40}
              className={dark ? styles.icondark : styles.iconlight}
            >
              <HiOutlinePaperAirplane size={25} />
            </Link>
          </div>
        </motion.div>
        <motion.div variants={navigationFadeRight}>
          <div className={dark ? styles.linedark : styles.linelight}></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navigation;
