export interface Product {
    id: number;
    name: string;
    price: string;
    discount?: string;
    percentage?: string;
    new?: boolean;
    description: string;
    image: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface CartState {
    items: CartItem[];
  }
  
  export const ADD_TO_CART = "ADD_TO_CART";
  export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
  export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
  export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
  
  interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: Product;
  }
  
  interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: { id: number };
  }
  
  interface IncrementQuantityAction {
    type: typeof INCREMENT_QUANTITY;
    payload: { id: number };
  }
  
  interface DecrementQuantityAction {
    type: typeof DECREMENT_QUANTITY;
    payload: { id: number };
  }
  
  export type CartActionTypes =
    | AddToCartAction
    | RemoveFromCartAction
    | IncrementQuantityAction
    | DecrementQuantityAction;
  