import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name : "movie",
    initialState : {
        page : 1
    },
    reducers : {
        PageMovie : (state , action) => {
            state.page = action.payload
        },
        plusPage : (state) => {
            state.page = state.page + 1
        }
    }
})