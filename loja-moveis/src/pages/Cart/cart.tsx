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
import { formatPrice } from "../../utils/formatPrice";
import { NavLink } from "react-router-dom";
import { Classes } from "../../utils/tailwindPredefs";

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

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal;
  };

  return (
    <div>
      <Banner name="Cart" />

      <div className="font-poppins container mx-auto mt-10 mb-10 flex flex-col md:flex-row lg:flex-row">
        <div className="md:w-2/3 lg:w-2/3">
          <div className="bg-mediumBg flex justify-between font-medium text-lg p-4">
            <h1 className="w-1/4 ml-24 hidden md:block lg:block">Product</h1>
            <h1 className="w-1/4 hidden md:block lg:block">Price</h1>
            <h1 className="w-1/4 hidden md:block lg:block">Quantity</h1>
            <h1 className="w-1/4 hidden md:block lg:block">Subtotal</h1>
          </div>

          {items.length === 0 ? (
            <p className="text-center pt-20 font-poppins font-medium text-2xl">
              Your cart is empty
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 flex flex-col md:flex-row lg:flex-row justify-between items-center mb-4"
              >
                <div className="md:w-1/4 lg:w-1/4 flex items-center mb-4 md:mb-0 lg:mb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                  <h3 className="text-lg ml-4 text-grayOne">{item.name}</h3>
                </div>
                <p className="md:w-1/4 lg:w-1/4 text-center text-grayOne mb-4 md:mb-0 lg:mb-0">
                  {formatPrice(item.price)}
                </p>
                <div className="border border-grayOne rounded-lg px-4 py-2 text-center flex justify-center items-center mb-4 md:mb-0 lg:mb-0">
                  <button
                    className={Classes.incDecButton}
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <span className="px-2 text-md">{item.quantity}</span>
                  <button
                    className={Classes.incDecButton}
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="md:w-1/4 lg:w-1/4 text-center flex justify-between items-center">
                  <p>{formatPrice(item.price * item.quantity)}</p>
                  <button
                    className="ml-4"
                    onClick={() => handleRemove(item.id)}
                  >
                    <img
                      src="https://furniro-at.s3.amazonaws.com/Icons/trash.png"
                      alt="Remove"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="md:w-1/3 lg:w-1/3 md:pl-10 lg:pl-10 text-center mt-10 md:mt-0 lg:mt-0">
          <div className="bg-mediumBg px-6 py-8">
            <h2 className="text-4xl font-semibold mb-20">Cart Totals</h2>
            <div className="flex justify-between mb-6">
              <span className="font-semibold">Subtotal:</span>
              <span className="text-grayOne">
                {formatPrice(calculateSubtotal())}
              </span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="font-semibold">Total:</span>
              <span className="text-primary text-xl font-medium">
                {formatPrice(calculateTotal())}
              </span>
            </div>
            <NavLink to={"/checkout"}>
              <button className="border border-black rounded-xl w-full md:w-1/2 lg:w-1/2 text-lg py-3 mt-4 mb-16 hover:opacity-75">
                Check Out
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <Qualities />
    </div>
  );
};

export default Cart;
