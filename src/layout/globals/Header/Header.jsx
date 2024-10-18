import React from "react";
import LanguagePicker from "../../../components/utils/LanguagePicker/LanguagePicker";
import DownloadResume from "../../../components/utils/DownloadResume/DownloadResume";
import Tooltip from "../../../components/portofolio/Tooltip/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header sticky-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-side-content d-flex flex-row">
              {/* <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
              </Link>
              <DownloadResume>
                <Tooltip
                  title="Download Resume"
                  arrow="tooltip-arrow-left-top"
                />
              </DownloadResume>
              <LanguagePicker>
                <Tooltip
                  title="Choose Language"
                  arrow="tooltip-arrow-left-total"
                />
              </LanguagePicker> */}

              <nav className="main-nav">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li className="px-md-3"><Link to="/portofolio">Portofolio</Link></li>
                  <li className="pl-md-3"><Link to="/gigs">Packages</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
