import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {depositApi} from "../api/depositApi";

const initialState = {
    transactions: [],
    deposits: [],
    usersCount: 0,
    depositsSum: 0,
    withDrawsSum: 0,
    amount: 0,
    wallet: "",
    url: "",
    isDeposit: false,
    days: 0,
    loading: false,
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
            await depositApi.withDraw(number, amount, currency, system)
        } catch (e) {
            return rejectWithValue('Не удалось вывести сресдтва')
        }
    }
)

export const deposit = createAsyncThunk(
    'deposit',
    async ({amount, currency, system, term}, {rejectWithValue}) => {
        try {
            const response = await depositApi.deposit(amount, currency, system, term)
            return response.data
        } catch (e) {
            return rejectWithValue('Что-то пошло не так во время пополнения')
        }
    }
)

export const getAllTransaction = createAsyncThunk(
    'getAllTransaction',
    async (_, {rejectWithValue}) => {
        try {
            const response = await depositApi.getTransactions()
            return response.data
        } catch (e) {
            return rejectWithValue('Не удалось получить все транзакций')
        }
    }
)

export const getDays = createAsyncThunk(
    'getDays',
    async (_, {rejectWithValue}) => {
        try {
            const response = await depositApi.getDays()
            return response.data.days_since_opened
        } catch {
            return rejectWithValue('Произошла ошибка, во время получение дней')
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
        builder.addCase(deposit.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deposit.fulfilled, (state, action) => {
            state.url = action.payload.url
            state.amount = action.payload.amount
            state.wallet = action.payload.wallet
            state.isDeposit = true
            state.loading = false
        })
        builder.addCase(getAllTransaction.fulfilled, (state, action) => {
            state.transactions = action.payload.deposits
        })
        builder.addCase(getDays.fulfilled, (state, action) => {
            state.days = action.payload
            console.log('days', action.payload)
        })
        // TODO: если удалось вывести средства, то добавить сюда логику
        // builder.addCase(withdraw.fulfilled, (state, action) => {
        //
        // })

        // TODO: если не удалось вывести средства, то вывести ошибку
        // builder.addCase(withdraw.rejected, (state, action) => {
        //
        // })

        // TODO: если удалось пополнить средства, то добавить сюда логику
        // builder.addCase(deposit.fulfilled, (state, action) => {
        //
        // })

        // TODO: если не удалось пополнить средства, то вывести ошибку
        // builder.addCase(deposit.rejected, (state, action) => {
        //
        // })
    }
})

export const {reducer: depositReducer, actions: depositActions} = depositSlice