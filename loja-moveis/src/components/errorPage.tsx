import { NavLink } from "react-router-dom";
import ErrorImage from "../images/bgError.jpg";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative font-poppins">
        <img
          src={ErrorImage}
          alt="Abandoned Sofa"
          className="grayscale brightness-50 lg:w-full lg:h-full h-80 w-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="lg:text-2xl text-sm font-semibold text-primary">
            ERROR
          </p>
          <h1 className="lg:text-9xl text-5xl font-extrabold text-primary">
            404
          </h1>
          <div className="my-3 text-white">
            <p className="lg:text-3xl text-sm font-medium">
              Oh no! Someone abandoned this...
            </p>
            <p className="lg:text-lg text-xs font-light">
              The page you're looking for doesn't exist.
            </p>
          </div>
          <div>
            <NavLink to={"/"}>
              <button className="bg-primary hover:bg-primaryDark lg:text-lg text-sm px-2 py-1 lg:px-5 lg:py-2 rounded-lg text-white">
                Go back home
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
