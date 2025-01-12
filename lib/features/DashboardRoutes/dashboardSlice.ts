'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { dashboardRouteName } from "@/app/[locale]/utils/types/dashboardRouteType";

export interface DashboardState {
    assignedGrant: string;
    consultation:string
    wallet:string
    dashboard:string;
    mygrant:string

}

const initialState: DashboardState = {
assignedGrant: dashboardRouteName.assignedGrant,
consultation: dashboardRouteName.consultation,
wallet:dashboardRouteName.wallet,
dashboard: dashboardRouteName.generalDashboard,
mygrant:dashboardRouteName.myGrants


}


export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers:{
        setActiveRoute: (state, action:PayloadAction<DashboardState>) => {
            state.assignedGrant = action.payload.assignedGrant;
            state.consultation = action.payload.consultation;
            state.wallet = action.payload.wallet;
            state.dashboard = action.payload.dashboard
            state.mygrant = action.payload.mygrant

        }
    }
}) 


export const {setActiveRoute} = dashboardSlice.actions

export const selectDashboardRoute = (state: RootState) => state.dashboard

export default dashboardSlice.reducer