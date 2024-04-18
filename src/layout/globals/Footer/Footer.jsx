import React from "react";
import SocialMediaLinks from "../../../components/company/SocialMediaLinks/SocialMediaLinks";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation/useScrollAnimation";

const Footer = () => {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <footer className="main-footer">
      <motion.div
        className="container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <SocialMediaLinks />
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
