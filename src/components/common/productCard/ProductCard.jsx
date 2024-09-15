const ProductCard = ({
  title,
  price,
  stock,
  image,
  category,
  description,
  contiene,
}) => {
  return (
    <div className="card card-compact bg-base-100 sm:w-96 w-auto shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl xl:text-2xl">{title}</h2>
        <p className="font-extrabold">${price}</p>
        <p className="font-semibold">Stock: {stock}</p>
        <p>{description}</p>
        <p className="text-xs font-bold">{contiene}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline capitalize">{category}</div>
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
