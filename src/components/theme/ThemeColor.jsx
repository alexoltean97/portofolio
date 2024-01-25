import React, { useState } from "react";

const ThemeColor = () => {
  const [activeColor, setActiveColor] = useState("main-color");

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

  const handleColorClick = (color) => {
    setActiveColor(color);
    document.documentElement.style.setProperty(
      "--main-color",
      colorHexValues[color]
    );
  };

  return (
    <div className="theme-menu">
      <div className="theme-menu-header">
        <h5>Choose Theme</h5>
        <p>X</p>
      </div>

      <ul>
        {colors.map((color) => (
          <li key={color}>
            <div
              className={`${color} ${
                activeColor === color ? "active-color" : ""
              }`}
              onClick={() => handleColorClick(color)}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeColor;
