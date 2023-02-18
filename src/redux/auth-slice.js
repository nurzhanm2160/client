import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "../api/authApi";

export const register = createAsyncThunk(
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

export const login = createAsyncThunk(
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

export const logout = createAsyncThunk(
    'logout',
    async (_, {rejectWithValue}) => {
        try {
            const refresh = localStorage.getItem('refresh_token')
            const response = await authApi.logout(refresh)
        } catch (e) {
            return rejectWithValue('Не удалось вылогиниться')
        }
    }
)

export const checkAuth = createAsyncThunk(
    'checkAuth',
    async (_, { rejectWithValue }) => {
        try {
            const refresh = localStorage.getItem('refresh_token');
            const response = await authApi.checkAuth(refresh);

            localStorage.setItem('access_token', response.data.access);
            localStorage.getItem('access_token')
        } catch (error) {
            return rejectWithValue('Something went wrong while checking authentication');
        }
    }
);

export const getUserData = createAsyncThunk(
    'auth/myProfile',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await authApi.getUserData()
            return data
        } catch(e) {
            return rejectWithValue('Не удалось получить данные пользователя')
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
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login)
        // [loginThunk.fulfilled]: (state) => {
        //     state.isAuth = true
        // },
        // [logoutThunk.fulfilled]: (state) => {
        //     state.isAuth = false
        // },
        // [getUserData.fulfilled]: (state, action) => {
        //     const {id, email, referral_code, my_referal_link} = action.payload
        //     state.userId = id
        //     state.email = email
        //     state.referral_code = referral_code
        //     state.my_referal_link = my_referal_link
        // }
    }
})

export const {reducer: authReducer, actions: authActions} = authSlice