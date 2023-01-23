import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./auth-reducer";


let store = configureStore({
    reducer: {
        music: authSlice.reducer
    }
})


export default store