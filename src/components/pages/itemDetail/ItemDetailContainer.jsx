import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext.jsx";
import { db } from "../../../configFirebase.js";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { addToCart, cart, getTotalQuantityById } = useContext(CartContext);

  console.log("carrito", cart);

  const { id } = useParams(); // devuelve un objeto

  let totalAdded = getTotalQuantityById(id);

  useEffect(() => {
    let productCollection = collection(db, "producto");
    let refDoc = doc(productCollection, id);
    let getProduct = getDoc(refDoc);
    getProduct.then((res) => setItem({ ...res.data(), id: res.id }));
  }, [id]);

  const addOn = (quantity) => {
    let productoParaELCarrito = { ...item, quantity };
    addToCart(productoParaELCarrito);
  };
  return (
    <>
      <ItemDetail item={item} addOn={addOn} totalAdded={totalAdded} />
    </>
  );
};

export default ItemDetailContainer;
