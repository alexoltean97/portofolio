import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../context/CartContext";
import { motion } from "framer-motion";
import { useVoidAnimation } from "../../../hooks/useVoidAnimation/useVoidAnimation";
const CartButton = (props) => {
  const { variants } = useVoidAnimation();

  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

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
