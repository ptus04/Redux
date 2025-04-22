import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment } = slice.actions;
export default slice.reducer;
