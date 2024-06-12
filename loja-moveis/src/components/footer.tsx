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
    <footer className="bg-white px-20 py-10">
      <div className="grid grid-cols-4">
        <div className="">
          <NavLink to={"/loja-moveis/src/pages/Home/home.tsx"}>
            <h1 className="font-black font-poppins text-3xl pt-5 pb-5">
              Furniro.
            </h1>
          </NavLink>
          <p className={Classes.FtTextLight}>
            400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134
            USA
          </p>
          <div className="flex flex-nowrap gap-8 mt-10 mb-16">
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
            <a className={Classes.bgIcon} href="https://twitter.com/">
              <FaTwitter className={Classes.iconClass}></FaTwitter>
            </a>
            <a className={Classes.bgIcon} href="https://www.linkedin.com/">
              <FaLinkedinIn className={Classes.iconClass}></FaLinkedinIn>
            </a>
          </div>
        </div>
        <div className="flex pl-32">
          <div>
            <h2 className={Classes.FtTextLight}>Links</h2>
            <ul className="flex flex-col gap-4">
              <NavLink
                to={"/loja-moveis/src/pages/Home/home.tsx"}
                className={Classes.FtTextDark}
              >
                Home
              </NavLink>
              <NavLink
                to={"/loja-moveis/src/pages/Shop/shop.tsx"}
                className={Classes.FtTextDark}
              >
                Shop
              </NavLink>
              <NavLink to={"/"} className={Classes.FtTextDark}>
                About
              </NavLink>
              <NavLink
                to={"/loja-moveis/src/pages/Contact/contact.tsx"}
                className={Classes.FtTextDark}
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="pl-10">
            <h2 className={Classes.FtTextLight}>Help</h2>
            <ul className="flex flex-col gap-4">
              <NavLink to={"/"} className={Classes.FtTextDark}>
                Payment Options
              </NavLink>
              <NavLink to={"/"} className={Classes.FtTextDark}>
                Returns
              </NavLink>
              <NavLink to={"/"} className={Classes.FtTextDark}>
                Privacy Policies
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="">
          <h2 className={Classes.FtTextLight}>Newsletter</h2>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="border-b border-black outline-none pr-5 mr-3 pt-5"
          />
          <button className="font-poppins font-bold border-b border-black">
            SUBSCRIBE
          </button>
        </div>
        <div className="border-t border-grayLight mt-4 col-span-4 col-start-1">
          <p className="font-poppins pt-8">2023 furniro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
