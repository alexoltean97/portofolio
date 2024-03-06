import React from "react";
import { useTranslation } from "react-i18next";

const Certificates = () => {
  const { t } = useTranslation();
  return (
    <div className="certificates">
      <div className="container">
        <h2 id="certificates-title" className="h2-theme">
          {t("certificates")}
        </h2>

        <div className="row">
          <div className="col-lg-6">
            <div className="certificates-box">
              <h5 id="certificates-subtitle">{t("scrum")}</h5>
              <span id="certificate">
                <strong>{t("scrumLk")}</strong>
              </span>
            </div>
          </div>
          <div className="col-lg-6">&nbsp;</div>

          <div className="col-lg-6">
            <div className="certificates-box">
              <h5>{t("agileLkTitle")}</h5>
              <span>
                <strong>{t("agileLk")}</strong>
              </span>
            </div>
          </div>

          <div className="col-lg-6">&nbsp;</div>

          <div className="col-lg-6">
            <div className="certificates-box">
              <h5>{t("agileMeth")}</h5>
              <span>
                <strong>{t("agileMethDesc")}</strong>
              </span>
            </div>
          </div>

          <div className="col-lg-6">&nbsp;</div>
          <div className="col-lg-6">
            <div className="certificates-box">
              <h5>{t("itSchoolTitle")}</h5>
              <span>
                <strong>{t("itSchoolDesc")}</strong>
              </span>
            </div>
          </div>

          <div className="col-lg-6">&nbsp;</div>

          <div className="col-lg-6">
            <div className="certificates-box">
              <h5>{t("cambridge")}</h5>
              <strong>{t("cambridgeDesc")}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
