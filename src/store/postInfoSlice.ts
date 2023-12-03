import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PostObject = {
  reviewId: string;
  productImage: string;
  productName: string;
  grade: 1 | 2 | 3 | 4 | 5;
};

const initialState: PostObject[] = [];

const postInfoSlice = createSlice({
  name: 'postInfo',
  initialState,
  reducers: {
    setPostInfo: (state, action: PayloadAction<PostObject[]>) => {
      return action.payload;
    }
  }
});

export const { setPostInfo } = postInfoSlice.actions;
export default postInfoSlice.reducer;