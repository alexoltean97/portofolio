import React from "react";
import useMenuLogic from "../../../hooks/useMenuLogic/useMenuLogic";
import useMenuData from "../../../hooks/useMenuData/useMenuData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
const Navigation = () => {
  const { t } = useTranslation();
  const { activeLink, handleLinkClick } = useMenuLogic(t("homeComponentLi"));
  const navLinks = useMenuData("navigation");

  return (
    <React.Fragment>
      <div className="menu-1">
        <h2>{t("roundedNavigation")}</h2>
        <nav className="portfolio-navbar">
          <ul>
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                <li
                  className={link.title === activeLink ? "active-parent" : ""}
                >
                  <a
                    href="#"
                    className={link.title === activeLink ? "active" : ""}
                    onClick={() => handleLinkClick(link.title)}
                  >
                    {link.title}
                    <FontAwesomeIcon icon={link.icon} />
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
