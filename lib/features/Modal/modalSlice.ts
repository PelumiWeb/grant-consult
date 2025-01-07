'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";

export interface ModalState {
    open: boolean;
    modalType: string | undefined;
    modalContent?: string | any;
    from?: string;

}

const initialState: ModalState = {
    open: false,
    modalType: "",
    modalContent: ""
}




export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers:{
        openModal: (state, action: PayloadAction<ModalState>) => {
            state.open = action.payload.open;
            state.modalType = action.payload.modalType;
            state.modalContent = action.payload.modalContent;

        },
        closeModal: (state) => {
            state.open = false;
            state.modalType = ""
            state.modalContent = ""

        }
    }
}) 


export const {openModal, closeModal} = modalSlice.actions

export const selectModal = (state: RootState) => state.modal

export default modalSlice.reducer