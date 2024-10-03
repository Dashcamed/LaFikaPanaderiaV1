import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../products.js";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { id } = useParams(); // devuelve un objeto

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  const addOn = (cantidad) => {
    console.log("agregado al carrito");
    console.log(item);
    console.log(cantidad);
  };
  return (
    <>
      <ItemDetail item={item} addOn={addOn} />
    </>
  );
};

export default ItemDetailContainer;
