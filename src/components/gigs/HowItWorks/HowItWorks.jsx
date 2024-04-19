import React from "react";
import { useTranslation } from "react-i18next";

const HowItWorks = ({ steps }) => {
  const { t } = useTranslation();
  return (
    <div>
      <h4>{t("howWorks")}:</h4>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            <strong>{step.title}:</strong> {step.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowItWorks;
