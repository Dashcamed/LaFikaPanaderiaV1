import React from "react";

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h1>{item.title}</h1>
    </div>
  );
};

export default ItemDetail;
