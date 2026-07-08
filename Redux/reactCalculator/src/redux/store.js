import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counterSclice'

export const store = configureStore({
    reducer: {
        counter:counterReducer
    }
})