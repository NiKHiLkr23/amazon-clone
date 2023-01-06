import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/BasketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
