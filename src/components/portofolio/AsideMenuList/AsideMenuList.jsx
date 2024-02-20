import React from "react";
import useMenuLogic from "../../../hooks/useMenuLogic/useMenuLogic";
import useMenuData from "../../../hooks/useMenuData/useMenuData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AsideMenuList = () => {
  const { activeLink, handleLinkClick } = useMenuLogic("Revenue");
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
