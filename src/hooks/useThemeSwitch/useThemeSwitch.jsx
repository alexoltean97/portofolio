import { useState } from "react";

const useThemeSwitch = () => {
  const [currentTheme, setCurrentTheme] = useState("Light");

  return { currentTheme, setCurrentTheme };
};

export default useThemeSwitch;
