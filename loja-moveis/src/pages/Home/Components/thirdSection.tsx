import React from "react";
import useFetchApi from "../../../types/fetchApi";
import ProductCard from "../../../components/productCard";
import { NavLink } from "react-router-dom";
import { Splide, SplideSlide } from "react-splide-ts";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const ThirdSection: React.FC = () => {
  const { products, loading, error } = useFetchApi(
    "http://localhost:3001/products"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const justShow = products.slice(0, 8);

  // Configurações do Splide
  const splideOptions = {
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    breakpoints: {
      640: {
        perPage: 1,
        perMove: 1,
      },
      768: {
        perPage: 2,
        perMove: 2,
      },
      948: {
        perPage: 2,
        perMove: 2,
      },
      956: {
        perPage: 3,
        perMove: 3,
      },
      1020: {
        perPage: 3,
        perMove: 3,
      },
    },
  };

  return (
    <div className="my-10 lg:my-20 lg:mx-36">
      <h1 className="font-poppins text-4xl text-center font-bold text-textCard mb-10">
        Our Products
      </h1>

      <div className="hidden lg:block">
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-4 lg:gap-8 lg:px-0 place-items-center">
          {justShow.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <Splide options={splideOptions}>
          {justShow.map((product) => (
            <SplideSlide key={product.id}>
              <ProductCard product={product} />
            </SplideSlide>
          ))}
        </Splide>
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
