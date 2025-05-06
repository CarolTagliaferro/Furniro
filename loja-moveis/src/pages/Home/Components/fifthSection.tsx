import Image1 from "../../../images/rectangle-36.png";
import Image2 from "../../../images/rectangle-38.png";
import Image3 from "../../../images/rectangle-37.png";
import Image4 from "../../../images/rectangle-39.png";
import Image5 from "../../../images/rectangle-40.png";
import Image6 from "../../../images/rectangle-43.png";
import Image7 from "../../../images/rectangle-45.png";
import Image8 from "../../../images/rectangle-41.png";
import Image9 from "../../../images/rectangle-44.png";

const FifthSection = () => {
  return (
    <div className="my-5">
      <div className="font-poppins text-center">
        <p className="font-semibold text-gray-600">Share your setup with</p>
        <h1 className="text-4xl font-bold text-font">#FurniroFurniture</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-col mb-4 md:mb-0">
          <div className="flex mb-4">
            <img className="mr-2 w-full md:w-auto" src={Image1} alt="" />
            <img className="ml-2 w-full md:w-auto" src={Image2} alt="" />
          </div>
          <div className="flex">
            <img className="mr-2 w-full md:w-auto" src={Image3} alt="" />
            <img className="ml-2 w-full md:w-auto" src={Image4} alt="" />
          </div>
        </div>
        <div className="mx-0 md:mx-4 flex items-center mb-4 md:mb-0">
          <img className="w-full md:w-auto" src={Image5} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="flex mb-4">
            <img className="mr-2 w-full md:w-auto" src={Image6} alt="" />
            <img className="ml-2 w-full md:w-auto" src={Image7} alt="" />
          </div>
          <div className="flex">
            <img className="mr-2 w-full md:w-auto" src={Image8} alt="" />
            <img className="ml-2 w-full md:w-auto" src={Image9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
