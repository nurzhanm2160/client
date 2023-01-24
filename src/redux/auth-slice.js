import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "../api/authApi";
import {API} from "../api/api";

export const registerThunk = createAsyncThunk(
    'auth/register',
    async ({login, password}, {rejectWithValue}) => {
        try {
            const response = await authApi.register(login, password)
            console.log(response)
        } catch (e) {
            return rejectWithValue('Opps there seems to be an error')
        }

    }
)

export const loginThunk = createAsyncThunk(
    'auth/login',
    async ({login, password}, {rejectWithValue}) => {
        try {
            const {data} = await authApi.login(login, password)
            console.log(data)
            localStorage.clear();
            localStorage.setItem('access_token', data.tokens.access);
            localStorage.setItem('refresh_token', data.tokens.refresh);
            API.defaults.headers.authorization = `Bearer ${data.tokens['access']}`;
        } catch (e) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
)

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async ({refreshToken}, {rejectWithValue}) => {
        try {
            const response = await authApi.logout(refreshToken)
            API.defaults.headers.authorization = null
            localStorage.clear()
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
        [loginThunk.fulfilled]: (state) => {
            state.isAuth = true
        },
        [logoutThunk.fulfilled]: (state) => {
            state.isAuth = false
        }
    }
})

export const {reducer: authReducer, actions: authActions} = authSlice