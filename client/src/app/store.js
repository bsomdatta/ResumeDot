import { configureStore } from '@reduxjs/toolkit'
import authReducer from './feautures/authSlice.js'

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})