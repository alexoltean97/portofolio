import React from "react";
import PlaceholderPortrait from "../../assets/images/placeholder-oa.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Oa = () => {
  const { t } = useTranslation()
  return (
    <div className="oa">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <div className="company-name">
              <h1 id="main-title">
                Oltean <span>Alexandru</span>
              </h1>
              <p id="description">{t('Iam')}</p>
            </div>

            <div className="company-contact">
            <a href="#">{t("contactBtn")}</a>
              <Link to="/portofolio">{t('portofolioBtn')}</Link>
            </div>
          </div>

          <div className="col-lg-6 col-xs-12">
            <div className="image">
              <img src={PlaceholderPortrait} alt="Placeholder Portrat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oa;
