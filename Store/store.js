import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";
import restaurentSlice from "./restaurantSlice";

export const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
    restaurent: restaurentSlice.reducer,
  },
});
