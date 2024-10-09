import React from "react";
import ItemDetailCard from "../../common/itemDetailCard.jsx/ItemDetailCard";

const ItemDetail = ({ item, addOn, totalAdded }) => {
  return (
    <div className="h-fit my-5 mx-2">
      <ItemDetailCard
        item={item}
        {...item}
        addOn={addOn}
        totalAdded={totalAdded}
      />
    </div>
  );
};

export default ItemDetail;
