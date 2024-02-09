import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: { items: [], price: 0 },
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
        price: action.payload.price,
      };
      let exist = false;
      for (let i = 0; i < state.cart.items.length; i++) {
        console.log(state.cart.items[i].text);
        if (state.cart.items[i].text == action.payload.name) {
          state.cart.items[i].quantity += action.payload.quantity;
          exist = true;
        }
      }
      console.log(state.cart.items.length);
      if (!exist) {
        state.cart.items.push(item);
      }
      state.cart.items = state.cart.items.filter(i=>i.quantity>0)
      let p=0;
      for(let i=0;i<state.cart.items.length;i++){
        p+=state.cart.items[i].quantity*state.cart.items[i].price;
      }
      state.cart.price=p;
    },
    removeItem: (state, action) => {
      state.cart.items = [];
      state.cart.price = 0;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
