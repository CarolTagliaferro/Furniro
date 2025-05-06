import FilterIcon from "../../../images/filterIcon.png";
import DotsIcon from "../../../images/dotsIcon.png";
import ListIcon from "../../../images/view-listIcon.png";

const FilterBar = () => {
  return (
    <div className="bg-mediumBg h-28 font-poppins flex lg:justify-between items-center">
      <div className="flex items-center lg:ml-20 ml-5">
        <button>
          <img src={FilterIcon} alt="Filter" className="pr-2" />
        </button>
        <span className="text-xl pr-7 pl-2 md:block hidden">Filter</span>
        <img src={DotsIcon} alt="Dots" className="lg:pr-5 pr-2" />
        <img src={ListIcon} alt="List" className="lg:pr-10 pr-2" />
        <span className="text-grayOne lg:text-5xl text-2xl font-thin">|</span>
        <span className="text-sm lg:text-lg pl-5 ">
          Showing 1-16 of 150 results
        </span>
      </div>
      <div className="flex items-center text-xl mr-20">
        <span className="px-3 md:block hidden">Show</span>
        <p className="bg-white px-4 py-3 text-grayOne md:block hidden">16</p>
        <span className="px-3 md:block hidden">Short by</span>
        <p className="bg-white pl-4 pr-16 py-3 text-grayOne md:block hidden">
          Deafult
        </p>
      </div>
    </div>
  );
};

export default FilterBar;
