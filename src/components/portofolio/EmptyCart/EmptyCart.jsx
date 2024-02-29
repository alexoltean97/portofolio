import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
        <h2>You have an empty cart</h2>
      <FontAwesomeIcon icon={faFaceSadTear} />
    </div>
  );
};

export default EmptyCart;
