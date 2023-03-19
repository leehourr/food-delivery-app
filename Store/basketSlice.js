import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket(state, action) {
      state.items = [...state.items, action.payload];
    },
    removeBasket(state, action) {
      state.items = [...state.items, action.payload];
    },
  },
});

export const selectBasketItems = (state) => state.basket.items;
export const { addBasket, removeBasket } = basketSlice.actions;
export default basketSlice;
