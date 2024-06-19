import React from "react";
import { Classes } from "../../../utils/tailwindPredefs";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { formatPrice } from "../../../utils/formatPrice";

const FormCheckout = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const inputClass = `${Classes.InputFormCheck} w-full`;

  return (
    <div className="font-poppins my-20">
      <h1 className="font-semibold text-3xl mb-10 ml-80 pl-5">
        Billing details
      </h1>
      <div className="flex justify-center gap-20">
        <form className="w-1/2 max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                First Name
              </label>
              <input type="text" className={`${inputClass}`} />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Last Name
              </label>
              <input type="text" className={`${inputClass}`} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Company Name (Optional)
              </label>
              <input type="text" className={`${inputClass}`} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                ZIP code
              </label>
              <input type="number" className={`${inputClass}`} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Country / Region
              </label>
              <input type="text" className={`${inputClass}`} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Street address
              </label>
              <input type="text" className={`${inputClass}`} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Town / City
              </label>
              <input type="text" className={`${inputClass}`} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Province
              </label>
              <input type="text" className={`${inputClass}`} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Add-on
              </label>
              <input type="text" className={`${inputClass}`} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`${Classes.TextFormCheck} pb-1 block`}>
                Email
              </label>
              <input type="text" className={`${inputClass}`} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 pt-5">
              <input
                type="text"
                placeholder="Additional information"
                className={`${inputClass} pl-5 text-sm`}
              />
            </div>
          </div>
        </form>
        <div className="w-1/3">
          <div className="px-6 grid grid-cols-2">
            <h2 className="text-2xl font-semibold mb-6">Product</h2>
            <h2 className="text-2xl font-semibold mb-6 text-right">Subtotal</h2>
          </div>
          <div className="px-6 grid grid-cols-2">
            <div>
              {items.map((item) => (
                <p key={item.id}>
                  <span className="text-grayOne">{item.name}</span>
                  <span className="text-black px-2 text-sm">
                    {" "}
                    x {item.quantity}
                  </span>
                </p>
              ))}
            </div>
            <div className="text-right">
              <p className="text-lg">{formatPrice(calculateSubtotal())}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCheckout;
