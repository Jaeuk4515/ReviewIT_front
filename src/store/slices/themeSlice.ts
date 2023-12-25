import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
export default themeSlice.reducer;