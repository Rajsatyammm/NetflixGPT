import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: null,
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.items = action.payload
        },
        removeUser: (state) => {
            state.items = null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer