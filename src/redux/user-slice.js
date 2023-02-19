import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userApi} from "../api/userApi";


export const registerThunk = createAsyncThunk(
    'auth/register',
    async ({login, password}, {rejectWithValue}) => {
        try {
            await userApi.register(login, password)
        } catch (e) {
            return rejectWithValue('Opps there seems to be an error')
        }

    }
)


export const loginThunk = createAsyncThunk(
    'login',
    async ({login, password}, {rejectWithValue}) => {
        try {
            const response = await userApi.login(login, password)
            localStorage.setItem('access_token', response.data.tokens.access);
            console.log('Из loginThunk', localStorage.getItem('access_token'))
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
            await userApi.logout(refresh)
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
            const response = await userApi.checkAuth(refresh);

            localStorage.setItem('access_token', response.data.access);
        } catch (error) {
            return rejectWithValue('Something went wrong while checking authentication');
        }
    }
);

export const getUserData = createAsyncThunk(
    'getUserdata',
    async (_, {rejectWithValue}) => {
        try {
            const response = await userApi.getUserData()
            return response.data
        } catch (e) {
            return rejectWithValue('Не удалось получить данные пользователя')
        }
    }
)

export const getAllReferrals = createAsyncThunk(
    'getAllReferrals',
    async (_, {rejectWithValue}) => {
        try {
            const response = await userApi.getAllReferrals()
            return response.data
        } catch (e) {
            return rejectWithValue('Не удалось получить рефераллов')
        }
    }
)

export const getUserWallets = createAsyncThunk(
    'getUserWallets',
    async (_, {rejectWithValue}) => {
        try {
            const response = await userApi.getUserWallets()
            return response.data
        } catch (e) {
            return rejectWithValue('Не удалось получить кошельки пользователя')
        }
    }
)



const initialState = {
    isAuth: false,
    userId: null,
    email: "",
    referral_code: "",
    my_referal_link: "",
    first_level_referrals: [],
    second_level_referrals: [],
    userWallets: []
}

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state) => {
            state.isAuth = true
        })
        builder.addCase(logout.fulfilled, (state) => {
            state.isAuth = false
        })
        builder.addCase(checkAuth.fulfilled, (state) => {
            state.isAuth = true
        })
        builder.addCase(getUserData.fulfilled, (state, action) => {
            state.userId = action.payload.id
            state.email = action.payload.email
            state.referral_code = action.payload.referral_code
            state.my_referal_link = action.payload.my_referal_link
        })
        builder.addCase(getAllReferrals.fulfilled, (state, action) => {
            state.first_level_referrals = action.payload.first_level_referrals
            state.second_level_referrals = action.payload.second_level_referrals
        })
        builder.addCase(getUserWallets.fulfilled, (state, action) => {
            state.userWallets = action.payload
        })
    }
})

export const {reducer: userReducer, actions: userActions} = userSlice