import React from "react";
import useFetchApi from "../../../types/fetchApi";
import ProductCard from "../../../components/productCard";
import { NavLink } from "react-router-dom";

const ThirdSection: React.FC = () => {
  const { products, loading, error } = useFetchApi(
    "http://localhost:3000/products"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const justShow = products.slice(0, 8);

  return (
    <div className="my-10 lg:my-20 lg:mx-36">
      <h1 className="font-poppins text-4xl text-center font-bold text-textCard mb-10">
        Our Products
      </h1>
      <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-4 lg:gap-8 lg:px-0 place-items-center">
        {justShow.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <NavLink to={"/shop"}>
          <button className="font-semibold text-primary border border-primary py-2 px-16 hover:bg-primary hover:text-white transition-all">
            Show More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ThirdSection;
