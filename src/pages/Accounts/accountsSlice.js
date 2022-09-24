import axios from 'axios';
import {
    createAsyncThunk,
    createSlice,
    isRejectedWithValue,
} from '@reduxjs/toolkit';
import { API_URL, LOCAL_STORAGE_TOKEN_NAME } from '~/constants/constants';
import { setAuthToken } from '~/utils/auth.utils';

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        status: 'idle',
        success: false,
        isAuth: false,
        isRegistered: '',
        message: '',
        data: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                console.log('action', action.payload);
                state.status = 'idle';
                if (action.payload.success) {
                    state.isAuth = true;
                }
            })
            .addCase(fetchLogin.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.status = 'idle';
                    state.success = true;
                    localStorage.setItem(
                        LOCAL_STORAGE_TOKEN_NAME,
                        action.payload.data.accessToken,
                    );
                    state.message = '';
                    state.data = action.payload.data;
                } else {
                    state.status = 'idle';
                    state.message = 'Tài khoản hoặc mật khẩu không chính xác';
                    state.success = false;
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
            return res.data;
        } catch (error) {
            return isRejectedWithValue(error.response);
        }
    },
);

export const fetchUser = createAsyncThunk('accounts/fetchUser', async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
        setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    try {
        const res = await axios.get(`${API_URL}/api/auth/fetchUser`);
        console.log('res', res);
        return res.data;
    } catch (error) {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
        setAuthToken(null);
        return isRejectedWithValue(error.response);
    }
});
