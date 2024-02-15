import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const AsideMenuFooter = () => {
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
            Dark Mode
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AsideMenuFooter;
