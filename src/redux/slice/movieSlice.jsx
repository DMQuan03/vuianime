import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name : "movie",
    initialState : {
        page : 1,
        temp : {

        },
        listComment : [

        ]
    },
    reducers : {
        PageMovie : (state , action) => {
            state.page = action.payload
        },
        plusPage : (state) => {
            state.page = state.page + 1
        },
        tempComment : (state ,action) => {
            state.temp = action.payload
        },
        listCommentSuccess : (state ,action) => {
            state.listComment = action.payload
        },
        commentRealTime : (state , action) => {
            state.listComment = [action.payload , ...state.listComment]
        }

    }
})