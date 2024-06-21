import { CheckoutFormData } from "../types/checkoutFormData";

const initialState: CheckoutFormData = {
  firstName: '',
  lastName: '',
  companyName: '',
  zip: '',
  country: '',
  street: '',
  city: '',
  province: '',
  addon: '',
  email: '',
  addInfo: '',
};

const checkoutReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SAVE_CHECKOUT_INFO':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
