import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export type User = {
  _id: string,
  nickname: string,
  email: string,
  userImage: string,
  likey: string[]
};

const initialState: User = {
  _id: "",
  nickname: "",
  email: "",
  userImage: "",
  likey: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: (state) => {
      return initialState;
    },
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setUserImage: (state, action: PayloadAction<string>) => {
      state.userImage = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    }
  }
});

export const { resetUser, setNickname, setUserImage, setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;