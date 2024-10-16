import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../configFirebase";
import { products } from "../../../products";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");

    let consulta = itemsCollection;

    if (categoryName) {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    }

    getDocs(consulta).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [categoryName]);

  // const agregarProductos = () => {
  //   products.forEach((product) => {
  //     addDoc(collection(db, "products"), product);
  //   });
  // };
  //crear una promesa
  return (
    <>
      <ItemList items={items} />
      {/* <button className="btn" onClick={agregarProductos}>
        agregar productos
      </button> */}
    </>
  );
};

export default ItemListContainer;
