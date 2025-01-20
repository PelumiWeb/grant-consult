'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { modalName } from "@/app/[locale]/utils/types/ModalTypes";
import { grantsData } from "@/app/[locale]/utils/constants/grants";

 type GrantsType  = { name: string, price: string, content: string,}

export interface ConsulatntState {
    consultantsTypes?: GrantsType[]
 selectedConsultantTypes?: string
 selectedConsultant?: any

}

const initialState: ConsulatntState = {
    consultantsTypes: [{ name: "Grant Writing", price: "$100", content: "Professional assistance with grant proposal writing (30 Minutes)" },
  { name: "Grant Review", price: "$100", content: "Expert review feedback on your grant proposal (30 Minutes)" },
   { name: "Grant Strategy", price: "$120", content: "Strategic planning for grant application (30 Minutes)" },
     { name: "Budget Planning", price: "$90", content: "Detailed grant budget development (30 Minutes)" },
{ name: "Compliance Check", price: "$85", content: "Grant compliance and eligibility review (30 Minutes)" },
  { name: "Impact Assessment", price: "$95", content: "GEvaluation and Impact measurement planning (30 Minutes) " },],
    selectedConsultantTypes: "",
    selectedConsultant: {}

 
}




export const consultantSlice = createSlice({
    name: "modal",
    initialState,
    reducers:{
        setActiveConsultantType: (state, action: PayloadAction<ConsulatntState>) => {
            state.selectedConsultantTypes = action.payload.selectedConsultantTypes

           const filteredData =  grantsData?.find((data) => data.name === action.payload.selectedConsultantTypes)
           state.selectedConsultant = filteredData

        },
     
    }
}) 


export const {setActiveConsultantType,} = consultantSlice.actions

export const selectConsultant = (state: RootState) => state.consultant

export default consultantSlice.reducer