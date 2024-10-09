import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // let exist = cart.find((element) => element.id === product.id)

    let exist = cart.some((element) => element.id === product.id); //boolean

    if (exist) {
      let newArray = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
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

  const getTotalQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    return product ? product.quantity : 1;
  };
  let data = {
    cart,
    addToCart,
    deleteProductById,
    getTotalAmount,
    getTotalQuantity,
    clearCart,
    getTotalQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
