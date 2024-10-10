import ProductCard from "../../common/productCard/ProductCard";
import SkeletonCard from "../../common/skeletonCard/SkeletonCard";
export const ItemList = ({ items }) => {
  // if con return temprano
  // ternario

  if (items.length === 0) {
    return (
      <div className="grid sm: grid-flow-row grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center py-3 bg-base-100 sm: px-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  return (
    <div className="grid sm: grid-flow-row grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center py-3 bg-base-100 sm: px-3">
      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ItemList;
