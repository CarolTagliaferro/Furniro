import React from "react";
import FirstSection from "./Components/firstSection";
import SecondSection from "./Components/secondSection";
import ThirdSection from "./Components/thirdSection";
import FourthSection from "./Components/fourthSection";
import FifthSection from "./Components/fifthSection";

const Home: React.FC = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
};

export default Home;
