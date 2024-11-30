'use client';

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface ModalState {
    isScrolled:boolean
}

const initialState: ModalState = {
    isScrolled: false
}




export const scrollSlice = createSlice({
    name: "isScrolled",
    initialState,
    reducers:{
        setIsScrolled: (state, action) => {
           state.isScrolled = action.payload
        },
       
    }
}) 


export const {setIsScrolled,} = scrollSlice.actions

export const selectScrolled = (state: RootState) => state.scrolled

export default scrollSlice.reducer