import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { tabsName } from '../../utils/TabsTypes'

// Define a type for the slice state
interface tab {
  name: string
}

// Define the initial state using that type
const initialState: tab = {
  name: tabsName.dashboad,
}

export const tabSlice = createSlice({
  name: 'tab',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.name = action.payload
    },
    decrement: (state) => {
    //   state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { setActive, } = tabSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTab = (state: RootState) => state.tabs

export default tabSlice.reducer