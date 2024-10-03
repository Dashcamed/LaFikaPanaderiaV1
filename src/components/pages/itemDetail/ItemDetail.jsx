import React from "react";
import ItemDetailCard from "../../common/itemDetailCard.jsx/ItemDetailCard";

const ItemDetail = ({ item, addOn }) => {
  return (
    <div className="h-fit my-5 mx-2">
      <ItemDetailCard item={item} {...item} addOn={addOn} />
    </div>
  );
};

export default ItemDetail;
