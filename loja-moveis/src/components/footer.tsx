import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Classes } from "../utils/tailwindPredefs";

const Footer = () => {
  return (
    <footer className="bg-white px-10 py-5 lg:py-10 border-t-2 border-grayLight">
      <div className="flex flex-col lg:grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <NavLink to={"/"}>
            <h1 className="font-bold font-poppins text-3xl pt-5 pb-5">
              Furniro.
            </h1>
          </NavLink>
          <p className="text-grayOne font-poppins text-base lg:text-lg lg:pt-5 lg:pb-5">
            400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134
            USA
          </p>
          <div className="flex flex-wrap lg:flex-nowrap gap-8 mt-5 lg:mt-10 lg:mb-16">
            <a
              className={Classes.bgIcon}
              href="https://www.facebook.com/"
              target="blank"
            >
              <FaFacebookF className={Classes.iconClass}></FaFacebookF>
            </a>
            <a
              className={Classes.bgIcon}
              href="https://www.instagram.com/"
              target="blank"
            >
              <FaInstagram className={Classes.iconClass}></FaInstagram>
            </a>
            <a
              className={Classes.bgIcon}
              href="https://twitter.com/"
              target="blank"
            >
              <FaTwitter className={Classes.iconClass}></FaTwitter>
            </a>
            <a
              className={Classes.bgIcon}
              href="https://www.linkedin.com/"
              target="blank"
            >
              <FaLinkedinIn className={Classes.iconClass}></FaLinkedinIn>
            </a>
          </div>
        </div>

        <div className="lg:pl-32">
          <div>
            <h2 className={Classes.FtTextLight}>Links</h2>
            <ul className="flex flex-col gap-2 lg:gap-8">
              <NavLink to={"/"} className={Classes.FtTextDark}>
                Home
              </NavLink>
              <NavLink to={"/shop"} className={Classes.FtTextDark}>
                Shop
              </NavLink>
              <NavLink to={"/errorPage"} className={Classes.FtTextDark}>
                About
              </NavLink>
              <NavLink to={"/contact"} className={Classes.FtTextDark}>
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
        <div>
          <div className="lg:pl-10">
            <h2 className={Classes.FtTextLight}>Help</h2>
            <ul className="flex flex-col gap-2 lg:gap-8">
              <NavLink to={"/errorPage"} className={Classes.FtTextDark}>
                Payment Options
              </NavLink>
              <NavLink to={"/errorPage"} className={Classes.FtTextDark}>
                Returns
              </NavLink>
              <NavLink to={"/errorPage"} className={Classes.FtTextDark}>
                Privacy Policies
              </NavLink>
            </ul>
          </div>
        </div>

        <div className="pt-2  lg:pt-0">
          <h2 className={Classes.FtTextLight}>Newsletter</h2>
          <div className="lg:flex gap-4 pt-2 lg:pt-0">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-font outline-none pr-2 lg:pr-5 lg:mr-3 pb-1 pt-2 lg:pt-5"
            />
            <button className="font-poppins mt-2 font-medium border-b border-font text-sm lg:text-base px-3 py-1 relative group overflow-hidden transition-all">
              <span className="relative z-10 transition-colors group-hover:text-white">
                SUBSCRIBE
              </span>
              <span className="absolute left-0 bottom-0 w-full h-0 transition-all bg-font z-0 group-hover:h-full"></span>
            </button>
          </div>
        </div>

        <div className="border-t border-grayLight col-span-4 col-start-1">
          <p className="font-poppins text-center lg:text-start pt-4 lg:pt-8">
            2023 furniro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
