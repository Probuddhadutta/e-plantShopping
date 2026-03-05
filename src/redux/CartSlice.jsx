import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        if (type === "increment") {
          item.quantity += 1;
        } else if (type === "decrement") {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            return state.filter((i) => i.id !== id);
          }
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
