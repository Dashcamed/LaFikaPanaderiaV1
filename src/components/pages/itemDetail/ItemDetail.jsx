import React from "react";
import ItemDetailCard from "../../common/itemDetailCard.jsx/ItemDetailCard";

const ItemDetail = ({ item }) => {
  return (
    <div className="h-fit my-5 mx-2">
      <ItemDetailCard item={item} {...item} />
    </div>
  );
};

export default ItemDetail;
