import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CartOverlay from "./CartOverlay";
import { Classes } from "../utils/tailwindPredefs";

const Header: React.FC = () => {
  const [isCartOverlayVisible, setIsCartOverlayVisible] = useState(false);
  const navigate = useNavigate();

  const handleCartClick = () => {
    setIsCartOverlayVisible(true);
  };

  const handleCartClose = () => {
    setIsCartOverlayVisible(false);
  };

  const handleCartRedirect = () => {
    navigate("/cart");
    setIsCartOverlayVisible(false);
  };

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-5">
        <NavLink to="/loja-moveis/src/pages/Home/home.tsx">
          <div className="flex items-center">
            <img
              className="pl-4"
              src="https://furniro-at.s3.amazonaws.com/Icons/logo.png"
              alt="Logo"
            />

            <h1 className="pl-1 font-bold text-3xl font-montserrat">Furniro</h1>
          </div>
        </NavLink>
        <div className="flex-grow flex justify-center font-poppins font-medium">
          <ul className="flex space-x-10">
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
        <div className="flex items-center space-x-4 pr-4">
          <img
            src="https://furniro-at.s3.amazonaws.com/Icons/login.png"
            alt="Icone login"
            className="w-full h-full cursor-pointer"
            onClick={() => navigate("/login")}
          />
          <img
            src="https://furniro-at.s3.amazonaws.com/Icons/shopping-cart.png"
            alt="Carrinho compras"
            className="w-full h-full cursor-pointer"
            onClick={handleCartClick}
          />
        </div>
      </nav>
      <CartOverlay isVisible={isCartOverlayVisible} onClose={handleCartClose} />
    </header>
  );
};

export default Header;
