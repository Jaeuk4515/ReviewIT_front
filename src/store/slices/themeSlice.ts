import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface ThemeType {
  theme: "light" | "dark";
};

const initialState: ThemeType = {
  theme: "light"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    }
  }
});

export const { setTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme;
export default themeSlice.reducer;