import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state, action) {
      state.counter = state.counter + 1;
    },
    decrease(state, action) {
      state.counter = state.counter - 1;
    },
    addCounter(state, action) {
      state.counter = state.counter + action.payload;
    },
    subtractCounter(state, action) {
      state.counter = state.counter - action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const { increase, decrease, addCounter, subtractCounter } =
  counterSlice.actions;
