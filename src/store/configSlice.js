import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currLanguage: "english",
}

const configSlice = createSlice({
    name: "config",
    initialState: initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.currLanguage = action.payload
        },
    }
})

export const {changeLanguage} = configSlice.actions

export default configSlice.reducer