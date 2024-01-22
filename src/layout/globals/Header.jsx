import React from "react";
import LanguagePicker from "../../components/utils/LanguagePicker";
import DownloadResume from "../../components/utils/DownloadResume";
import Tooltip from "../../components/portofolio/Tooltip";
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
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
              </Link>
              <DownloadResume />
              <LanguagePicker>
              <Tooltip title="Choose Language" />  
              </LanguagePicker>

              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
