import React, { useContext } from "react";
import CartProduct from "../CartProduct/CartProduct";
import CartTable from "../CartTable/CartTable";
import CartTotal from "../CartTotal/CartTotal";
import CartContext from "../../../context/CartContext";

const Cart = () => {
  // const [cartItems, setCartItems] = useState([{}, {}]);

  // const cartClass =
  //   cartItems.length > 2 ? "cart-products overflow" : "cart-products";

  const cartCtx = useContext(CartContext);

  return (
    <React.Fragment>
      <div className="cart-contents">
        {/* <div className={cartClass}>
          {cartItems.map((item, index) => (
            <CartProduct key={index} {...item} />
          ))}
        </div> */}

        <div className="cart-products">
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
      </div>
    </React.Fragment>
  );
};

export default Cart;
