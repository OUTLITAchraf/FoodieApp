import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMenuRestaurant = createAsyncThunk(
  "menurestaurant/fetchMenuRestaurant",
  async () => {
    const options = {
      method: "GET",
      url: "https://yelp-business-api.p.rapidapi.com/get_menus",
      params: {
        business_id: "5uUs2b4bQdS3WS8z16LJKw",
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": "yelp-business-api.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data.menus;
  }
);

const storedMenu = localStorage.getItem("menurestaurant");

const menuSlice = createSlice({
  name: "menurestaurant",
  initialState: {
    menu: storedMenu ? JSON.parse(storedMenu) : [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuRestaurant.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenuRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload;

        localStorage.setItem("menurestaurant", JSON.stringify(action.payload));
      })
      .addCase(fetchMenuRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
