import React from "react";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className="education">
      <div className="container">
        <h2 id="education-title" className="h2-theme">
          {t("education")}
        </h2>

        <div className="row">
          <div className="col-lg-6">
            <div className="education-box">
              <h5 id="education-subtitle">{t("bachelorDegree")}</h5>
              <span id="education">
                <strong>{t("computerScience")} | Arad 2020 - 2023</strong>
              </span>
            </div>
          </div>
          <div className="col-lg-6">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
