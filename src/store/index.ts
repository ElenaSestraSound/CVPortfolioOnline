import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from './navigation-slice'

const store = configureStore({
    reducer: {
        navigation: navigationReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch