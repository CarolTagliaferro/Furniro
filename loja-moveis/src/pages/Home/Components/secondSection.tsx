import { Classes } from "../../../utils/tailwindPredefs";
import Dining from "../../../images/category-1.png";
import Living from "../../../images/category-2.png";
import Bedroom from "../../../images/category-3.png";

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
            src={Dining}
            alt="Mesa com fundo branco"
            className={Classes.HoverImg}
          />
          <p className={Classes.SubTitleHome}>Dining</p>
        </div>
        <div>
          <img
            src={Living}
            alt="Sofá com decorações"
            className={Classes.HoverImg}
          />
          <p className={Classes.SubTitleHome}>Living</p>
        </div>
        <div>
          <img
            src={Bedroom}
            alt="Almofada e vaso de plantas"
            className={Classes.HoverImg}
          />
          <p className={Classes.SubTitleHome}>Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
