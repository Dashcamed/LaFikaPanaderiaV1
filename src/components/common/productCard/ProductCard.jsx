import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, stock, imageUrl, category }) => {
  return (
    <div className="card card-side md:card card-compact bg-base-100 w-80 md:w-80 shadow-xl">
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl xl:text-2xl">{title}</h2>
        <p className="font-bold xl:text-xl">${price} CLP</p>
        <p className="font-semibold">Stock: {stock}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline capitalize">{category}</div>
          <Link to={`/ProductDetail/${id}`}>
            <button className="btn btn-primary">Ver más</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
