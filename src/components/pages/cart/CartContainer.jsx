import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const {
    cart,
    deleteProductById,
    getTotalQuantity,
    getTotalAmount,
    clearCart,
  } = useContext(CartContext);

  let total = getTotalAmount();
  let totalQuantity = getTotalQuantity();
  return (
    <Cart
      cart={cart}
      deleteProductById={deleteProductById}
      clearCart={clearCart}
      total={total}
      totalQuantity={totalQuantity}
    />
  );
};

export default CartContainer;
