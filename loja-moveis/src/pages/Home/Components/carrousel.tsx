import { Splide, SplideSlide } from "react-splide-ts";
import "react-splide-ts/css";
import "../Components/carrosel.css";
import { GoArrowRight } from "react-icons/go";

const Carrousel = () => {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 2.5,
        perMove: 1,
        gap: "0.5rem",
        interval: 3000,
        pagination: true,
        arrows: true,
        focus: 0,
        breakpoints: {
          768: {
            perPage: 1.5,
          },
        },
      }}
      className="splide-custom"
    >
      <SplideSlide>
        <div className="relative">
          <img
            src="https://furniro-at.s3.amazonaws.com/Carousel/Carousel1.png"
            alt="Carousel 1"
          />
          <div className="absolute w-48 left-5 top-3/4 transform -translate-y-1/2 text-center py-5 bg-white bg-opacity-80">
            <p className="text-sm text-grayTwo">01 - Bed Room</p>
            <p className="text-2xl font-semibold text-font">Inner Peace</p>
          </div>
          <button className="absolute top-3/4 right-48 transform  bg-primary w-10 h-10 p-1">
            <GoArrowRight className="text-white w-6 h-6" />
          </button>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative">
          <img
            src="https://furniro-at.s3.amazonaws.com/Carousel/Carousel2.png"
            alt="Carousel 2"
          />
          <div className="absolute w-48 left-5 top-3/4  text-center py-5 bg-white bg-opacity-80">
            <p className="text-sm text-grayTwo">02 - Living Room</p>
            <p className="text-2xl font-semibold text-font">Cozy Space</p>
          </div>
          <button className="absolute top-3/4 right-48  bg-primary w-10 h-10 p-1">
            <GoArrowRight className="text-white w-6 h-6" />
          </button>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative">
          <img
            src="https://furniro-at.s3.amazonaws.com/Carousel/Carousel3.png"
            alt="Carousel 3"
          />
          <div className="absolute w-48 left-5 top-3/4  text-center py-5 bg-white bg-opacity-80">
            <p className="text-sm text-grayTwo">03 - Dining Room</p>
            <p className="text-2xl font-semibold text-font">Elegant Room</p>
          </div>
          <button className="absolute top-96 right-48  bg-primary w-10 h-10 p-1">
            <GoArrowRight className="text-white w-6 h-6" />
          </button>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Carrousel;
