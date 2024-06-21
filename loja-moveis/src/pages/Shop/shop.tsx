import React from "react";
import Qualities from "../../components/qualities";
import Banner from "../../components/banner";
import ProductsShop from "./components/productsShop";
import FilterBar from "./components/filterBar";

const Shop: React.FC = () => {
  return (
    <div>
      <Banner name="Shop" />
      <FilterBar />
      <ProductsShop />
      <Qualities />
    </div>
  );
};

export default Shop;
