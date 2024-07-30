import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counter";
import { resultReducer } from "./slices/result";

const store = configureStore({
  reducer: {
    ctr: counterReducer,
    res: resultReducer,
  },
});

export default store;
