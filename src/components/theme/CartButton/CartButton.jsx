import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../context/CartContext";
import { useVoidAnimation } from "../../../hooks/useVoidAnimation/useVoidAnimation";

const CartButton = (props) => {
  const { variants } = useVoidAnimation();
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
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
