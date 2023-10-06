import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import authSlice from "./authSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        auth: authSlice,
        movies: movieSlice
    }
})

export default store