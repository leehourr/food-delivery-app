import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurent: {
    id: null,
    image: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  },
};

const restaurentSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setRestaurent(state, action) {
      state.restaurent = action.payload;
    },
  },
});

export const { setRestaurent } = restaurentSlice.actions;

export const selectRestaurent = (state) => state.restaurent.restaurent;
export default restaurentSlice;
