import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name : "auth",
    initialState : {
        checkLogin : false,
    },
    reducers : {
        LoginSuccess : (state , action) => {
            state.checkLogin = true
        },
        logout : (state , action) => {
            state.checkLogin = false
        }
    }
})