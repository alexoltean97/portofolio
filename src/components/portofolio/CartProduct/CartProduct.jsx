import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CartProduct = (props) => {
  return (
    <div className="cart-product d-flex">
      <div className="single-product-image">
        <img src={props.path} alt="#" />
      </div>

      <div className="single-product-descriptions">
        <h5>{props.name}</h5>
        <span className="d-block stock-label">In Stock</span>
      </div>

      <div className="single-product-price">
        <span className="price-single">${props.price}</span>
        <div className="cart-qty">
          <button onClick={props.onDecrease}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span>{props.quantity}</span>
          <button onClick={props.onIncrease}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
