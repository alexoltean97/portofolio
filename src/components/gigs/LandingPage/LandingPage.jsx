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
  landingPageSimple,
  landingtableItems,
  landingprocessSteps,
} from "../GigsFeatures/LandingPageSingle.js";

const LandingPage = () => {
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
            Front End: Small Business Landing Page Package - 40$ per Landing
            Page
          </Accordion.Header>
          <Accordion.Body>
            <GigDescription description="🚀 Transform Your Design into a Functional Small Business Landing Page! Welcome to the Front End: Small Business Landing Page Package. Have a design ready for your landing page? Let me bring it to life with high-quality front-end development that converts!" />
            <WhyChoseGig
              features={landingPageSimple.map((item) => ({
                title: t(item.title),
                description: t(item.description),
              }))}
            />
            <FeaturesTable
              items={landingtableItems.map((item) => ({
                feature: t(item.feature),
                mark: item.mark ? <FontAwesomeIcon icon={faCheck} /> : null,
              }))}
            />
            <HowItWorks
              steps={landingprocessSteps.map((step) => ({
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

export default LandingPage;
