import React from "react";
import BannerPO from "./components/bannerPO";
import OneProduct from "./components/oneProduct";

const SingleProduct: React.FC = () => {
  return (
    <main className="font-poppins">
      <BannerPO />
      <OneProduct />
    </main>
  );
};

export default SingleProduct;
