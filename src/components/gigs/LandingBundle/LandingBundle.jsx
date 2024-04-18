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
          Front End: Small Business Landing Page Package - 30$ per Landing Page
          (Minimun 10 pages)
        </Accordion.Header>
        <Accordion.Body>
          <GigDescription description="🚀 Supercharge Your Business with a Bundle of Professionally Coded Landing Pages! Need multiple landing pages? Take advantage of this exclusive offer where you get each page at a reduced rate of $30, provided you need at least 10 pages. Perfect for campaigns, product launches, or a complete site overhaul!"></GigDescription>
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

          <div>
            Ready to Convert Your Design into Reality? Place your order now or
            send a message if you have any questions. Let’s turn your vision
            into a functional landing page that engages and converts!
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </motion.div>
  );
};

export default LandingBundle;
