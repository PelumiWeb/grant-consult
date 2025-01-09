'use client';

import { createSlice } from "@reduxjs/toolkit";
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