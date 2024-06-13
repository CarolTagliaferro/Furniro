import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Classes } from "../utils/tailwindPredefs";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-5">
        <NavLink to="/loja-moveis/src/pages/Home/home.tsx">
          <div className="flex items-center">
            <img
              className="pl-1 lg:pl-4 w-10 lg:w-auto"
              src="https://furniro-at.s3.amazonaws.com/Icons/logo.png"
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
              <NavLink
                to="/loja-moveis/src/pages/Home/home.tsx"
                className={Classes.Links}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/loja-moveis/src/pages/Shop/shop.tsx"
                className={Classes.Links}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/loja-moveis/src/components/errorPage.tsx"}
                className={Classes.Links}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/loja-moveis/src/pages/Contact/contact.tsx"
                className={Classes.Links}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center lg:space-x-8 pr-14">
          <NavLink to="/loja-moveis/src/pages/Login/login.tsx">
            <img
              src="https://furniro-at.s3.amazonaws.com/Icons/login.png"
              alt="Icone login"
              className="lg:w-7 lg:h-5 cursor-pointer"
            />
          </NavLink>
          <img
            src="https://furniro-at.s3.amazonaws.com/Icons/shopping-cart.png"
            alt="Carrinho compras"
            className="lg:w-8 lg:h-6 cursor-pointer"
          />
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
      {/* Menu burger*/}
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
            <NavLink
              to="/loja-moveis/src/pages/Home/home.tsx"
              className={Classes.Links}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/loja-moveis/src/pages/Shop/shop.tsx"
              className={Classes.Links}
              onClick={toggleMenu}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/loja-moveis/src/components/errorPage.tsx"}
              className={Classes.Links}
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/loja-moveis/src/pages/Contact/contact.tsx"
              className={Classes.Links}
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
          <li className="flex gap-2 justify-center ">
            <img
              src="https://furniro-at.s3.amazonaws.com/Icons/login.png"
              alt="Icone login"
              className="w-7 h-6"
            />
            <img
              src="https://furniro-at.s3.amazonaws.com/Icons/shopping-cart.png"
              alt="Carrinho compras"
              className="w-auto h-auto"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
