import styles from "../styles/Navigation.module.css";
import { BiHome } from "react-icons/bi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { CgBriefcase } from "react-icons/cg";
import { FiMail } from "react-icons/fi";

const Navigation = () => {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.nav}>
        <div className={styles.icon}>
          <BiHome size={17} />
        </div>
        <div className={styles.icon}>
          <MdOutlinePersonOutline size={17} />
        </div>
        <div className={styles.icon}>
          <HiOutlinePencil size={17} />
        </div>
        <div className={styles.icon}>
          <CgBriefcase size={17} />
        </div>
        <div className={styles.icon}>
          <FiMail size={17} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
