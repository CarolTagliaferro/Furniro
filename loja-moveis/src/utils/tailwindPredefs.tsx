const tailwindPredefs = () => {
  return null;
};

export const Classes = {
  //Home - Header - Footer
  iconClass: "text-sm lg:text-lg",
  bgIcon:
    "bg-white rounded-full shadow-sm shadow-grayTwo p-3 hover:text-primary transition-all",
  Links: "hover:text-primary transition-all",
  FtTextLight:
    "text-grayOne font-poppins text-base lg:text-lg font-medium lg:pt-5 lg:pb-5",
  FtTextDark:
    "font-poppins font-medium text-sm lg:text-lg hover:text-primary transition-all pt-5",
  SubTitleHome:
    "text-center font-poppins font-semibold text-md lg:text-lg text-font pt-3 lg:pt-5",
  HoverImg: "lg:transition-all lg:duration-300 lg:hover:scale-95",

  //Contact
  textFormH2: "text-xl font-medium",
  textFormP: "text-sm  pt-1",
  alignIconText: "flex items-start",
  formContactPosition: "flex flex-col",
  formInputs:
    "text-xs pt-2 border border-grayOne outline-none rounded-lg px-5 py-2",
  formLabel: "text-sm font-medium pb-4",

  //
  lsH1: "text-xl font-semibold tracking-wide",
  lsP: "text-grayThree font-medium  pt-1",
};

export default tailwindPredefs;
