import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {exchangeApi} from "../api/exchangeApi";

const initialState = {
    bitcoinExchange: 0,
    tronExchange: 0,
    dogeExchange: 0,
    litecoinExchange: 0
}

export const getBitcoinExchange = createAsyncThunk(
    "getBitcoinExchange",
    async (_, {rejectWithValue}) => {
        try {
            const response = await exchangeApi.getBitcoinExchange()
            return response.data.bitcoin.usd
        } catch(error) {
            return rejectWithValue("Произошла ошибка, во время получение курса криптавольют")
        }
    }
)

export const getLitecoinExchange = createAsyncThunk(
    "getLitecoinExchange",
    async (_, {rejectWithValue}) => {
        try {
            const response = await exchangeApi.getLitecoinExchange()
            return response.data.litecoin.usd
        } catch(error) {
            return rejectWithValue("Произошла ошибка, во время получение курса криптавольют")
        }
    }
)

export const getDogecoinExchange = createAsyncThunk(
    "getDogecoinExchange",
    async (_, {rejectWithValue}) => {
        try {
            const response = await exchangeApi.getDogecoinExchange()
            return response.data.dogecoin.usd
        } catch(error) {
            return rejectWithValue("Произошла ошибка, во время получение курса криптавольют")
        }
    }
)

export const getTronExchange = createAsyncThunk(
    "getTronExchange",
    async (_, {rejectWithValue}) => {
        try {
            const response = await exchangeApi.getTronExchange()
            return response.data.tron.usd
        } catch(error) {
            return rejectWithValue("Произошла ошибка, во время получение курса криптавольют")
        }
    }
)

const exchangeSlice = createSlice({
    name: "exchangeSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBitcoinExchange.fulfilled, (state, action) => {
            state.bitcoinExchange = action.payload
        })
        builder.addCase(getLitecoinExchange.fulfilled, (state, action) => {
            state.litecoinExchange = action.payload
        })
        builder.addCase(getDogecoinExchange.fulfilled, (state, action) => {
            state.dogeExchange = action.payload
        })
        builder.addCase(getTronExchange.fulfilled, (state, action) => {
            state.tronExchange = action.payload
        })
    }
})


export const {reducer: exchangeReducer, actions: exchangeActions} = exchangeSlice