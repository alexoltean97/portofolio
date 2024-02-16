import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const AsideMenuFooter = () => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <div className="aside-footer">
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </a>
        </li>
        <li>
          <a className="position-relative" href="#">
            <FontAwesomeIcon icon={faMoon} />
            {currentTheme === "Light" ? "Dark Mode" : "Light Mode"}
            <label class="switch">
            <input type="checkbox" checked={currentTheme === "Dark"} onChange={toggleTheme} />
              <span class="slider round"></span>
            </label>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AsideMenuFooter;
