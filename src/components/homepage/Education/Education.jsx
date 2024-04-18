import React from "react";
import { useTranslation } from "react-i18next";
import EducationBox from "../../company/EducationBox/EducationBox";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation/useScrollAnimation";

const Education = () => {
  const { t } = useTranslation();
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <div className="education">
      <motion.div
        className="container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h2 id="education-title" className="h2-theme">
          {t("education")}
        </h2>
        <EducationBox
          subtitle={t("bachelorDegree")}
          title={`${t("computerScience")} | Arad 2020 - 2023`}
        />
      </motion.div>
    </div>
  );
};

export default Education;
