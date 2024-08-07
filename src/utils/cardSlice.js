import { createSlice, current } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla(Older) Redux => DON'T MUTATE STATE, returning was mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState

      // Redux Toolkit
      //we have to mutate (directly modifying) the state here
      // Redux uses "Immer" library to do the older version automatically
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
     
     // console.log(current(state));
      // to console.log of state, we need to import and use "current"
      // RTK- either Mutate the existing state or return a new State.
      // state.items.length = 0; //originalState = []   OR
      return {items: []}; // this new object will be replaced inside originalState= {items: []}
    },
  },
});

export const { addItem, removeItem, clearCart } = cardSlice.actions;
export default cardSlice.reducer;
