import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ModalType {
  modal: "login" | "signup" | "";
}

const initialState: ModalType = {
  modal: ""
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<"login" | "signup" | "">) => {
      state.modal = action.payload;
    }
  }
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;