import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/UserSlice.jsx'
import productSlice from './reducers/productSlice.jsx'

export const store = configureStore({
    reducer: {
        user: userSlice,
        products: productSlice
    },
})