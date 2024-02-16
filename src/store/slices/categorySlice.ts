import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface CategoryType {
  category: "컴퓨터" | "노트북" | "핸드폰" | "모니터" | "키보드" | "마우스" | "태블릿" | "스마트워치" | "스피커" | "리뷰" | "좋아요" | "댓글" | "none";
}

const initialState: CategoryType = { 
  category: "none" 
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    resetCategory: (state) => {
      return initialState;
    },
    setCategory: (state, action: PayloadAction<"컴퓨터" | "노트북" | "핸드폰" | "모니터" | "키보드" | "마우스" | "태블릿" | "스마트워치" | "스피커" | "리뷰" | "좋아요" | "댓글" | "none">) => {
      state.category = action.payload;
    }
  }
});

export const { resetCategory, setCategory } = categorySlice.actions;
export const selectCategory = (state: RootState) => state.category;
export default categorySlice.reducer;