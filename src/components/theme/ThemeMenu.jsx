import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const ThemeMenu = () => {
  const [activeColor, setActiveColor] = useState("main-color");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleColorClick = (color) => {
    setActiveColor(color);
    document.documentElement.style.setProperty(
      "--main-color",
      colorHexValues[color]
    );
  };

  const handleMenuClick = () => {
    setIsMenuVisible((prev) => !prev);
  };

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

  return (
    <React.Fragment>
      <div
        className="theme-picker"
        onClick={() => handleMenuClick()}
        style={{ display: !isMenuVisible ? "flex" : "none" }}
      >
        <FontAwesomeIcon icon={faGear} />
      </div>

      <div
        className="theme-menu"
        style={{ display: isMenuVisible ? "block" : "none" }}
      >
        <div className="theme-menu-header">
          <h5>Choose Theme</h5>
          <p onClick={() => handleMenuClick()}>X</p>
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
    </React.Fragment>
  );
};

export default ThemeMenu;
