import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: [{ id: 1, name: "Hello world", quantity: 0 }],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = {
        id: nanoid(),
        text: action.payload.name,
        quantity: action.payload.quantity,
      };
      state.cart.push(item);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
