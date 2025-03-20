'use client';


import { tabsName } from "@/app/[locale]/utils/types/TabsTypes";
import { createSlice } from "@reduxjs/toolkit";

interface tab {
  name: string
}

// Define the initial state using that type
const initialState: tab = {
  name: tabsName.profile,
}

export const tabSlice = createSlice({
    name: "tab",
    initialState,
    reducers:{
        setActiveTab: (state, action) => {
            state.name = action.payload
        }
    }
}) 


export const {setActiveTab} = tabSlice.actions

export default tabSlice.reducer