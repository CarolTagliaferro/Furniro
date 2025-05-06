import { Splide, SplideSlide } from "react-splide-ts";
import "react-splide-ts/css";
import "../Components/carrosel.css";
import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { Classes } from "../../../utils/tailwindPredefs";
import Carrossel1 from "../../../images/carousel-1.png";
import Carrossel2 from "../../../images/carousel-2.png";
import Carrossel3 from "../../../images/carousel-3.png";

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
          <img src={Carrossel1} alt="Carousel 1" />
          <div className={Classes.carrouselTag}>
            <p className={Classes.nameTag}>01 - Bed Room</p>
            <p className={Classes.descriptionTag}>Inner Peace</p>
          </div>
          <NavLink to={"/errorPage"}>
            <button className={Classes.arrowButton}>
              <GoArrowRight className="text-white w-6 h-6 hidden md:block" />
            </button>
          </NavLink>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative">
          <img src={Carrossel2} alt="Carousel 2" />
          <div className={Classes.carrouselTag}>
            <p className={Classes.nameTag}>02 - Living Room</p>
            <p className={Classes.descriptionTag}>Cozy Space</p>
          </div>
          <NavLink to={"/errorPage"}>
            <button className={Classes.arrowButton}>
              <GoArrowRight className="text-white w-6 h-6 hidden md:block" />
            </button>
          </NavLink>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative">
          <img src={Carrossel3} alt="Carousel 3" />
          <div className={Classes.carrouselTag}>
            <p className={Classes.nameTag}>03 - Dining Room</p>
            <p className={Classes.descriptionTag}>Elegant Room</p>
          </div>
          <NavLink to={"/errorPage"}>
            <button className={Classes.arrowButton}>
              <GoArrowRight className="text-white w-6 h-6 hidden md:block" />
            </button>
          </NavLink>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Carrousel;
