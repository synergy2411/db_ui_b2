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
  },
});

export const counterReducer = counterSlice.reducer;

export const { increase, decrease } = counterSlice.actions;
