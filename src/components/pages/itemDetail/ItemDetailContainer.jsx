import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../products.js";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext.jsx";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { addToCart, cart } = useContext(CartContext);

  console.log("carrito", cart);

  const { id } = useParams(); // devuelve un objeto

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  const addOn = (quantity) => {
    let productoParaELCarrito = { ...item, quantity };
    addToCart(productoParaELCarrito);
  };
  return (
    <>
      <ItemDetail item={item} addOn={addOn} />
    </>
  );
};

export default ItemDetailContainer;
