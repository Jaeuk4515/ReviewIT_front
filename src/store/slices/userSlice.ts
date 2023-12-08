import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;