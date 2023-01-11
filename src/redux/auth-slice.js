import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        userId: null,
        email: "",
        username: null,
        referral_code: null,
        my_referal_link: null,
    },
    reducers: {},
    extraReducers: {
        [register.pending]: (state, action) => {
        },
        [register.fulfilled]: (state, action) => {
        },
        [register.rejected]: (state, action) => {
        }
    }
})

export const register = createAsyncThunk(
    'auth/register',
    async () => {
        const response = await
    }
)


export default authSlice.reducer