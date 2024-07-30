import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counter";
import { resultReducer } from "./slices/result";
import { expensesReducer } from "./slices/expenses";

const store = configureStore({
  reducer: {
    ctr: counterReducer,
    res: resultReducer,
    exp: expensesReducer,
  },
});

export default store;
