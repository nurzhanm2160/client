import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "../api/authApi";

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (payload, {rejectWithValue}) => {
        try {
            const {login, password} = payload
            const response = await authApi.register(login, password)
            console.log(response)
        } catch (e) {
            return rejectWithValue('Opps there seems to be an error')
        }

    }
)

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (payload, {rejectWithValue}) => {
        try {
            const {login, password} = payload
            const response = await authApi.login(login, password)
        } catch (e) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        userId: null,
        email: "",
        username: null,
        referral_code: null,
        my_referal_link: null,
    },
    reducers: {
        logout: (state) => {
            state.isAuth = false
        }
    },
    extraReducers: {
        // [registerThunk.pending]: (state, action) => {
        // },
        // [registerThunk.fulfilled]: (state, action) => {
        //     console.log()
        // },
        // [registerThunk.rejected]: (state, action) => {
        // }
        [loginThunk.fulfilled]: (state, action) => {
            state.isAuth = true
        }
    }
})