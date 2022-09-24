export const isAuthSelector = (state) => {
    return state.accounts.isAuth;
};

export const isRegisteredSelector = (state) => {
    return state.accounts.isRegistered;
};

export const accountsStatusSelector = (state) => {
    return state.accounts.status;
};

export const accountsDataSelector = (state) => {
    return state.accounts.data;
};

export const accountsMessageSelector = (state) => {
    return state.accounts.message;
};
