import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Classes } from "../utils/tailwindPredefs";
import OverlayCart from "./overlayCart";
import MenuBurger from "./menuBurger";
import Logo from "../images/logo.svg";
import Profile from "../images/profile.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-5">
        <NavLink to="/">
          <div className="flex items-center">
            <img
              className="pl-1 lg:pl-4 w-10 lg:w-auto"
              src={Logo}
              alt="Logo"
            />
            <h1 className="pl-1 font-bold text-2xl lg:text-3xl font-montserrat">
              Furniro
            </h1>
          </div>
        </NavLink>
        <div className="hidden md:flex flex-grow justify-center font-poppins font-medium">
          <ul className="flex space-x-20">
            <li>
              <NavLink to="/" className={Classes.Links}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={Classes.Links}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to={"/errorPage"} className={Classes.Links}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={Classes.Links}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center lg:space-x-8 pr-14">
          <NavLink to="/login">
            <img
              src={Profile}
              alt="Icone login"
              className="lg:w-7 lg:h-5 cursor-pointer"
            />
          </NavLink>
          {/* Overlay cart */}
          <OverlayCart />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="outline-none mobile-menu-button"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-gray-500" />
            ) : (
              <FaBars className="text-2xl text-gray-500" />
            )}
          </button>
        </div>
      </nav>
      {/* Menu burger */}
      <MenuBurger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
