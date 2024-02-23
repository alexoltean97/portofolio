import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";

const CartTable = () => {

  return (
    <React.Fragment>
    
        <div className="cart-table">
          <div className="cart-row d-flex justify-content-between">
            <div className="sub-total">
              <span>SubTotal</span>
            </div>
            <div className="sub-total-price">
              <span>$test</span>
            </div>
          </div>

          <div className="cart-row d-flex justify-content-between">
            <div>
              <span>Shipping</span>
            </div>
            <div>
              <span>15</span>
            </div>
          </div>

          <div className="cart-row d-flex justify-content-between">
            <div>
              <span>VAT</span>
            </div>
            <div>
              <span>$20</span>
            </div>
          </div>
        </div>
    
    </React.Fragment>
  );
};

export default CartTable;
