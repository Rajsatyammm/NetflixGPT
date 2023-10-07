import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    gptSuggestion: null,
    isGPTtab: false,
}
const gptSlice = createSlice({
    name: "gpt",
    initialState: initialState,
    reducers: {
        toggleClick: (state) => {
            state.isGPTtab = !state.isGPTtab
        },
        setGptTabFalse: (state) => {
            state.isGPTtab = false
        }
    }
})

export const { toggleClick, setGptTabFalse } = gptSlice.actions

export default gptSlice.reducer