import { configureStore } from "@reduxjs/toolkit";
import postInfoSlice from "./postInfoSlice";
import contentSlice from "./contentSlice";
import newContentSlice from "./newContentSlice";

const store = configureStore({
  reducer: {
    postInfo: postInfoSlice,
    content: contentSlice,
    newContent: newContentSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export default store;