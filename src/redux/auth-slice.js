import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "../api/authApi";
import {API} from "../api/api";
import axios from "axios";

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
// const refresh_token = localStorage.getItem('refresh_token')
// API.post('auth/logout/', {refresh_token,
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Token ' + localStorage.getItem('refresh_token'),
//     },
// })
//     .then(response => {
//         localStorage.clear()
//         axios.defaults.headers.common['Authorization'] = null;
//         window.location.href = '/login'
//     })
//     .catch(error => {
//         // handle error
//         console.log(error);
//     });

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async ({refreshToken}, {rejectWithValue}) => {
        try {
            const response = await authApi.logout(refreshToken)
            console.log(response)
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
        login: (state, action) => {
            state.isAuth = action.payload
        },
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
        [loginThunk.fulfilled]: (state) => {
            state.isAuth = true
        },
        [logoutThunk.fulfilled]: (state) => {
            state.isAuth = false
        }
    }
})

export const {reducer: authReducer, actions: authActions} = authSlice