import React from "react";
import { useTranslation } from "react-i18next";
import CertificateBox from "../../company/CertificatesBox/CertificatesBox";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation/useScrollAnimation";
const Certificates = () => {
  const { t } = useTranslation();
  const { ref, controls, variants } = useScrollAnimation();

  const certificates = [
    {
      key: "scrum",
      subtitleId: "certificates-subtitle",
      titleKey: "scrum",
      descKey: "scrumLk",
    },
    { key: "agile", titleKey: "agileLkTitle", descKey: "agileLk" },
    { key: "agileMeth", titleKey: "agileMeth", descKey: "agileMethDesc" },
    { key: "itSchool", titleKey: "itSchoolTitle", descKey: "itSchoolDesc" },
    { key: "cambridge", titleKey: "cambridge", descKey: "cambridgeDesc" },
  ];

  // THIS NEEDS IMMEDIATE REFACTORING + IN SCSS

  return (
    <div className="container certificates">
      {certificates.map(({ key, subtitleId, titleKey, descKey }, index) => (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          key={key}
        >
          <h2
            className={`education-title h2-theme ${index !== 0 ? "hide" : ""}`}
          >
            {t("certificates")}
          </h2>
          <CertificateBox
            subtitleId={subtitleId}
            title={t(titleKey)}
            description={t(descKey)}
          />
          <div className="col-lg-6">&nbsp;</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Certificates;
