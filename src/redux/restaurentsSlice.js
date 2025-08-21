import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    const options = {
      method: "GET",
      url: "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants",
      params: { locationId: "304554" },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": "tripadvisor16.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data.data.data;
  }
);

const storedRestaurants = localStorage.getItem("restaurants");

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    list: storedRestaurants ? JSON.parse(storedRestaurants) : [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;

        localStorage.setItem("restaurants", JSON.stringify(action.payload));
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
