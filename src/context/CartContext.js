import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
