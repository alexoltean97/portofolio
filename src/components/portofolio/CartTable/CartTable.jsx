import React from "react";

const CartTable = () => {
  return (
    <div className="cart-table">
      <div className="cart-row d-flex justify-content-between">
        <div className="sub-total">
          <span>SubTotal</span>
        </div>
        <div className="sub-total-price">
          <span>$1233</span>
        </div>
      </div>

      <div className="cart-row d-flex justify-content-between">
        <div>
          <span>Shipping</span>
        </div>
        <div>
          <span>$15</span>
        </div>
      </div>

      <div className="cart-row d-flex justify-content-between">
        <div>
          <span>VAT(20%)</span>
        </div>
        <div>
          <span>$31312</span>
        </div>
      </div>

    </div>
  );
};

export default CartTable;
