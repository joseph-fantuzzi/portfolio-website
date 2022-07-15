import React, { useRef } from "react";
import styles from "../styles/Contact.module.css";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { motion, useAnimation, useInView } from "framer-motion";
import { scrollRevealFadeUp, initialScrollRevealFadeUp } from "./Animations";

const Contact = ({ dark }) => {
  const contactContainer = useRef(null);
  const isInView = useInView(contactContainer);
  const animationControl = useAnimation();

  isInView ? animationControl.start(scrollRevealFadeUp) : "";

  return (
    <motion.div
      id="contact"
      className={styles.container}
      initial={initialScrollRevealFadeUp}
      animate={animationControl}
      ref={contactContainer}
    >
      <div className={styles.intro}>
        <div className={dark ? styles.icondark : styles.iconlight}>
          <HiOutlinePaperAirplane size={50} />
        </div>
        <h1 className={dark ? styles.titledark : styles.titlelight}>
          <span className={dark ? styles.numberdark : styles.numberlight}>04.</span>Contact Me
        </h1>
      </div>
      <div className={styles.coming}>
        <h1>Coming Soon ...</h1>
      </div>
    </motion.div>
  );
};

export default Contact;
