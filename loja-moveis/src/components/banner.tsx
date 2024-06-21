import React from "react";
import { NavLink } from "react-router-dom";

interface NameProps {
  name: string;
}

const Banner: React.FC<NameProps> = ({ name }) => {
  return (
    <div className="font-poppins relative">
      <img
        className="w-full lg:h-auto h-40"
        src="https://furniro-at.s3.amazonaws.com/Products/backgroundShop.png"
        alt="Banner"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img
          className="lg:pb-5 pb-3"
          src="https://furniro-at.s3.amazonaws.com/Icons/logo.png"
          alt="logo"
        />
        <h1 className="font-medium text-3xl lg:text-5xl pb-3">{name}</h1>
        <p>
          <NavLink className="font-bold hover:underline pr-1" to={"/"}>
            Home
          </NavLink>
          &gt; {name}
        </p>
      </div>
    </div>
  );
};

export default Banner;
