import { BsClockFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { Classes } from "../../../utils/tailwindPredefs";

const Form = () => {
  return (
    <div>
      <div className="text-center lg:pb-24 lg:pt-24 font-poppins ">
        <h1 className="font-bold text-3xl pb-3">Get In Touch With Us</h1>
        <p className="text-grayOne">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </div>
      <div className="flex justify-center gap-40 font-poppins">
        <div className="space-y-8">
          <div className={Classes.alignIconText}>
            <div className="mr-7 text-3xl text-black">
              <TiLocation />
            </div>
            <div>
              <h2 className={Classes.textFormH2}>Address</h2>
              <p className={Classes.textFormP}>
                236 5th SE Avenue, New <br /> York NY10000, United
                <br /> States
              </p>
            </div>
          </div>
          <div className={Classes.alignIconText}>
            <div className="mr-9 text-xl text-black">
              <FaPhoneAlt />
            </div>
            <div>
              <h2 className={Classes.textFormH2}>Phone</h2>
              <p className={Classes.textFormP}>
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className={Classes.alignIconText}>
            <div className="mr-9 text-xl text-black">
              <BsClockFill />
            </div>
            <div>
              <h2 className={Classes.textFormH2}>Opening Hours</h2>
              <p className={Classes.textFormP}>
                Monday-Friday: 9:00 - <br />
                22:00 <br />
                Saturday-Sunday: 9:00 - <br /> 21:00
              </p>
            </div>
          </div>
        </div>
        <div>
          <form className="">
            <div className={Classes.formContactPosition}>
              <label className={Classes.formLabel}>Your name</label>
              <input
                className={`${Classes.formInputs}  w-96 h-14`}
                type="text"
                placeholder="Abc"
              />
            </div>
            <div className={Classes.formContactPosition}>
              <label className={`${Classes.formLabel} pt-7`}>
                Email address
              </label>
              <input
                className={`${Classes.formInputs} w-96 h-14`}
                type="email"
                placeholder="Abc@def.com"
              />
            </div>
            <div className={Classes.formContactPosition}>
              <label className={`${Classes.formLabel} pt-7`}>Subject</label>
              <input
                className={`${Classes.formInputs}  w-96 h-14`}
                type="text"
                placeholder="This is an optional"
              />
            </div>
            <div className={Classes.formContactPosition}>
              <label className={`${Classes.formLabel} pt-7`}>Message</label>
              <input
                className={`${Classes.formInputs} pt-3 pb-16 w-96 h-28`}
                type="text"
                placeholder="Hi! i'd like to ask about"
              />
            </div>
            <div className="pt-10">
              <button className="bg-primary hover:bg-primaryDark text-white text-sm rounded px-10 py-3 lg:px-20 ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
