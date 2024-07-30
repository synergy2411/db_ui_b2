import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counter";

const store = configureStore({
  reducer: {
    ctr: counterReducer,
  },
});

export default store;
