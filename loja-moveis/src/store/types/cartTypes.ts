// store/types/cartTypes.ts
import { Product } from "../../types/product";
import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../actionsTypes";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

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

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | IncrementQuantityAction
  | DecrementQuantityAction;
