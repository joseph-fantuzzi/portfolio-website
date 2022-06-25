import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Logo from "./Logo";
import PaperAirplane from "./PaperAirplane";

const Navbar = () => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className={styles.container}>
      <div className={styles.navcontainer}>
        <Logo />
        {links.map((link) => {
          return (
            <div key={link} className={link === "Contact" ? styles.contactlinkcontainer : ""}>
              <Link href={"#"}>
                <a className={link === "Contact" ? styles.contactlink : styles.links}>{link}</a>
              </Link>
              {link === "Contact" ? <PaperAirplane /> : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
