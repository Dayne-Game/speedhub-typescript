import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, logout, reAuth } from "./service";
import { UserType } from "../../config/types";

const userInfoString = localStorage.getItem('userInfo');

const initialState = {
    user: userInfoString ? JSON.parse(userInfoString) : null,
    message: '',
    status: 'idle',
    loginSuccess: userInfoString ? true : false
} as AuthState

export const loginUser = createAsyncThunk(
    'auth/login',
    async (user: object, { rejectWithValue }) => {
        try {
            return await login(user)
        } catch (e) {
            const errorMessage = (e as Error).message;
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const reAuthUser = createAsyncThunk(
    'auth/reAuth',
    async (token: string, { rejectWithValue }) => {
        try {
            return await reAuth(token)
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            return await logout();
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading',
                state.loginSuccess = false
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthPayload>) => {
                state.user = action.payload.payload?.user || null
                state.status = 'loaded'
                state.loginSuccess = true
            })
            .addCase(loginUser.rejected, (state) => {
                state.message = 'Login has failed (rejected)'
                state.status = 'error'
                state.loginSuccess = false
            })
            .addCase(reAuthUser.pending, (state) => {
                state.status = 'loading'
                state.loginSuccess = true
            })
            .addCase(reAuthUser.fulfilled, (state, action) => {
                state.user = action?.payload
                state.status = 'loaded'
                state.loginSuccess = true
            })
            .addCase(reAuthUser.rejected, (state) => {
                state.status = 'error'
                state.loginSuccess = false
            })
            .addCase(logoutUser.pending, (state) => {
                state.status = 'loading'
                state.loginSuccess = true
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null
                state.status = 'loaded'
                state.loginSuccess = false
            })
            .addCase(logoutUser.rejected, (state) => {
                state.status = 'error'
                state.loginSuccess = true
            })
    }
})

interface AuthState {
    user: UserType | null,
    message: string
    status: string,
    loginSuccess: boolean,
}

interface AuthPayload {
    status: number,
    success: boolean,
    message: string,
    payload?: {
        user: UserType,
        accept_token: string,
    }
}

export default authSlice.reducer