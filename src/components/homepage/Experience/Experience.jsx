import React from "react";
import WorkSection from "../../company/WorkSection/WorkSection";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation/useScrollAnimation";

const Experience = () => {
  const { t } = useTranslation();
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <div className="work-experience">
          <motion.div
        className="container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h2 id="work-title" className="h2-theme">
          {t("workExperience")}
        </h2>

        <WorkSection />

      </motion.div>
    </div>
  );
};

export default Experience;
