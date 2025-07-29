import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/UserSlice.jsx'

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
})