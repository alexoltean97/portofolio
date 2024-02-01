import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const {t} = useTranslation()
  return (
    <div className="about-me">
      <div className="container">
        <h2 id="aboutme-title" className="h2-theme">{t('aboutMe')}</h2>

        <div className="p-holder">
          <p id="aboutme-desc">
          {t('aboutText')}
          </p>
        </div>

        <div id="btn-holder" className="btn-holder">
          <a id="btn-linkedin" href="https://www.linkedin.com/in/alexandru-oltean-96aba7159/">
            {t('linkedinBtn')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
