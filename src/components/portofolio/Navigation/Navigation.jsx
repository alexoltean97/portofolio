import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faCookie } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const Navigation = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { title: "Home", icon: faHouse },
    { title: "About", icon: faCircleInfo },
    { title: "Contact", icon: faAddressBook },
    { title: "Cookies", icon: faCookie },
  ];

  const handleLinkClick = (title) => {
    setActiveLink(title);
  };

  return (
    <React.Fragment>

      <div className="menu-1 container">
      <h2>Rounded navigation bar</h2>
      <nav className="portfolio-navbar">
        <ul>
          {navLinks.map((link, index) => (
            <React.Fragment key={index}>
              <li className={link.title === activeLink ? "active-parent" : ""}>
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
