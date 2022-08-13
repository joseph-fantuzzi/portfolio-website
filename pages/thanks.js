import styles from "../styles/Thanks.module.css";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";

const thanks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.checkmark}>
        <IoMdCheckmark fontSize={50} />
      </div>
      <h1>Thank you for your response!</h1>
      <p>I will get back to you as soon as possible.</p>
      <Link href="/">
        <p className={styles.btn}>
          Return
          <BiArrowBack fontSize={20} style={{ marginLeft: 5 }} />
        </p>
      </Link>
    </div>
  );
};

export default thanks;
