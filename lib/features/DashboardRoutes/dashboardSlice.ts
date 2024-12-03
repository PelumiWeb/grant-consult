'use client';

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { dashboardRouteName } from "@/app/utils/dashboardRouteType";

export interface DashboardState {
    assignedGrant: string;
    consultation:string
    wallet:string

}

const initialState: DashboardState = {
assignedGrant: dashboardRouteName.assignedGrant,
consultation: dashboardRouteName.consultation,
    wallet:dashboardRouteName.wallet

}


export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers:{
        setActiveRoute: (state, action) => {
            state.assignedGrant = action.payload.assignedGrant;
            state.consultation = action.payload.consultation;
            state.wallet = action.payload.wallet;

        }
    }
}) 


export const {setActiveRoute} = dashboardSlice.actions

export const selectDashboardRoute = (state: RootState) => state.dashboard

export default dashboardSlice.reducer