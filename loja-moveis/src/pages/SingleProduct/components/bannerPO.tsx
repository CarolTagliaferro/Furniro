import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Classes } from "../../../utils/tailwindPredefs";

const BannerPO = () => {
  return (
    <div className="bg-mediumBg w-full h-24 ">
      <div className="py-9 px-28 flex">
        <NavLink to={"/"}>
          <span className={Classes.bannerText}>Home</span>
        </NavLink>
        <span className=" px-3">
          <MdOutlineKeyboardArrowRight className="w-9 h-6" />
        </span>
        <NavLink to={"/shop"}>
          <span className={Classes.bannerText}>Shop</span>
        </NavLink>
        <span className="px-3">
          <MdOutlineKeyboardArrowRight className="w-9 h-6" />
        </span>
        <span>Product name</span>
      </div>
    </div>
  );
};

export default BannerPO;
