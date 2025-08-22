import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurentsSlice";
import basketReducer from "./basketSlice";
import menuReducer from "./menuSlice"

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurants: restaurantReducer,
    menurestaurant: menuReducer,
  },
});