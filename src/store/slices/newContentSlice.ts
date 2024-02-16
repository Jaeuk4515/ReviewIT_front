import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContentState } from "./contentSlice";
import { RootState } from "..";

export interface newContentState extends Omit<ContentState, "productImages"> {
  productImages: string[];
  newProductImages: FileList | null;
  deletedProductImages: string[];
};

const initialState: newContentState = {
  userId: "",
  reviewTitle: "",
  category: "",
  productName: "",
  productLink: "",
  productImages: [],
  newProductImages: null,
  deletedProductImages: [],
  reviewContent: "",
  grade: 0,
};

const newContentSlice = createSlice({
  name: 'newContent',
  initialState,
  reducers: {
    setNewContent: (state, action: PayloadAction<newContentState>) => {
      return action.payload;
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
    setNewGrade: (state, action: PayloadAction<0 | 1 | 2 | 3 | 4 | 5>) => {
      state.grade = action.payload;
    },
    setProductImages: (state, action: PayloadAction<string[]>) => {
      state.productImages = action.payload;
    },
    setNewProductImages: (state, action: PayloadAction<FileList | null>) => {
      state.newProductImages = action.payload;
    },
    setDeletedProductImages: (state, action: PayloadAction<string[]>) => {
      state.deletedProductImages = action.payload;
    },
    setReviewContent: (state, action: PayloadAction<string>) => {
      state.reviewContent = action.payload;
    }
  }
});

export const { setNewContent, setReviewTitle, setCategory, setProductName, setProductLink, setNewGrade, setProductImages, setNewProductImages, setDeletedProductImages, setReviewContent } = newContentSlice.actions;
export const selectNewContent = (state: RootState) => state.newContent;
export default newContentSlice.reducer;