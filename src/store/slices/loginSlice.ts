import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    }
  }
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;