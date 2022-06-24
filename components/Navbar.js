import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className={styles.navcontainer}>
      <Image width={100} height={100} src="/Logo.png" alt="Logo" />
      {links.map((link) => {
        return (
          <Link key={link} href={"#"}>
            <a className={link === "Contact" ? styles.contactlink : styles.links}>{link}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
