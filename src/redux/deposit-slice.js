import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {depositApi} from "../api/depositApi";

const initialState = {
    transactions: [],
    deposits: [],
    usersCount: 0,
    depositsSum: 0,
    withDrawsSum: 0
}

export const getUsersCount = createAsyncThunk(
    'getUsersCount',
    async (_, {rejectWithValue}) => {
        try {
            const response = await depositApi.getUsersCount()
            return response.data.users
        } catch (e) {
            return rejectWithValue('Не удалось получить количество пользователей')
        }
    }
)

export const getDepositsSum = createAsyncThunk(
    'getDepositsSum',
    async (_, {rejectWithValue}) => {
        try {
            const response = await depositApi.getDepositsCount()
            return response.data.deposit_sum
        } catch (e) {
            return rejectWithValue('Не удалось получить сумму депозитов')
        }
    }
)

export const getWithdrawsSum = createAsyncThunk(
    'getWithdrawsSum',
    async (_, {rejectWithValue}) => {
        try {
            const response = await depositApi.getWithdrawsCount()
            return response.data.withdraw_sum
        } catch (e) {
            return rejectWithValue('Не удалось получить сумму депозитов')
        }
    }
)

const depositSlice = createSlice({
    name: 'depositSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersCount.fulfilled, (state, action) => {
            state.usersCount = action.payload
        })
        builder.addCase(getDepositsSum.fulfilled, (state, action) => {
            state.depositsSum = action.payload
        })
        builder.addCase(getWithdrawsSum.fulfilled, (state, action) => {
            state.withDrawsSum = action.payload
        })
    }
})

export const {reducer: depositReducer, actions: depositActions} = depositSlice