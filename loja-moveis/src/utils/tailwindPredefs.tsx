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
  labelProduct:
    "absolute top-2 right-2 rounded-full text-center pt-4 text-white text-sm h-12 w-12",
  textIconProduct: "flex items-center gap-1 text-white font-semibold",

  //Carrrossel
  carrouselTag:
    "absolute w-48 left-5 top-3/4 transform -translate-y-1/2 text-center py-5 bg-white bg-opacity-80 hidden md:block",
  nameTag: "text-sm text-grayTwo hidden md:block",
  descriptionTag: "text-2xl font-semibold text-font hidden md:block",
  arrowButton:
    "absolute top-3/4 right-20 lg:right-48 transform bg-primary w-10 h-10 p-2 hidden md:block",

  //Contact
  textFormH2: "text-xl font-medium",
  textFormP: "text-sm  pt-1",
  alignIconText: "flex items-start",
  formContactPosition: "flex flex-col",
  formInputs:
    "text-xs pt-2 border border-grayOne outline-none rounded-lg px-5 py-2",
  formLabel: "text-sm font-medium pb-4",

  //Qualities
  lsH1: "lg:text-xl text-sm font-medium lg:font-semibold lg:tracking-wide md:block hidden",
  lsP: "text-grayThree text-xs lg:text-lg lg:font-medium  pt-1 md:block hidden",

  //Checkout
  TextFormCheck: "lg:py-3 font-medium text-sm",
  InputFormCheck:
    "border border-grayOne outline-none rounded-lg py-4 px-4 w-full",
  FormCheckPosition: "flex flex-col py-4",

  //erros form
  FormErrors: "text-red-600",

  //Produto Unico
  bannerText: "text-grayOne hover:underline hover:text-grayTwo",

  //Cart
  incDecButton: "px-2 hover:text-primary text-lg",

  //Login
  labelLogin: "block font-medium text-font mt-3",
  inputLogin:
    "w-full block h-12 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm",
};

export default tailwindPredefs;
