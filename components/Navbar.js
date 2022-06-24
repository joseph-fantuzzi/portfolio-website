import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className={styles.navcontainer}>
      {links.map((link) => {
        return (
          <Link key={link} href={"#"}>
            <a>{link}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
