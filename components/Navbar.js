import styles from "../styles/Navbar.module.css";
import Logo from "./Logo";
import PaperAirplane from "./PaperAirplane";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-scroll";

const Navbar = ({ setMobileNav }) => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className={styles.container}>
      <div className={styles.navcontainer}>
        <Logo />
        {links.map((link) => {
          return (
            <Link
              key={link}
              activeClass="active"
              to={`${link.toLowerCase()}`}
              spy={true}
              smooth={true}
              offset={0}
              className={link === "Contact" ? styles.contactlink : styles.links}
            >
              <p className={link === "Contact" ? styles.contact : ""}>{link}</p>
              {link === "Contact" ? <PaperAirplane /> : ""}
            </Link>
          );
        })}
        <MenuRoundedIcon
          className={styles.hamburger}
          fontSize="large"
          onClick={() => setMobileNav(true)}
        />
      </div>
    </div>
  );
};

export default Navbar;
