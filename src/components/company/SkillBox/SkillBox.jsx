import React from "react";

const SkillBox = ({ titleKey, descriptionKey, t }) => {
  return (
    <div className="col-lg-6 col-sm-12">
      <div className="skills-box">
        <h5>{t(titleKey)}</h5>
        <p>{t(descriptionKey)}</p>
      </div>
    </div>
  );
};

export default SkillBox;
