import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
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
      let exist=false;
        // state.cart.forEach(item=>{
        //   console.log(item.name)
        //   if(item.name===action.payload.name){
        //     exist=true;
        //     item.quantity+=action.payload.quantity;
        //   }
        // })
        for(let i=0;i<state.cart.length;i++){
          console.log(state.cart[i].text)
          if(state.cart[i].text==action.payload.name){
            state.cart[i].quantity+=action.payload.quantity;
            exist=true;
          }
        }
        console.log(state.cart.length)
        if(!exist){
          state.cart.push(item);
        }
    },
    removeItem: (state, action) => {
        for(let i=0;i<state.cart.length;i++){
        console.log(state.cart[i].text)
        if(state.cart[i].text==action.payload.name){
          state.cart[i].quantity-=action.payload.quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
