import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartButton = () => {
  return (
    <div className="cart">
      <span className="product-count">1</span>
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  );
};

export default CartButton;
