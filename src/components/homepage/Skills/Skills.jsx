import React from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="my-skills">
      <div className="container">
        <h2 id="skills-title" className="h2-theme">
          {t("mySkills")}
        </h2>

        <div className="row skill-row">
          <div className="col-lg-6 col-sm-12">
            <div className="skills-box">
              <h5 id="skills-heading">{t("feDev")}</h5>
              <p id="skills-desc">{t("feDevDesc")}</p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="skills-box">
              <h5>{t("qualityAssurance")}</h5>
              <p>{t("qualityDescription")}</p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="skills-box">
              <h5>{t("productManagement")}</h5>
              <p>{t("productDesc")}</p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="skills-box">
              <h5>{t("agileWorkflow")}</h5>
              <p>{t("agileDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
