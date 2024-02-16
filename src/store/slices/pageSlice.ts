import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface PageObject {
  page: number;
  perPage: number;
  totalPage: number;
};

const initialState = {
  page: 1,
  perPage: 10,
  totalPage: 0
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    resetPage: (state) => {
      return initialState;
    },
    setPageInfo: (state, action: PayloadAction<PageObject>) => {
      return action.payload;
    }
  }
});

export const { resetPage, setPageInfo } = pageSlice.actions;
export const selectPage = (state: RootState) => state.page;
export default pageSlice.reducer;