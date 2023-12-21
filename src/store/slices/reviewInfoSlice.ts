import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContentState } from "./contentSlice";

export interface ReviewInfo extends Omit<ContentState, 'productImages'> {
  likey: number;
  createdAt: string;
  productImages: string[];
  nickname: string;
  userImage: string;
};

const initialState: ReviewInfo = {
  userId: "",
  nickname: "",
  userImage: "",
  reviewTitle: "",
  category: "",
  productName: "",
  productLink: "",
  productImages: [],
  reviewContent: "",
  grade: 0,
  likey: 0,
  createdAt: ""
};

const reviewInfoSlice = createSlice({
  name: 'reviewInfo',
  initialState,
  reducers: {
    setReviewInfo: (state, action: PayloadAction<ReviewInfo>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setLikey: (state, action: PayloadAction<number>) => {
      state.likey = action.payload;
    }
  }
});

export const { setReviewInfo, setLikey } = reviewInfoSlice.actions;
export default reviewInfoSlice.reducer;