import React, { useState, useEffect } from "react";
import styles from "../styles/Thanks.module.css";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";

const Thanks = () => {
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(window.localStorage.getItem("theme"));
    }
  }, []);

  return (
    <div className={isDark === "dark" ? styles.containerdark : styles.containerlight}>
      <div className={styles.checkmark}>
        <IoMdCheckmark fontSize={50} />
      </div>
      <h1>Thank you for your response!</h1>
      <p>I will get back to you as soon as possible.</p>
      <Link href="/">
        <p className={isDark === "dark" ? styles.btndark : styles.btnlight}>
          Return
          <BiArrowBack fontSize={20} style={{ marginLeft: 5 }} />
        </p>
      </Link>
    </div>
  );
};

export default Thanks;
