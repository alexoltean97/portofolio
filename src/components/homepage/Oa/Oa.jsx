import React from "react";
import Name from "../../company/Name/Name";
import Contact from "../../company/Contact/Contact";
import Portrait from "../../company/Portrait/Portrait";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation/useScrollAnimation";
const Oa = () => {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <div className="oa">
      <motion.div
        className="container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <Name />
            <Contact />
          </div>

          <div className="col-lg-6 col-xs-12">
            <Portrait />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Oa;
