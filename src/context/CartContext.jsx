import { createContext, useReducer,useEffect } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  triggerAnimation: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...state.items[existingCartItemIndex],
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if(action.type === "TRIGGER_ANIMATION") {
    return { ...state, animationTriggered: action.payload };

  }

  return state;
};

export const CartContextProvider = ({ children }) => {

 const [cart, dispatchCartAction] = useReducer(cartReducer, {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  animationTriggered: false,

});

const addItem = (item) => {
  dispatchCartAction({ type: "ADD_ITEM", item: item });
  dispatchCartAction({ type: "TRIGGER_ANIMATION", payload: true });
  setTimeout(() => {
    dispatchCartAction({ type: "TRIGGER_ANIMATION", payload: false });
  }, 500);  
};

  const removeItem = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  };

  const triggerAnimation = () => {
    dispatchCartAction({ type: "TRIGGER_ANIMATION", payload: true });
    setTimeout(() => {
      dispatchCartAction({ type: "TRIGGER_ANIMATION", payload: false });
    }, 2000); 
  };

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    triggerAnimation,
    animationTriggered: cart.animationTriggered,

  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart.items));
  }, [cart.items]);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
