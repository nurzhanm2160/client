import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./user-slice";
import {depositReducer} from "./deposit-slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        deposit: depositReducer
    }
})
