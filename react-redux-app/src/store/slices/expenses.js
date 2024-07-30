import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchExpenses = createAsyncThunk(
  "fetchExpenses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3030/expenses");
      if (!response.ok) {
        return rejectWithValue("Unable to find expenses");
      }
      const result = await response.json();
      return result; // Will populate action - payload
    } catch (err) {
      throw rejectWithValue("Unable to fetch expenses");
    }
  }
);

const initialState = {
  expenses: [],
  isLoading: false,
  error: "",
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchExpenses.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchExpenses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.expenses = action.payload;
    });
    builder.addCase(fetchExpenses.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const expensesReducer = expensesSlice.reducer;

// Promise States -
// - Pending
// - Settled > Resolve / Fulfilled, Rejected
