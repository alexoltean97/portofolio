import React from "react";
import LanguagePicker from "../../../components/utils/LanguagePicker/LanguagePicker";
import DownloadResume from "../../../components/utils/DownloadResume/DownloadResume";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="main-header sticky-top  py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-side-content">
              <nav className="main-nav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="px-md-3">
                    <Link to="/portofolio">Portofolio</Link>
                  </li>
                  <li className="pl-md-3">
                    <Link to="/gigs">Packages</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-side-content d-flex justify-content-end">
            <DownloadResume />
              <LanguagePicker />
            
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
