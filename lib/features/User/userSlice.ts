'use client';

import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface UserState {
    user: {
accountStatus: null,
code: string
country: null
countryName: null
dateKycSubmitted: null
email: string,
emailConfirmed:boolean
fullName: string
homeAddress: null
id: number
idCard: null
idCardName: null
idNumber: null
is2FAEnabled: boolean
isDeleted: boolean
isDisable: boolean
kycDeclineReason: null
kycverification: null
lastLogin: null
numberOfReferrals: number,
phoneNumber: null
phoneNumberConfirmed: boolean
photo: null
profilePicUrl: null
userActivated:false
userName: string;
userType: string;
    } | null;
}

const initialState: UserState = {
    user: null,
}




export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser: (state, action:PayloadAction<UserState>) => {
           state.user = action.payload.user

        },
        logout: (state) => {
              state.user = null
        }
    }
}) 


export const {setUser, logout} = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer