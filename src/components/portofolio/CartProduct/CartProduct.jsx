import React from "react";
import PlaceholderImage from "../../../assets/images/placeholder.webp";
import TShort from "../../../assets/images/green-tshirt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CartProduct = () => {
  return (
    <div className="cart-product d-flex">
      <div className="single-product-image">
        <img src={PlaceholderImage} alt="#" />
      </div>

      <div className="single-product-descriptions">
        <h5>MacBook Air 13.6" Laptop</h5>
        <span className="d-block stock-label">In Stock</span>
        <span className="remove-label">
          <FontAwesomeIcon icon={faTrash} />
          Remove
        </span>
      </div>

      <div className="single-product-price">
        <span>$1,199</span>
      </div>

      <div className="cart-qty">
        <button disabled><FontAwesomeIcon icon={faMinus} /></button>
        <span>1</span>
        <button><FontAwesomeIcon icon={faPlus} /></button>
      </div>


    </div>
  );
};

export default CartProduct;
