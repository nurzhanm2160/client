import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "../api/authApi";

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
    'login',
    async ({login, password}, {rejectWithValue}) => {
        try {
            const response = await authApi.login(login, password)
            localStorage.setItem('access_token', response.data.tokens.access);
            localStorage.setItem('refresh_token', response.data.tokens.refresh);
        } catch (e) {
            return rejectWithValue('Что-то пошло не так')
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

export const referralsThunk = createAsyncThunk(
    "auth/referrals",
    async ({my_referral_link}, {rejectWithValue}) => {
        try {

        } catch (error) {
            return rejectWithValue("referral_not_corrected")
        }
    }
)


const initialState = {
    isAuth: false,
    userId: null,
    email: '',
    referral_code: null,
    my_referral_link: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = action.payload
        },
        logout: (state) => {
            state.isAuth = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.isAuth = true
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.isAuth = false
        })
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.isAuth = true
        })
    }
})

export const {reducer: authReducer, actions: authActions} = authSlice