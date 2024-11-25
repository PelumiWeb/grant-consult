'use client';

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface ModalState {
    user: {} | null;
}

const initialState: ModalState = {
    user: null
}




export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser: (state, action) => {
           state.user = action.payload
        },
        deleteUser: (state) => {
            state.user = null;
        }
    }
}) 


export const {setUser, deleteUser} = userSlice.actions

export const selectModal = (state: RootState) => state.modal

export default userSlice.reducer