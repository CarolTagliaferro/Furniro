import { NavLink } from "react-router-dom";

const FirstSection = () => {
  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center">
        <img
          src="https://furniro-at.s3.amazonaws.com/HomeImages/scandinavian-interior-mockup-wall-decal-background+1.png"
          alt="Imagem Fundo"
          className="w-full h-full lg:w-full lg:h-full object-cover absolute inset-0 z-[-1]"
        />
        <div className="bg-darkBg py-8 pr-5 pl-5 lg:py-16 lg:pr-20 lg:pl-10 rounded-lg ml-auto lg:mr-20">
          <div>
            <p className="font-poppins font-semibold text-font text-sm lg:text-base tracking-widest pb-3">
              New Arrival
            </p>
            <h2 className="text-primary text-4xl lg:text-5xl font-bold pb-4">
              Discover Our <br />
              New Collection
            </h2>
            <p className="font-poppins text-font text-sm lg:text-base font-medium pb-5 lg:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              <br /> elit tellus, luctus nec ullamcorper mattis.
            </p>
            <NavLink to={"/shop"}>
              <button className="bg-primary hover:bg-primaryDark text-white text-xs lg:text-sm font-bold px-10 py-3 lg:px-16 lg:py-5">
                BUY NOW
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
