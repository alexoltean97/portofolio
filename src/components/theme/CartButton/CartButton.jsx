import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartButton = (props) => {
  return (
    <div className="cart" onClick={props.openModal}>
      <span className="product-count">1</span>
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  );
};

export default CartButton;
