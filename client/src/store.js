import { configureStore } from '@reduxjs/toolkit'
import demoSlice from "./slice/counter"

//crated a store
const store = configureStore({
    reducer: {
        demo: demoSlice
    }
})

export default store