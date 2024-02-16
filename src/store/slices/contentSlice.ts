import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface ContentState {
  userId: string;
  reviewTitle: string;
  category: string;
  productName: string;
  productLink: string;
  productImages: FileList | null;
  reviewContent: string;
  grade: 0 | 1 | 2 | 3 | 4 | 5;
}

const initialState: ContentState = {
  userId: "",
  reviewTitle: "",
  category: "",
  productName: "",
  productLink: "",
  productImages: null,
  reviewContent: "",
  grade: 0,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    resetContent: (state) => {
      return initialState;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setReviewTitle: (state, action: PayloadAction<string>) => {
      state.reviewTitle = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setProductName: (state, action: PayloadAction<string>) => {
      state.productName = action.payload;
    },
    setProductLink: (state, action: PayloadAction<string>) => {
      state.productLink = action.payload;
    },
    setGrade: (state, action: PayloadAction<0 | 1 | 2 | 3 | 4 | 5>) => {
      state.grade = action.payload;
    },
    setProductImages: (state, action: PayloadAction<FileList | null>) => {
      state.productImages = action.payload;
    },
    setReviewContent: (state, action: PayloadAction<string>) => {
      state.reviewContent = action.payload;
    }
  }
});

export const { resetContent, setUserId, setReviewTitle, setCategory, setProductName, setProductLink, setGrade, setProductImages, setReviewContent } = contentSlice.actions;
export const selectContent = (state: RootState) => state.content;
export default contentSlice.reducer;