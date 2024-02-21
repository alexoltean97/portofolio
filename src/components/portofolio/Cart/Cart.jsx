import React from "react";
import PlaceholderImage from "../../../assets/images/placeholder.webp";
import TShort from "../../../assets/images/green-tshirt.png"
const Cart = () => {
  return (
    <React.Fragment>
      <div className="cart-contents">
        <div className="cart-product d-flex">
          <div className="single-product-image">
            <img src={PlaceholderImage} alt="#" />
          </div>

          <div className="single-product-descriptions">
            <h6>MacBook Air 13.6" Laptop</h6>
            <span>Remove</span>
          </div>

          <div className="single-product-price">
            <span>$1,199</span>
          </div>
        </div>


        <div className="cart-pre-total">
            <div className="sub-total">SubTotal</div>
        </div>

        <div className="total">
            <div className="total-2">Total $2034</div>
        </div>

      </div>
    </React.Fragment>
  );
};

export default Cart;
