import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../products.js";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const id = "2";

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, [id]);
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
