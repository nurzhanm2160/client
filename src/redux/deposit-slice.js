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


export const withdraw = createAsyncThunk(
    'withdraw',
    async ({number, amount, currency, system}, {rejectWithValue}) => {
        try {
            const response = await depositApi.withDraw(number, amount, currency, system)
        } catch (e) {
            return rejectWithValue('Не удалось вывести сресдтва')
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
        // TODO: если удалось вывести средства, то добавить сюда логику
        // builder.addCase(withdraw.fulfilled, (state, action) => {
        //
        // })

        // TODO: если не удалось вывести средства, то вывести ошибку
        // builder.addCase(withdraw.rejected, (state, action) => {
        //
        // })
    }
})

export const {reducer: depositReducer, actions: depositActions} = depositSlice