import { configureStore } from "@reduxjs/toolkit"
import movieSlice from "./slice/movieSlice"
import authSlice from "./authSlice"

export default configureStore({
    reducer : {
        movie : movieSlice.reducer,
        auth : authSlice.reducer
    }
})