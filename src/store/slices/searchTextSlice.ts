import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState: string = "";

const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    resetSearchText: (state) => {
      return initialState;
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      return action.payload;
    }
  }
});

export const { resetSearchText, setSearchText } = searchTextSlice.actions;
export const selectSearchText = (state: RootState) => state.searchText;
export default searchTextSlice.reducer;