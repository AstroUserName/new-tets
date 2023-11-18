import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

export const productsSlice = createSlice({
  name: "products",
  initialState: data,
  reducers: {
    deleteProduct: (state, action) => {
      Object.keys(state).forEach((category) => {
        state[category] = state[category].filter(
          (product) => product.id !== action.payload
        );
      });
    },
    restoreProduct: (state, action) => {
      Object.keys(state).forEach((category) => {
        if (category === action.payload.category) {
          state[category].push(action.payload);
        }
      });
    },
  },
});

export const { deleteProduct, restoreProduct } = productsSlice.actions;
export default productsSlice.reducer;
