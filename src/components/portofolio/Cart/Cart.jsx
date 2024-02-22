import React, { useState } from "react";
import CartProduct from "../CartProduct/CartProduct";
import CartTable from "../CartTable/CartTable";
import CartTotal from "../CartTotal/CartTotal";

const Cart = () => {
  const [cartItems, setCartItems] = useState([{}, {}, {}]);

  const cartClass =
    cartItems.length > 2 ? "cart-products overflow" : "cart-products";

  return (
    <React.Fragment>
      <div className="cart-contents">
        <div className={cartClass}>
          {cartItems.map((item, index) => (
            <CartProduct key={index} {...item} />
          ))}
        </div>
        <CartTable />
        <CartTotal />
      </div>
    </React.Fragment>
  );
};

export default Cart;
