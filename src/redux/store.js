import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurentsSlice";
import menuReducer from "./menuSlice"

export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    menurestaurant: menuReducer,
  },
});