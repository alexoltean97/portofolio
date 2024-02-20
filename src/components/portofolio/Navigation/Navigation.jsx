import React from "react";
import useMenuLogic from "../../../hooks/useMenuLogic/useMenuLogic";
import useMenuData from "../../../hooks/useMenuData/useMenuData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  const { activeLink, handleLinkClick } = useMenuLogic("Home");
  const navLinks = useMenuData("navigation");

  return (
    <React.Fragment>
      <div className="menu-1">
        <h2>Rounded navigation bar</h2>
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
