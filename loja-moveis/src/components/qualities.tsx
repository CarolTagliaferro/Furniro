import { Classes } from "../utils/tailwindPredefs";

const Qualities = () => {
  return (
    <div className="pb-10">
      <div className="flex font-poppins bg-whiteLinen lg:py-20  lg:gap-40 justify-evenly">
        <div className="flex">
          <img
            src="https://furniro-at.s3.amazonaws.com/Icons/trophy.png"
            alt="Trophy"
            className="w-10 h-10  lg:w-20 lg:h-20"
          />
          <div className="pl-3">
            <h1 className={Classes.lsH1}>High Quality</h1>
            <p className={Classes.lsP}>crafted from top materials</p>
          </div>
        </div>
        <div className="flex">
          <img
            src="https://furniro-at.s3.amazonaws.com/Icons/verify.png"
            alt="Trophy"
            className="w-10 h-10 lg:w-20 lg:h-20"
          />
          <div className="pl-3">
            <h1 className={Classes.lsH1}>Warranty Protection</h1>
            <p className={Classes.lsP}>Over 2 years</p>
          </div>
        </div>
        <div className="flex">
          <img
            src="https://furniro-at.s3.amazonaws.com/Icons/shipping.png"
            alt="Trophy"
            className="w-10 h-10 lg:w-20 lg:h-20"
          />
          <div className="pl-3">
            <h1 className={Classes.lsH1}>Free Shipping</h1>
            <p className={Classes.lsP}>Order over 150 $</p>
          </div>
        </div>
        <div className="flex">
          <img
            src="https://furniro-at.s3.amazonaws.com/Icons/customer-support.png"
            alt="Trophy"
            className="w-10 h-10 lg:w-20 lg:h-20"
          />
          <div className="pl-3">
            <h1 className={Classes.lsH1}>24 / 7 Support</h1>
            <p className={Classes.lsP}>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
