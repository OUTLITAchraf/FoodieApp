import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurentsSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
  },
});