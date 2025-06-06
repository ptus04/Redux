import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = slice.actions;
export default slice.reducer;
