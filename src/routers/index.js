import Home from '~/pages/Home';
import Accounts from '~/pages/Accounts/Accounts';

export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/accounts', component: Accounts, layout: null },
];
export const privateRoutes = [];
