import React, { useContext } from "react";
import CartProduct from "../CartProduct/CartProduct";
import CartTable from "../CartTable/CartTable";
import CartTotal from "../CartTotal/CartTotal";
import CartContext from "../../../context/CartContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartClass =
    cartCtx.items.length > 2 ? "cart-products overflow" : "cart-products";

  return (
    <React.Fragment>
      <div className="cart-contents">
        {cartCtx.items.length < 1 ? (
          <p>You have no products in your cart</p>
        ) : (
          <React.Fragment>
            <div className={cartClass}>
              {cartCtx.items.map((item) => (
                <CartProduct
                  key={item.id}
                  path={item.path}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  onIncrease={() => cartCtx.addItem(item)}
                  onDecrease={() => cartCtx.removeItem(item.id)}
                />
              ))}
            </div>
            <CartTable />
            <CartTotal />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
