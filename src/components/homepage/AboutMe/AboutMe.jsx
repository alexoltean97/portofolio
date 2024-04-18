import React from "react";
import Linkedin from "../../company/Linkedin/Linkedin";
import AboutTexts from "../../company/AboutTexts/AboutTexts";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation/useScrollAnimation";
const AboutMe = () => {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <div className="about-me">
      <motion.div
        className="container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <AboutTexts />
        <Linkedin />
      </motion.div>
    </div>
  );
};

export default AboutMe;
