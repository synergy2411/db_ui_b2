import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    onStoreResult(state, action) {
      state.result.push(action.payload);
    },
  },
});

export const resultReducer = resultSlice.reducer;

export const { onStoreResult } = resultSlice.actions;
