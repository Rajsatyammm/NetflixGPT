import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies: null,
    trailerVideo: null,

}

const movieSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        }
    }
})


export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions

export default movieSlice.reducer