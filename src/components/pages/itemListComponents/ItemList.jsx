import ProductCard from "../../common/productCard/ProductCard";
export const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="grid sm: grid-flow-row grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center py-3 bg-base-200 sm: px-3">
      {items.map((item) => {
        return (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            stock={item.stock}
            category={item.category}
            description={item.description}
            contiene={item.contiene}
            image={item.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
