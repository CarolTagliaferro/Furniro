export interface CheckoutFormData {
    firstName: string;
    lastName: string;
    companyName?: string;
    zip: string;
    country: string;
    street: string;
    city: string;
    province: string;
    addon?: string;
    email: string;
    addInfo?: string;
  }