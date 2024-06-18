export interface Product {
    id: number;
    name: string;
    price: string;
    discount?: string;
    percentage?: string;
    description: string;
    image: string;
    new?: boolean;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  