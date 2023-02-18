import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "../api/authApi";
import {API} from "../api/api";


export const registerThunk = createAsyncThunk(
    'auth/register',
    async ({login, password}, {rejectWithValue}) => {
        try {
            const response = await authApi.register(login, password)

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
            await authApi.logout(refreshToken)
            API.defaults.headers.authorization = null
            localStorage.clear()
        } catch (e) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
)

export const getUserData = createAsyncThunk(
    'auth/myProfile',
    async () => {
        try {
            const {data} = await authApi.getUserData()
            return data
        } catch (e) {
            return Promise.reject(e)
        }
    }
)

export const referralsThunk = createAsyncThunk(
    "auth/referrals",
    async ({my_referral_link}, {rejectWithValue}) => {
        try {

        } catch (error) {
            return rejectWithValue("referral_not_corrected")
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
        my_referral_link: null,
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = action.payload
        },
        logout: (state) => {
            state.isAuth = false
        },
    },
    extraReducers: {
        [loginThunk.fulfilled]: (state) => {
            state.isAuth = true
        },
        [logoutThunk.fulfilled]: (state) => {
            state.isAuth = false
        },
        [getUserData.fulfilled]: (state, action) => {
            const {id, email, referral_code, my_referral_link} = action.payload
            state.userId = id
            state.email = email
            state.referral_code = referral_code
            state.my_referral_link = my_referral_link
        },
    }
})

export const {reducer: authReducer, actions: authActions} = authSlice