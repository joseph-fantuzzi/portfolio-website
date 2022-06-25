import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Logo from "./Logo";

const Navbar = () => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className={styles.container}>
      <div className={styles.navcontainer}>
        <Logo />
        {links.map((link) => {
          return (
            <Link key={link} href={"#"}>
              <a className={link === "Contact" ? styles.contactlink : styles.links}>{link}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
