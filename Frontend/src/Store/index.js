import { configureStore, createSlice } from "@reduxjs/toolkit"

const authorSlice = createSlice({
    name: "author",
    initialState: { isLoggedIn:false },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
    },
});

export const authorAction = authorSlice.actions;

export const store = configureStore({
    reducer: authorSlice.reducer,
});