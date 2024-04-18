import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../context/CartContext";
import { motion } from "framer-motion";
import { useVoidAnimation } from "../../../hooks/useVoidAnimation/useVoidAnimation";

const CartButton = (props) => {
  const { variants } = useVoidAnimation();
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

  // Combining initial and shake animations
  const dynamicVariants = {
     hidden: variants.hidden,
    visible: variants.visible,
    shake: {
      x: [0, -10, 0, 10, 0],  // Shake pattern
      transition: {
        duration: 0.5,  
        ease: "easeInOut",
        repeat: 2,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={cartCtx.animationTriggered ? "shake" : "visible"}
      variants={dynamicVariants}
      className="cart"
      onClick={props.openModal}
    >
      {totalCartItems > 0 && (
        <span className="product-count">{totalCartItems}</span>
      )}
      <FontAwesomeIcon icon={faCartShopping} />
    </motion.div>
  );
};

export default CartButton;
