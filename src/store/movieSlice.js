import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    currMovieDetails: null,
    currMovieTrailer: null
}

const movieSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addCurrMovieDetails: (state, action) => {
            state.currMovieDetails = action.payload
        },
        removeCurrMovieDetails: (state) => {
            state.currMovieDetails = null
        },
        addCurrMovieTrailer: (state, action) => {
            state.currMovieTrailer = action.payload
        },
        removeCurrMovieTrailer: (state) => {
            state.currMovieDetails = null
        },

    }
})


export const {
    addNowPlayingMovies, addPopularMovies, addTopRatedMovies,
    addUpcomingMovies, addTrailerVideo, addCurrMovieDetails,
    removeCurrMovieDetails, addCurrMovieTrailer, removeCurrMovieTrailer }
    = movieSlice.actions

export default movieSlice.reducer