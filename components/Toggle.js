import LightModeIcon from "@mui/icons-material/LightMode";
import { FiMoon } from "react-icons/fi";
import styles from "../styles/Toggle.module.css";

const Toggle = ({ dark, setDark, mobile }) => {
  const setTheme = () => {
    setDark(!dark);
    window.localStorage.setItem("theme", `${dark ? "light" : "dark"}`);
  };

  const getToggleClassName = () => {
    if (dark) {
      if (mobile) {
        return styles.toggledarkmobile;
      } else {
        return styles.toggledark;
      }
    } else {
      if (mobile) {
        return styles.togglelightmobile;
      } else {
        return styles.togglelight;
      }
    }
  };

  const getCircleClassName = () => {
    if (dark) {
      if (mobile) {
        return styles.circledarkmobile;
      } else {
        return styles.circledark;
      }
    } else {
      if (mobile) {
        return styles.circlelightmobile;
      } else {
        return styles.circlelight;
      }
    }
  };

  return (
    <div className={getToggleClassName()}>
      <div className={getCircleClassName()} onClick={setTheme}>
        {dark ? (
          <FiMoon className={styles.moon} />
        ) : (
          <LightModeIcon className={mobile ? styles.sunmobile : styles.sun} />
        )}
      </div>
    </div>
  );
};

export default Toggle;
