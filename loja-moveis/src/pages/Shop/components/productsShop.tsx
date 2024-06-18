import React from "react";
import useFetchApi from "../../../types/fetchApi";
import ProductCard from "../../../components/productCard";

const ProductsShop: React.FC = () => {
  const { products, loading, error } = useFetchApi(
    "http://localhost:3000/products"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const repeatProducts = [...products, ...products];

  return (
    <div className="my-10 lg:my-20 lg:mx-36">
      <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-4 lg:gap-8 lg:px-0 place-items-center">
        {repeatProducts.map((product) => (
          <div key={product.id + Math.random()}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsShop;
