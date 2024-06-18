import { Splide, SplideSlide } from "react-splide-ts";
import "react-splide-ts/css";
import "../../../App.css";

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
        <img
          src="https://furniro-at.s3.amazonaws.com/Carousel/Carousel1.png"
          alt="Carousel 1"
          className="zoom-effect"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://furniro-at.s3.amazonaws.com/Carousel/Carousel2.png"
          alt="Carousel 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://furniro-at.s3.amazonaws.com/Carousel/Carousel3.png"
          alt="Carousel 3"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Carrousel;
