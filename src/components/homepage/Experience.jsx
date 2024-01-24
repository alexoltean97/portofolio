import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <div className="work-experience">
      <div className="container">
        <h2 id="work-title" className="h2-theme">{t("workExperience")}</h2>

        <div className="row">
          <div className="col-lg-6">
            <div className="work-box">
              <h5 id="work-subtitle">{t("expTitlePlenty")}</h5>
              <span id="work-place">
                <strong>{t("expDatePlenty")}</strong>
              </span>
              <p id="work-description">
                {t("expDescPlenty")} <a href="#">{t("readMore")}</a>
              </p>
            </div>
          </div>
       

          <div className="col-lg-6">
            <div className="work-box">
              <h5>{t("expTitleUpwork")}</h5>
              <span>
                <strong>{t("expDateUpwork")}</strong>
              </span>
              <p>
                {t("expDescUpwork")}
                <a href="#">{t("readMore")}</a>
              </p>
            </div>
          </div>

          

          <div className="col-lg-6">
            <div className="work-box">
              <h5>{t("expTitle123")}</h5>
              <span>
                <strong>{t("expDate123")}</strong>
              </span>
              <p>
                {t("expDesc123")} <a href="#">{t("readMore")}</a>
              </p>
            </div>
          </div>

        
          <div className="col-lg-6">
            <div className="work-box">
              <h5>{t("expTitleBm")}</h5>
              <span>
                <strong>{t("expDateBm")}</strong>
              </span>
              <p>
                {t("expDescBm")} <a href="#">{t("readMore")}</a>
              </p>
            </div>
          </div>

        

          <div className="col-lg-6">
            <div className="work-box">
              <h5>{t("expTitleDigital")}</h5>
              <span>
                <strong>{t("expTitleDigital")}</strong>
              </span>
              <p>
                {t("expDescDigital")} <a href="#">{t("readMore")}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
