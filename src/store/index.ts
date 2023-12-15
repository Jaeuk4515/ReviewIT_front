import { configureStore } from "@reduxjs/toolkit";
import postInfoSlice from "./slices/postInfoSlice";
import contentSlice from "./slices/contentSlice";
import newContentSlice from "./slices/newContentSlice";
import pageSlice from "./slices/pageSlice";
import categorySlice from "./slices/categorySlice";
import userSlice from "./slices/userSlice";
import reviewInfoSlice from "./slices/reviewInfoSlice";
import searchTextSlice from "./slices/searchTextSlice";

const store = configureStore({
  reducer: {
    postInfo: postInfoSlice,
    content: contentSlice,
    newContent: newContentSlice,
    page: pageSlice,
    category: categorySlice,
    user: userSlice,
    reviewInfo: reviewInfoSlice,
    searchText: searchTextSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export default store;