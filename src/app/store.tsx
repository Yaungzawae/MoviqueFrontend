import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "../features/menuSlice"

export const store = configureStore({
    reducer: {
        menu: menuReducer
    }
})

export type IRootState = ReturnType<typeof store.getState>
