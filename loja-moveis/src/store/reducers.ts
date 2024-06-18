import {
    CartState,
    CartItem,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    CartActionTypes
  } from "./types/types";
  
  const initialState: CartState = {
    items: [],
  };
  
  const cartReducer = (state: CartState = initialState, action: CartActionTypes): CartState => {
    switch (action.type) {
      case ADD_TO_CART: {
        const itemToAdd: CartItem = {
          ...action.payload,
          quantity: 1,
        };
  
        const existingItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (existingItemIndex !== -1) {
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity++;
          return {
            ...state,
            items: updatedItems,
          };
        } else {
          return {
            ...state,
            items: [...state.items, itemToAdd],
          };
        }
      }
      case REMOVE_FROM_CART: {
        const updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          items: updatedItems,
        };
      }
      case INCREMENT_QUANTITY: {
        const updatedItems = [...state.items];
        const index = updatedItems.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          updatedItems[index].quantity++;
        }
        return {
          ...state,
          items: updatedItems,
        };
      }
      case DECREMENT_QUANTITY: {
        const updatedItems = [...state.items];
        const index = updatedItems.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1 && updatedItems[index].quantity > 1) {
          updatedItems[index].quantity--;
        }
        return {
          ...state,
          items: updatedItems,
        };
      }
      default:
        return state;
    }
  };
  
  export default cartReducer;
  