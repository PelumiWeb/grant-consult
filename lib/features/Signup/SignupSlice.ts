'use client';

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface SignupState {
    userType: string;
    userTypeSelected: boolean;
}

const initialState: SignupState = {
    userType: "(NGO, corporate, Individual)",
    userTypeSelected: false

}




export const SignupSlice = createSlice({
    name: "signup",
    initialState,
    reducers:{
        setUserType: (state, action) => {
           state.userType = action.payload.userType;
           state.userTypeSelected = action.payload.userTypeSelected
        },
        
    }
}) 


export const {setUserType} = SignupSlice.actions

export const selectSignup = (state: RootState) => state.signup

export default SignupSlice.reducer