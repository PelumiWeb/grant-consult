'use client';

import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface UserState {
user?: {
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
phoneNumber: number | null
phoneNumberConfirmed: boolean
photo: null
profilePicUrl: null
userActivated:false
userName: string;
userType: string;
    } | null;
resetPasswordEmail?: string
}

const initialState: UserState = {
    user: { userType: "GENERAL_USER",
        accountStatus: null,
        code: "string",
        country: null,
       countryName: null,
      dateKycSubmitted: null,
      email: "string",
      emailConfirmed:false,
fullName: "string",
homeAddress: null,
id: 0,
idCard: null,
idCardName: null,
idNumber: null,
is2FAEnabled: true,
isDeleted: false,
isDisable: false,
kycDeclineReason: null,
kycverification: null,
lastLogin: null,
numberOfReferrals: 0,
phoneNumber: null,
phoneNumberConfirmed: false,
photo: null,
profilePicUrl: null,
userActivated:false,
userName: "string",
},
    resetPasswordEmail: ""
}




export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser: (state, action:PayloadAction<UserState>) => {
           state.user = action.payload.user
           state.resetPasswordEmail = action.payload.resetPasswordEmail

        },
        logout: (state) => {
              state.user = null
        }
    }
}) 


export const {setUser, logout} = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer