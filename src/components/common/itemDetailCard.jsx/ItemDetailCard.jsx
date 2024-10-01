import React from "react";
import CounterContainer from "../counter/CounterContainer";
import { Link } from "react-router-dom";

const ItemDetailCard = ({ item }) => {
  return (
    <div className="card card-compact lg:card-side bg-base-100 shadow-xl">
      <div>
        <Link
          to={`/Category/${item.category}`}
          className="btn btn-warning absolute right-px"
        >
          Cerrar
        </Link>
      </div>
      <figure>
        <img src={item.imageUrl} alt={item.title} className="rounded-lg " />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl lg:text-4xl">{item.title}</h2>
        <p className="font-extrabold lg:text-3xl">${item.price}</p>
        <p className="font-semibold lg:text-3xl">Stock: {item.stock}</p>
        <p className="lg:text-xl">{item.description}</p>
        <p className="text-xs lg:text-md font-bold">{item.contiene}</p>
        <div className="badge badge-outline capitalize mb-2">
          Categoría: {item.category}
        </div>
        <div className="card-actions justify-between items-center">
          <div>
            <CounterContainer />
          </div>
          <button className="btn btn-primary px-8">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailCard;
