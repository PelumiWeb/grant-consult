'use client';

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { modalName } from "@/app/utils/ModalTypes";

export interface ModalState {
    open: boolean;
    modalType: string;
}

const initialState: ModalState = {
    open: false,
    modalType: ""
}




export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers:{
        openModal: (state, action) => {
            state.open = action.payload.open;
            state.modalType = action.payload.modalType;
        },
        closeModal: (state) => {
            state.open = false;
            state.modalType = ""
        }
    }
}) 


export const {openModal, closeModal} = modalSlice.actions

export const selectModal = (state: RootState) => state.modal

export default modalSlice.reducer