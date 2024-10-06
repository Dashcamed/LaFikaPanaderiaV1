import { useState } from "react";
import { products } from "../../../products";
import { useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  // va a ser falsy cuando este en home ---> todos los productos
  // va a ser truthy cuando estemos en una categoria ---> parte de los productos

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryName
    );

    const getProducts = new Promise((res, rej) => {
      let isLoged = true;
      if (isLoged) {
        res(categoryName ? filteredProducts : products);
      } else {
        rej({ message: "algo salio mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("entro en el catch", error);
      });
  }, [categoryName]);
  return <ItemList items={items} />;
};

export default ItemListContainer;
