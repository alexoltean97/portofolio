import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";

const CartTotal = () => {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const totalSum = cartTotal + 15 + 20;
  return (
    <div className="cart-total d-flex justify-content-between">
      <div className="total">
        <span>Total</span>
      </div>
      <div className="total-price">
        <span>{totalSum}</span>
      </div>
    </div>
  );
};

export default CartTotal;
