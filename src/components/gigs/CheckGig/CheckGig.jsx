import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation/useScrollAnimation";

const CheckGig = () => {
    const { ref, controls, variants } = useScrollAnimation();

  return (
    <motion.div
    className="check-gig"
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={variants}
  >
      <h2>Check out my gigs</h2>
      <p>
        Explore my diverse gigs and find the perfect match for your project
        needs.
      </p>
    </motion.div>
  );
};

export default CheckGig;
