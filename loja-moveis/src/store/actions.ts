import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, CHECKOUT_FORM } from "./actionsTypes";
import { Product } from "./product";
import { CheckoutFormData } from "./types/checkoutFormData";

export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});

export const incrementQuantity = (id: number) => ({
  type: INCREMENT_QUANTITY,
  payload: { id },
});

export const decrementQuantity = (id: number) => ({
  type: DECREMENT_QUANTITY,
  payload: { id },
});

export const checkoutForm = (data: CheckoutFormData) => ({
  type: CHECKOUT_FORM,
  payload: data
})
