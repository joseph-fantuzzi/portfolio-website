import styles from "../styles/Navbar.module.css";
import Logo from "./Logo";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-scroll";

const Navbar = ({ setMobileNav }) => {
  const links = ["About", "Skills", "Work", "Contact"];

  return (
    <div id="home" className={styles.container}>
      <div className={styles.navcontainer}>
        <Logo />
        <div className={styles.linkcontainer}>
          {links.map((link, index) => {
            return (
              <Link
                key={link}
                activeClass="active"
                to={`${link.toLowerCase()}`}
                spy={true}
                smooth={true}
                offset={0}
                className={styles.links}
              >
                <p className={styles.numbers}>0{index + 1}.</p>
                <p>{link}</p>
              </Link>
            );
          })}
          <a href="#" className={styles.resumelink}>
            Resume
          </a>
        </div>
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
