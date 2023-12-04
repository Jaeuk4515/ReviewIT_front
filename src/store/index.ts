import { configureStore } from "@reduxjs/toolkit";
import postInfoSlice from "./postInfoSlice";
import contentSlice from "./contentSlice";
import newContentSlice from "./newContentSlice";
import pageSlice from "./pageSlice";

const store = configureStore({
  reducer: {
    postInfo: postInfoSlice,
    content: contentSlice,
    newContent: newContentSlice,
    page: pageSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export default store;