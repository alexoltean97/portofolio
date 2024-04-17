import React from "react";
import { useTranslation } from "react-i18next";

const AboutTexts = () => {
    const { t } = useTranslation();

  return (
    <React.Fragment>
      <h2 id="aboutme-title" className="h2-theme">
        {t("aboutMe")}
      </h2>

      <div className="p-holder">
        <p id="aboutme-desc">{t("aboutText")}</p>
      </div>
    </React.Fragment>
  );
};

export default AboutTexts;
