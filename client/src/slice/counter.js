import { createSlice } from '@reduxjs/toolkit'

//created a slice
const demoSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        operation: (state, action) => {
            state.value = action.payload 
        }
    }
})

//exported reducer
export const { operation } = demoSlice.actions

//default export the slice
export default demoSlice.reducer