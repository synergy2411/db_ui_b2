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
    onDeleteResult(state, action) {
      state.result.splice(action.payload, 1);
    },
  },
});

export const resultReducer = resultSlice.reducer;

export const { onStoreResult, onDeleteResult } = resultSlice.actions;
