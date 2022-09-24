import axios from 'axios';
import {
    createAsyncThunk,
    createSlice,
    isRejectedWithValue,
} from '@reduxjs/toolkit';
import { API_URL } from '~/constants/constants';

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        status: 'idle',
        isAuth: false,
        isRegistered: '',
        message: '',
        data: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                if (action.payload) {
                    state.status = 'idle';
                    state.isAuth = true;
                    state.message = '';
                    state.data = action.payload;
                } else {
                    state.status = 'idle';
                    state.message = 'Tài khoản hoặc mật khẩu không chính xác';
                    state.isAuth = false;
                }
            })
            .addCase(fetchRegister.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                if (action.payload) {
                    state.status = 'idle';
                    state.message = '';
                    state.isRegistered = true;
                } else {
                    state.status = 'idle';
                    state.isRegistered = false;
                    state.message = 'Email đã tồn tại';
                }
            });
    },
});

export const fetchRegister = createAsyncThunk(
    'accounts/fetchRegister',
    async ({ email, password, fullname }) => {
        try {
            const res = await axios.post(`${API_URL}/api/auth/register`, {
                email,
                password,
                fullname,
            });
            return res.data;
        } catch (error) {
            return isRejectedWithValue(error.response);
        }
    },
);

export const fetchLogin = createAsyncThunk(
    'accounts/fetchLogin',
    async (data) => {
        try {
            const res = await axios.post(`${API_URL}/api/auth/login`, data);
            return res.data.data;
        } catch (error) {
            return isRejectedWithValue(error.response.data);
        }
    },
);
