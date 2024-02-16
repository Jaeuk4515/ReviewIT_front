import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postInfoSlice from "./slices/postInfoSlice";
import contentSlice from "./slices/contentSlice";
import newContentSlice from "./slices/newContentSlice";
import pageSlice from "./slices/pageSlice";
import categorySlice from "./slices/categorySlice";
import userSlice from "./slices/userSlice";
import reviewInfoSlice from "./slices/reviewInfoSlice";
import searchTextSlice from "./slices/searchTextSlice";
import modalSlice from "./slices/modalSlice";
import loginSlice from "./slices/loginSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeSlice from "./slices/themeSlice";

const reducers = combineReducers({
  postInfo: postInfoSlice,
  content: contentSlice,
  newContent: newContentSlice,
  page: pageSlice,
  category: categorySlice,
  user: userSlice,
  reviewInfo: reviewInfoSlice,
  searchText: searchTextSlice,
  modal: modalSlice,
  login: loginSlice,
  theme: themeSlice
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'user', 'theme']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;