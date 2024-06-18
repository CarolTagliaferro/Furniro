import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../store/actions";
import Banner from "../../components/banner";
import Qualities from "../../components/qualities";

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <Banner name="Cart" />
      <Qualities />
      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-6">Cart Items</h2>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="border p-4 flex justify-between items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="text-gray-500">{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-gray-300 p-1"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="bg-gray-300 p-1"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white p-2 ml-4"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
