import { createSlice } from "@reduxjs/toolkit";

//createSlice() lets you write immutable updates using “mutation-like”
// logic within the case reducers. This is because createSlice() uses
// the Immer library internally to turn mutating code into immutable
// updates.
/* 
What is createSlice in Redux Toolkit?
A function that accepts an initial state, an object of reducer functions,
 and a "slice name", and automatically generates action creators and 
 action types that correspond to the reducers and state. This API is the
  standard approach for writing Redux logic.
*/
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
//or if reducer action take (state, action) parameters:
//export const actions = counterSlice.actions;
export default counterSlice.reducer;
