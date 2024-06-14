import React from "react";
import Form from "./components/form";
import Qualities from "../../components/qualities";
import Banner from "../../components/banner";

const Contact: React.FC = () => {
  return (
    <div>
      <Banner />
      <Form />
      <Qualities />
    </div>
  );
};

export default Contact;
