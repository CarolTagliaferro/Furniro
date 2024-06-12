import React from "react";
import FirstSection from "./Components/firstSection";
import SecondSection from "./Components/secondSection";
import ThirdSection from "./Components/thirdSection";

const Home: React.FC = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default Home;
