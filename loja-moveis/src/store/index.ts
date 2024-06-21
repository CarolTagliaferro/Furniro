import { createStore, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
