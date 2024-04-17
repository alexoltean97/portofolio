import React from "react";
import WorkBox from "../../../layout/WorkBox/WorkBox";
import { useTranslation } from "react-i18next";
const WorkSection = () => {
  const { t } = useTranslation();
  const experienceData = [
    {
      titleKey: "expTitlePlenty",
      dateKey: "expDatePlenty",
      descriptionKey: "expDescPlenty",
    },
    {
      titleKey: "expTitleUpwork",
      dateKey: "expDateUpwork",
      descriptionKey: "expDescUpwork",
    },
    {
      titleKey: "expTitle123",
      dateKey: "expDate123",
      descriptionKey: "expDesc123",
    },
    {
      titleKey: "expTitleBm",
      dateKey: "expDateBm",
      descriptionKey: "expDescBm",
    },
    {
      titleKey: "expTitleDigital",
      dateKey: "expTitleDigital",
      descriptionKey: "expDescDigital",
    },
  ];
  return (
    <div className="row">
      {experienceData.map((exp, index) => (
        <WorkBox
          key={index}
          title={t(exp.titleKey)}
          date={t(exp.dateKey)}
          description={t(exp.descriptionKey)}
        />
      ))}
    </div>
  );
};

export default WorkSection;
