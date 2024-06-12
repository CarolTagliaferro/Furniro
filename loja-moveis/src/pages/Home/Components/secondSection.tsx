import { Classes } from "../../../utils/tailwindPredefs";

const SecondSection = () => {
  return (
    <div>
      <div className="text-center pb-10 lg:pb-14 pt-8">
        <h1 className="text-font font-poppins font-bold text-2xl lg:text-3xl">
          Browse The Range
        </h1>
        <p className="text-grayTwo font-poppins font-medium text-md lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-row justify-center mx-3 lg:mx-0 gap-3 lg:gap-8">
        <div>
          <img
            src="https://furniro-at.s3.amazonaws.com/HomeImages/Mask+Group.png"
            alt=""
          />
          <p className={Classes.SubTitleHome}>Dining</p>
        </div>
        <div>
          <img
            src="https://furniro-at.s3.amazonaws.com/HomeImages/Image-living+room.png"
            alt=""
          />
          <p className={Classes.SubTitleHome}>Living</p>
        </div>
        <div>
          <img
            src="https://furniro-at.s3.amazonaws.com/HomeImages/Mask+Group+(1).png"
            alt=""
          />
          <p className={Classes.SubTitleHome}>Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
