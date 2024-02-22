import React from "react";
import CartProduct from "../CartProduct/CartProduct";
import CartTable from "../CartTable/CartTable";
import CartTotal from "../CartTotal/CartTotal";

const Cart = () => {
  return (
    <React.Fragment>
      <div className="cart-contents">
        <CartProduct />
        <CartTable />
        <CartTotal />
      </div>
    </React.Fragment>
  );
};

export default Cart;
