import React from "react";
import { useTranslation } from "react-i18next";

const Linkedin = () => {
  const { t } = useTranslation();

  return (
    <div id="btn-holder" className="btn-holder">
      <a
        id="btn-linkedin"
        target="_blank"
        href="https://www.linkedin.com/in/alexandru-oltean-96aba7159/"
      >
        {t("linkedinBtn")}
      </a>
    </div>
  );
};

export default Linkedin;
