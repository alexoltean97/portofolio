import { useEffect } from "react";
import Cookies from "js-cookie";

const useApplyTheme = () => {
  useEffect(() => {
    const savedColor = Cookies.get('activeColor');
    const colorHexValues = {
      "main-color": "#940642",
      "secondary-color": "#6a5acd",
      "third-color": "#004D40",
      "fourth-color": "#009B77",
      "fifth-color": "#0F52BA",
      "sixth-color": "#008080",
      "seventh-color": "#000080",
    };
    if (savedColor && colorHexValues[savedColor]) {
      document.documentElement.style.setProperty("--main-color", colorHexValues[savedColor]);
    }
  }, []);
};

export default useApplyTheme;
