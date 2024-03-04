import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const AsideMenuFooter = () => {
  const { t } = useTranslation();
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <div className="aside-footer">
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faRightFromBracket} />
            {t("logout")}
          </a>
        </li>
        <li>
          <a className="position-relative" href="#">
            <FontAwesomeIcon icon={faMoon} />
            {currentTheme === "Light" ? t("dark") : t("light")}
            <label className="switch">
              <input
                type="checkbox"
                checked={currentTheme === "Dark"}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AsideMenuFooter;
