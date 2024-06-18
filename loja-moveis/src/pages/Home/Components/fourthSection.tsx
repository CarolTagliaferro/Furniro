import Carrousel from "./carrousel";
import "../../../App.css";

const FourthSection = () => {
  return (
    <div className="bg-lightBg font-poppins flex h-full py-8 lg:py-10 lg:pl-20">
      <div className="lg:ml-10 ml-4 lg:p-5 pr-0 flex justify-between items-center">
        <div className="flex flex-col justify-center w-1/3 mr-10">
          <h1 className="font-bold text-xl lg:text-5xl text-font mb-2">
            50+ Beautiful rooms
            <br /> inspiration
          </h1>
          <p className="font-medium text-xs text-gray-600 mb-3 lg:mb-6">
            Our designer already made a lot of beautiful
            <br />
            prototipe of rooms that inspire you
          </p>
          <button className="bg-primary hover:bg-primaryDark text-white lg:text-md text-sm lg:font-medium py-1 lg:py-3 lg:px-8 w-26 lg:w-1/3">
            Explore More
          </button>
        </div>
        <div className="flex-1">
          <Carrousel />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
