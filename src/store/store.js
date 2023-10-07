import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import authSlice from "./authSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        auth: authSlice,
        movies: movieSlice,
        gpt: gptSlice,
        config: configSlice,
    }
})

export default store