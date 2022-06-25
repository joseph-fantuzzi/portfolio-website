import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Logo from "./Logo";
import PaperAirplane from "./PaperAirplane";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Navbar = () => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className={styles.container}>
      <div className={styles.navcontainer}>
        <Logo />
        {links.map((link) => {
          return (
            <Link key={link} href={"#"}>
              <a className={link === "Contact" ? styles.contactlink : styles.links}>
                <p className={link === "Contact" ? styles.contact : ""}>{link}</p>
                {link === "Contact" ? <PaperAirplane /> : ""}
              </a>
            </Link>
          );
        })}
        <MenuRoundedIcon className={styles.hamburger} fontSize="large" />
      </div>
    </div>
  );
};

export default Navbar;
