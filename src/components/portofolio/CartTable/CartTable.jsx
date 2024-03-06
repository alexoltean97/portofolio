import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";
import { useTranslation } from "react-i18next";
const CartTable = () => {
  const { t } = useTranslation();
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  return (
    <React.Fragment>
      <div className="cart-table">
        <div className="cart-row d-flex justify-content-between">
          <div className="sub-total">
            <span>{t("subTotal")}</span>
          </div>
          <div className="sub-total-price">
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-row d-flex justify-content-between">
          <div>
            <span>{t("shipping")}</span>
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
