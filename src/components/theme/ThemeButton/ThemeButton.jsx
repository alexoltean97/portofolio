import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useBottomUpAnimation } from "../../../hooks/useBottomUpAnimation/useBottomUpAnimation";
const ThemeButton = (props) => {
  const { variants } = useBottomUpAnimation();

  return (
    <motion.div
      className="theme-picker"
      onClick={props.openModal}
      initial="hidden"
      animate="visible"
      whileHover={{
        rotate: 180,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      variants={variants}
    >
      <FontAwesomeIcon icon={faGear} />
    </motion.div>
  );
};

export default ThemeButton;
