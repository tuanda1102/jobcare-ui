import { configureStore } from '@reduxjs/toolkit';
import { accountsSlice } from '~/pages/Accounts/accountsSlice';

const store = configureStore({
    reducer: {
        accounts: accountsSlice.reducer,
    },
});

export default store;
