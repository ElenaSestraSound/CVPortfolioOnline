import { createSlice } from "@reduxjs/toolkit";


const navigationSlice = createSlice({
    name: 'navigation',
    initialState: { isDrawerOpen: false, activeSection: 'home' },
    reducers: {
        toggle(state) {
            state.isDrawerOpen = !state.isDrawerOpen
        },
        setActiveSection(state, action) {
            state.activeSection = action.payload
        }
    }
})

export default navigationSlice.reducer
export const navigationActions = navigationSlice.actions