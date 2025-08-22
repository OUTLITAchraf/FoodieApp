import { createSlice } from "@reduxjs/toolkit";

const storedBasket = localStorage.getItem("basket");

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: storedBasket ? JSON.parse(storedBasket) : [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("basket", JSON.stringify(state.items));
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(state.items));
    },
    clearBasket: (state) => {
      state.items = [];
      localStorage.removeItem("basket");
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;