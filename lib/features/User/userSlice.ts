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
token?:string | null
}

const initialState: UserState = {
    user: { 
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
    otp:"",
},
    resetPasswordEmail: "",
    token: ""
}






export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser: (state, action:PayloadAction<UserState>) => {
           state.user = action.payload.user

        },
        setToken: (state, action:PayloadAction<UserState>) => {
           state.token = action.payload.token

        },
          setResetPassword: (state, action:PayloadAction<UserState>) => {
           state.resetPasswordEmail = action.payload.resetPasswordEmail

        },
        logout: (state) => {
              state.user = null
              state.token = null
        }
    }
}) 


export const {setUser, logout, setResetPassword, setToken} = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer