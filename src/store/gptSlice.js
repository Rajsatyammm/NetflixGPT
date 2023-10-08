import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gptSuggestion: null,
    movieNames: null,
    movieDetails: null,
    isGPTtab: false,
    isGptVideoSuggestion: false,
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
        },
        addGptMovieData: (state, action) => {
            const { movieNames, movieDetails } = action.payload
            state.movieNames = movieNames;
            state.movieDetails = movieDetails;
        },
        toggleGptVideoSuggestion: (state) => {
            state.isGptVideoSuggestion = !state.isGptVideoSuggestion
        }
    }
})

export const { toggleClick, setGptTabFalse, addGptMovieData, toggleGptVideoSuggestion } = gptSlice.actions

export default gptSlice.reducer