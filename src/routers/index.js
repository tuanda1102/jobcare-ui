import Home from '~/pages/Home';
import Accounts from '~/pages/Accounts/Accounts';
import Profile from '~/pages/Profile/Profile';
import Admin from '~/pages/Admin/Admin';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/accounts', component: Accounts, layout: null },
];

export const privateRoutes = [{ path: '/profile', component: Profile }];

export const userPrivateRoutes = [];
export const recruiterPrivateRoutes = [];
export const adminPrivateRoutes = [{ path: '/admin', component: Admin }];
