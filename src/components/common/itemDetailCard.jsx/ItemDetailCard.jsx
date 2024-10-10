import React from "react";
import CounterContainer from "../counter/CounterContainer";
import { Link } from "react-router-dom";

const ItemDetailCard = ({ item, addOn, totalAdded }) => {
  return (
    <div className="flex flex-row justify-center">
      <div className="card card-compact lg:card-side lg:w-full xl:w-5/6 bg-base-100 shadow-xl">
        <div>
          <Link
            to={`/Category/${item.category}`}
            className="btn btn-square absolute btn-warning right-px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
        </div>
        <figure>
          <img
            src={item.imageUrl}
            alt={item.title}
            className="rounded-lg h-80 lg:h-96  "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl lg:text-3xl">{item.title}</h2>
          <p className="font-extrabold lg:text-2xl">${item.price}</p>
          <p className="font-semibold lg:text-xl">Stock: {item.stock}</p>
          <p className="lg:text-xl">{item.description}</p>
          <p className="text-xs lg:text-md font-bold">{item.contiene}</p>
          <div className="badge badge-outline capitalize mb-2">
            Categoría: {item.category}
          </div>
          <div className="card-actions justify-between items-center">
            <div>
              <CounterContainer
                stock={item.stock}
                addOn={addOn}
                totalAdded={totalAdded}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailCard;
//absolute right-px
