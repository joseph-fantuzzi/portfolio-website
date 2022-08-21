import Link from "next/link";
import styles from "../styles/ReturnHome.module.css";
import { motion } from "framer-motion";
import { navigationFadeRight } from "../utils/Animations";

const ReturnHome = ({ isDark }) => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <motion.div
          className={isDark === "dark" ? styles.linkdark : styles.linklight}
          variants={navigationFadeRight}
        >
          <Link href="/">
            <div className={styles.text}>Return Home</div>
          </Link>
        </motion.div>
        <motion.div variants={navigationFadeRight}>
          <div className={isDark === "dark" ? styles.linedark : styles.linelight}></div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReturnHome;
