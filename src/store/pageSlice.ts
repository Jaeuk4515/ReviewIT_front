import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PageObject {
  page: number;
  perPage: number;
  totalPage: number;
};

const initialState = {
  page: 0,
  perPage: 0,
  totalPage: 0
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPageInfo: (state, action: PayloadAction<PageObject>) => {
      return action.payload;
    }
  }
});

export const { setPageInfo } = pageSlice.actions;
export default pageSlice.reducer;