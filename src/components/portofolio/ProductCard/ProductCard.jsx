import React, { useContext, useState } from "react";
import CartContext from "../../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const ProductCard = (props) => {
  const { t } = useTranslation();
  const cartCtx = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const addProductToCart = () => {
    cartCtx.addItem(props.product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000); 
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={props.imagePath}
          alt={`Product Image of ${props.name}`}
          className="card-img-top"
        />
        <div key={props.id} className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <p className="price">${props.price}</p>
          <p>{props.id}</p>
          <div className="input-group mb-3"></div>
          <button
            onClick={addProductToCart}
            className="btn btn-primary shadow-effect"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {isAdded ? t("Added") : t("addTo")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
