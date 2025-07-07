import { configureStore } from "@reduxjs/toolkit";

import api from "../services/api";

import cartReducer from './reducers/cart'
import checkoutReducer from'./reducers/checkout';
import messageReducer from'./reducers/message';


export const store = configureStore ({
  reducer:{
    cart: cartReducer,
    checkout: checkoutReducer,
    message: messageReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>;
