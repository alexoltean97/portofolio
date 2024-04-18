import React from "react";
import { useTranslation } from "react-i18next";

const Name = () => {
  const { t } = useTranslation();
  return (
    <div className="company-name">
      <h1 id="main-title">
        Oltean <span>Alexandru</span>
      </h1>
      <p id="description">{t("Iam")}</p>
    </div>
  );
};

export default Name;
