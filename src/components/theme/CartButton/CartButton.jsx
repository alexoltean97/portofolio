import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../context/CartContext";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <div className="cart" onClick={props.openModal}>
      {totalCartItems > 0 && (
        <span className="product-count">{totalCartItems}</span>
      )}
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  );
};

export default CartButton;
