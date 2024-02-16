import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { origin_URL } from "../../App";
import axios from "axios";
import { RootState } from "..";

export type Post = {
  reviewId: string;
  productImage: string;
  productName: string;
  grade: 1 | 2 | 3 | 4 | 5;
};

type StateType = {
  status: string;
  posts: Post[];
};

const initialState: StateType = {
  status: "",
  posts: []
};

export const getPostsThunk = createAsyncThunk<Post[]>('asyncThunk/getProducts', async () => {
  const response = await axios.get(`${origin_URL}/review/topReviews`);
  return response.data;
});

const postInfoSlice = createSlice({
  name: 'postInfo',
  initialState,
  reducers: {
    setPostInfo: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getPostsThunk.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = "fulfilled";
        state.posts = action.payload;
      })
      .addCase(getPostsThunk.rejected, (state) => {
        state.status = "rejected";
      })
  }
});

export const { setPostInfo } = postInfoSlice.actions;
export const selectPosts = (state: RootState) => state.postInfo;
export default postInfoSlice.reducer;