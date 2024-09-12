import { useState } from "react";
import { products } from "../../../products";
import { useEffect } from "react";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      let isLoged = true;
      if (isLoged) {
        res({ products });
      } else {
        rej({ message: "algo salio mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response.products);
      })
      .catch((error) => {
        console.log("entro en el catch", error);
      });
  }, []);
  //crear una promesa
  return <ItemList items={items} />;
};

export default ItemListContainer;
