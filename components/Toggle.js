import LightModeIcon from "@mui/icons-material/LightMode";
import { FiMoon } from "react-icons/fi";
import styles from "../styles/Toggle.module.css";

const Toggle = ({ dark, setDark }) => {
  return (
    <div className={dark ? styles.toggledark : styles.togglelight}>
      <div className={dark ? styles.circledark : styles.circlelight} onClick={() => setDark(!dark)}>
        {dark ? <FiMoon className={styles.moon} /> : <LightModeIcon />}
      </div>
    </div>
  );
};

export default Toggle;
