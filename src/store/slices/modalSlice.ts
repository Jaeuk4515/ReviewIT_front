import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

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
export const selectModal = (state: RootState) => state.modal;
export default modalSlice.reducer;