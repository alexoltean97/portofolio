import React from "react";
import { motion } from "framer-motion";
import Accordion from "react-bootstrap/Accordion";
import GigDescription from "../GigDescription/GigDescription.jsx";
import WhyChoseGig from "../WhyChoseGig/WhyChoseGig.jsx";
import FeaturesTable from "../FeaturesTable/FeaturesTable.jsx";
import HowItWorks from "../HowItWorks/HowItWorks.jsx";
import Book from "../Book/Book.jsx";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  landingBundle,
  bundleTableItems,
  bundleSteps,
} from "../GigsFeatures/LandingBundle.js";

const LandingBundle = () => {
  const { t } = useTranslation();
  const variants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 30, damping: 10 },
    },
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {t("bundleTitle")}
        </Accordion.Header>
        <Accordion.Body>
          <GigDescription description={t("bundleDescription")}></GigDescription>
          <WhyChoseGig
            features={landingBundle.map((item) => ({
              title: t(item.title),
              description: t(item.description),
            }))}
          />
          <FeaturesTable
            items={bundleTableItems.map((item) => ({
              feature: t(item.feature),
              mark: item.mark ? <FontAwesomeIcon icon={faCheck} /> : null,
            }))}
          />
          <HowItWorks
            steps={bundleSteps.map((step) => ({
              title: t(step.title),
              description: t(step.description),
            }))}
          />

          <Book />

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </motion.div>
  );
};

export default LandingBundle;
