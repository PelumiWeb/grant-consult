'use client';

import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// export type User = {
  
// createdAt: string;
// email: string;
// emailVerified: boolean
// fullName: string
// id: string;
// lastLoggedIn: string;
// permissions: []
// role: string
// status:string
// updatedAt: string
// }

export interface UserState {
user?: {
createdAt?: string | undefined;
email?: string | undefined | null;
emailVerified?: boolean | undefined;
fullName?: string | undefined
id?: string;
lastLoggedIn?: string;
permissions?: []
role?: string
status?:string
updatedAt?: string
otp?:string

    } | null;
resetPasswordEmail?: string
}

const initialState: UserState = {
    user: { 
    // userType: "GENERAL_USER",
     createdAt: "",
    email: "",
    emailVerified: false,
    fullName: "",
    id: "",
    lastLoggedIn: "",
    permissions: [],
    role: "",
    status:"",
    updatedAt: "",
    otp:""
},
    resetPasswordEmail: ""
}




export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser: (state, action:PayloadAction<UserState>) => {
           state.user = action.payload.user

        },
          setResetPassword: (state, action:PayloadAction<UserState>) => {
           state.resetPasswordEmail = action.payload.resetPasswordEmail

        },
        logout: (state) => {
              state.user = null
        }
    }
}) 


export const {setUser, logout, setResetPassword} = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer