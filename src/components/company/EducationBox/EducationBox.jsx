import React from "react";
import { useTranslation } from "react-i18next";

const EducationBox = () => {
    const { t } = useTranslation();
  return (
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
  );
};

export default EducationBox;
