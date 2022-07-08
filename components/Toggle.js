import LightModeIcon from "@mui/icons-material/LightMode";
import { FiMoon } from "react-icons/fi";
import styles from "../styles/Toggle.module.css";

const Toggle = ({ dark, setDark }) => {
  const setTheme = () => {
    setDark(!dark);
    window.localStorage.setItem("theme", `${dark ? "light" : "dark"}`);
  };

  return (
    <div className={dark ? styles.toggledark : styles.togglelight}>
      <div className={dark ? styles.circledark : styles.circlelight} onClick={setTheme}>
        {dark ? <FiMoon className={styles.moon} /> : <LightModeIcon className={styles.sun} />}
      </div>
    </div>
  );
};

export default Toggle;
