import React from "react";
import Qualities from "../../components/qualities";
import Banner from "../../components/banner";
import FormCheckout from "./components/formCheckout";

const Checkout: React.FC = () => {
  return (
    <div>
      <Banner name="Checkout" />
      <FormCheckout />
      <Qualities />
    </div>
  );
};

export default Checkout;
