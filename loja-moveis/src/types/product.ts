export interface Product {
    id: number;
    name: string;
    price: number;
    discount?: number;
    percentage?: string;
    description: string;
    image: string;
    new?: boolean;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  