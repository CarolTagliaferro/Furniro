import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { Classes } from "../utils/tailwindPredefs";

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MenuBurger: React.FC<Props> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-2/5 w-2/4 bg-mediumBg shadow-md z-50 rounded-md transform transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={toggleMenu} className="p-5">
        <FaTimes className="text-2xl text-font" />
      </button>
      <ul className="flex flex-col space-y-4 p-4 text-center">
        <li>
          <NavLink to="/" className={Classes.Links} onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={Classes.Links} onClick={toggleMenu}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/errorPage"
            className={Classes.Links}
            onClick={toggleMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={Classes.Links} onClick={toggleMenu}>
            Contact
          </NavLink>
        </li>
        <li className="flex gap-2 justify-center">
          <NavLink to="/login">
            <img
              src="https://furniro-at.s3.amazonaws.com/Icons/login.png"
              alt="Icone login"
              className="w-7 h-6"
            />
          </NavLink>
          <NavLink to="/cart">
            <img
              src="https://furniro-at.s3.amazonaws.com/Icons/shopping-cart.png"
              alt="Carrinho compras"
              className="w-auto h-auto"
            />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuBurger;
