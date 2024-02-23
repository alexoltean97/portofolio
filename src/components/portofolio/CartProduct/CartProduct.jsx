import React, { useContext } from "react";
import PlaceholderImage from "../../../assets/images/placeholder.webp";
import TShort from "../../../assets/images/green-tshirt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../context/CartContext";

const CartProduct = () => {
  const cartCtx = useContext(CartContext);
  return (
    <React.Fragment>
      {cartCtx.items.map((item) => (
        <div key={item.id} className="cart-product d-flex">
          <div className="single-product-image">
            <img src={item.path} alt="#" />
          </div>

          <div className="single-product-descriptions">
            <h5>{item.name}</h5>
            <span className="d-block stock-label">In Stock</span>
            <span className="remove-label">
              <FontAwesomeIcon icon={faTrash} />
              Remove
            </span>
          </div>

          <div className="single-product-price">
            <span>${item.price}</span>
          </div>

          <div className="cart-qty">
            <button disabled>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{item.quantity}</span>
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default CartProduct;
