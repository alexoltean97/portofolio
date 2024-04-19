import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation/useScrollAnimation";
import { useTranslation } from "react-i18next";
const CheckGig = () => {
  const { ref, controls, variants } = useScrollAnimation();
  const { t } = useTranslation();
  return (
    <motion.div
      className="check-gig"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <h2>{t("checkGigs")}</h2>
      <p>{t("diverseGigs")}</p>
    </motion.div>
  );
};

export default CheckGig;
