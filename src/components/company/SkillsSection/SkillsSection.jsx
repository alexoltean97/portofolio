import React from "react";
import SkillBox from "../SkillBox/SkillBox";
import { useTranslation } from "react-i18next";
const SkillsSection = () => {
  const { t } = useTranslation();
  const skillsData = [
    { titleKey: "feDev", descriptionKey: "feDevDesc" },
    { titleKey: "qualityAssurance", descriptionKey: "qualityDescription" },
    { titleKey: "productManagement", descriptionKey: "productDesc" },
    { titleKey: "agileWorkflow", descriptionKey: "agileDesc" },
  ];
  return (
    <div className="row skill-row">
      {skillsData.map((skill) => (
        <SkillBox
          key={skill.titleKey}
          titleKey={skill.titleKey}
          descriptionKey={skill.descriptionKey}
          t={t}
        />
      ))}
    </div>
  );
};

export default SkillsSection;
