import { configureStore } from "@reduxjs/toolkit";
import postInfoSlice from "./slices/postInfoSlice";
import contentSlice from "./slices/contentSlice";
import newContentSlice from "./slices/newContentSlice";
import pageSlice from "./slices/pageSlice";
import categorySlice from "./slices/categorySlice";

const store = configureStore({
  reducer: {
    postInfo: postInfoSlice,
    content: contentSlice,
    newContent: newContentSlice,
    page: pageSlice,
    category: categorySlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export default store;