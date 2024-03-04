import React from 'react';
import useThemeColor from "../../../hooks/useThemeColor/useThemeColor";

const ThemeColor = () => {
  const colorHexValues = {
    "main-color": "#940642",
    "secondary-color": "#6a5acd",
    "third-color": "#004D40",
    "fourth-color": "#009B77",
    "fifth-color": "#0F52BA",
    "sixth-color": "#008080",
    "seventh-color": "#000080",
  };

  const colors = [
    "main-color",
    "secondary-color",
    "third-color",
    "fourth-color",
    "fifth-color",
    "sixth-color",
    "seventh-color",
  ];

  const [activeColor, updateThemeColor] = useThemeColor(colorHexValues);

  return (
    <div className="theme-menu">
      <div className="theme-menu-header"></div>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <div
              className={`${color} ${activeColor === color ? "active-color" : ""}`}
              onClick={() => updateThemeColor(color)}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeColor;
