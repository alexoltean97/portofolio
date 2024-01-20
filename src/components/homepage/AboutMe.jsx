import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const {t} = useTranslation()
  return (
    <div className="about-me">
      <div className="container">
        <h2 className="h2-theme">{t('aboutMe')}</h2>

        <div className="p-holder">
          <p>
          {t('aboutText')}
          </p>
        </div>

        <div className="btn-holder">
          <a href="https://www.linkedin.com/in/alexandru-oltean-96aba7159/">
            {t('linkedinBtn')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
