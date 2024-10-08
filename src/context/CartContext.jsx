import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const deleteProductById = (id) => {
    let filteredArray = cart.filter((product) => product.id !== id);
    setCart(filteredArray);
  };

  const getTotalAmount = () => {
    let totalCart = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return totalCart;
  };

  const getTotalQuantity = () => {
    let totalCartProducts = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return totalCartProducts;
  };

  const clearCart = () => {
    setCart([]);
  };
  let data = {
    cart,
    addToCart,
    deleteProductById,
    getTotalAmount,
    getTotalQuantity,
    clearCart,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
