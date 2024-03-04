import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMenuLogic from "../../../hooks/useMenuLogic/useMenuLogic";
import useMenuData from "../../../hooks/useMenuData/useMenuData";
import { useTranslation } from "react-i18next";

const AsideMenuList = () => {
  const { t } = useTranslation();
  const { activeLink, handleLinkClick } = useMenuLogic(t("revenue"));
  const navLinks = useMenuData("asideMenuList");

  return (
    <div className="menu-list">
      <ul>
        {navLinks.map((link, index) => (
          <React.Fragment key={index}>
            <li className={link.title === activeLink ? "active-parent" : ""}>
              <a
                className={link.title === activeLink ? "active" : ""}
                onClick={() => handleLinkClick(link.title)}
              >
                <FontAwesomeIcon icon={link.icon} />
                {link.title}
              </a>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default AsideMenuList;
