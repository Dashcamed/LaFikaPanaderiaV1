import React from "react";

const ItemListContainer = ({ greetings }) => {
  return (
    <div className="flex justify-center items-center h-dvh">
      <h1 className="text-5xl font-bold">{greetings}</h1>
    </div>
  );
};

export default ItemListContainer;
