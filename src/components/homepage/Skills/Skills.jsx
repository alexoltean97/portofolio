import React from "react";
import SkillsSection from "../../company/SkillsSection/SkillsSection";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation/useScrollAnimation";
const Skills = () => {
  const { t } = useTranslation();
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <div className="my-skills">
      <motion.div
        className="container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h2 id="skills-title" className="h2-theme">
          {t("mySkills")}
        </h2>

        <SkillsSection />
      </motion.div>
    </div>
  );
};

export default Skills;
