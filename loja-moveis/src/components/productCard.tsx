import React, { useState } from "react";
import { Product } from "../types/product";
import { Classes } from "../utils/tailwindPredefs";
import { IoShareSocial } from "react-icons/io5";
import { PiHeartBold } from "react-icons/pi";
import { RiArrowLeftRightLine } from "react-icons/ri";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`bg-lightBg font-poppins relative transition-all${
          isHovered ? "brightness-50" : ""
        }`}
      >
        <img
          className="w-80 h-auto object-cover"
          src={product.image}
          alt={product.name}
        />
        {product.discount && (
          <div className={`${Classes.labelProduct} bg-redAccents`}>
            {product.percentage}
          </div>
        )}
        {product.new && (
          <div className={`${Classes.labelProduct} bg-greenAccents`}>New</div>
        )}

        <div className="mt-4 px-3 pb-5">
          <h2 className="text-2xl font-semibold text-gray-900">
            {product.name}
          </h2>
          <p className="text-gray-600">{product.description}</p>
          <div className="mt-2">
            {product.discount ? (
              <div className="flex items-center gap-6">
                <span className="text-xl font-semibold text-gray-900">
                  {product.price}
                </span>
                <span className="text-gray-400 line-through mr-2">
                  {product.discount}
                </span>
              </div>
            ) : (
              <div className="text-xl font-semibold text-gray-900">
                {product.price}
              </div>
            )}
          </div>
        </div>
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 transition-all duration-300">
          <div>
            <button className="bg-white text-primary font-semibold px-14 py-3">
              Add to Cart
            </button>
          </div>
          <div className="flex gap-5 pt-5">
            <div className={Classes.textIconProduct}>
              <IoShareSocial className="w-5 h-5" />
              <p>Share</p>
            </div>
            <div className={Classes.textIconProduct}>
              <RiArrowLeftRightLine className="w-5 h-5" />
              <p>Compare</p>
            </div>
            <div className={Classes.textIconProduct}>
              <PiHeartBold className="w-5 h-5" />
              <p>Like</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
