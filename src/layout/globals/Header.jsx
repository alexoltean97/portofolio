import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import GermanFlag from "../../assets/images/de-huge.png";
import UkFlag from "../../assets/images/uk-huge.png";
import RoFlag from "../../assets/images/ro-huge.png";

const Header = () => {
  return (
    <header className="main-header sticky-top">
      <div className="container">
        <div className="icon-group">
          <ul>

            <li>
              <FontAwesomeIcon icon={faHouse} />
            </li>
            <li>
              <a href="#">
                <img src={RoFlag} alt="GErman flag" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={UkFlag} alt="GErman flag" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={GermanFlag} alt="GErman flag" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
