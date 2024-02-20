import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("Light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "Light" ? "Dark" : "Light");
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
