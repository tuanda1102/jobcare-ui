import config from '~/config';
import Home from '~/pages/Home';
import Accounts from '~/pages/Accounts/Accounts';
import Profile from '~/pages/Profile/Profile';
import Admin from '~/pages/Admin/Admin';
import Recruitment from '~/pages/Recruitment/Recruitment';
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.recruitment, component: Recruitment },
    { path: config.routes.accounts, component: Accounts, layout: null },
];

export const privateRoutes = [
    { path: config.routes.profile, component: Profile },
];

export const userPrivateRoutes = [];
export const recruiterPrivateRoutes = [];
export const adminPrivateRoutes = [
    { path: config.routes.admin, component: Admin },
];
