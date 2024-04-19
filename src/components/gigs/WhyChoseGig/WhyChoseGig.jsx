import React from "react";
import { useTranslation } from "react-i18next";

const WhyChooseGig = ({ features }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h4>{t("whyGig")}</h4>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <strong>{feature.title}:</strong> {feature.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseGig;
