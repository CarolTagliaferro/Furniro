import React from "react";
import Qualities from "../../components/qualities";
import Banner from "../../components/banner";
import ProductsShop from "./components/productsShop";

const Shop: React.FC = () => {
  return (
    <div>
      <Banner name="Shop" />
      <ProductsShop />
      <Qualities />
    </div>
  );
};

export default Shop;
