import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
const AsideMenuList = () => {
  return (
    <div className="menu-list">
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHouse} />
            Dashboard
          </a>
        </li>
        <li>
          <a className="active" href="#">
            <FontAwesomeIcon icon={faChartSimple} />
            Revenue
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faBell} />
            Notifications
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faChartPie} />
            Analytics
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHeart} />
            Likes
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faWallet} />
            Wallets
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AsideMenuList;
