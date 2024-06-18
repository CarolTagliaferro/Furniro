import React, { useState } from "react";
import { RootState } from "../store";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const OverlayCart: React.FC = () => {
  const [isCartHovered, setIsCartHovered] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleCartMouseEnter = () => {
    setIsCartHovered(true);
  };

  const handleCartMouseLeave = () => {
    setIsCartHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleCartMouseEnter}
      onMouseLeave={handleCartMouseLeave}
    >
      <NavLink to="/cart">
        <img
          src="https://furniro-at.s3.amazonaws.com/Icons/shopping-cart.png"
          alt="Carrinho compras"
          className="lg:w-8 lg:h-6 cursor-pointer"
        />
      </NavLink>
      {isCartHovered && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg p-4">
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center mb-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover mr-4"
                  />
                  <div className="flex flex-col">
                    <span>{item.name}</span>
                    <span>{item.quantity}x</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      )}
    </div>
  );
};

export default OverlayCart;
