import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter', // nome do reducer
  initialState: 0, // estado inicial
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;