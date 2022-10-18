import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import config from '~/config';
import {
    adminPrivateRoutes,
    privateRoutes,
    publicRoutes,
    recruiterPrivateRoutes,
} from '~/routers';
import { fetchUser } from './pages/Accounts/accountsSlice';
import Home from './pages/Home';
import TestUser from './pages/TestUser';
import PostQuiz from './pages/PostQuiz';

import ProtectedRoute from './routers/ProtectedRoute';
import { renderRoutes } from './utils/route.utils';
import {
    accountsDataSelector,
    isAuthSelector,
} from '~/redux/Selectors/authSelector';
import DefaultLayout from './Layouts/DefaultLayout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InformationTechnology from './pages/InformationTechnology';
import DisplayQuizz from './pages/DisplayQuizz';


function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector(isAuthSelector);
    const user = useSelector(accountsDataSelector);

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* PUBLIC ROUTES */}
                    {renderRoutes(publicRoutes)}

                    {/* PRIVATE ROUTES */}
                    {/* For ALL */}
                    <Route
                        element={
                            <ProtectedRoute
                                redirectPath={config.routes.accounts}
                                isAllowed={isAuth}
                            />
                        }
                    >
                        {renderRoutes(privateRoutes)}
                    </Route>

                    {/* For Recruiter */}
                    <Route
                        element={
                            <ProtectedRoute
                                redirectPath={config.routes.home}
                                isAllowed={
                                    !!isAuth && user?.data?.role === 'recruiter'
                                }
                            />
                        }
                    >
                        {renderRoutes(recruiterPrivateRoutes)}
                    </Route>
                    {/* For Admin */}
                    <Route
                        element={
                            <ProtectedRoute
                                redirectPath={config.routes.home}
                                isAllowed={
                                    !!isAuth && user?.data?.role === 'admin'
                                }
                            />
                        }
                    >
                        {renderRoutes(adminPrivateRoutes)}
                    </Route>

                    {/* NOTE FOUND */}
                    <Route
                        path="*"
                        element={
                            <DefaultLayout>
                                <Home />
                            </DefaultLayout>
                        }
                    />
                    <Route
                        path="/testuser"
                        element={
                            <DefaultLayout>
                                <TestUser />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path="/informationtechnology"
                        element={
                            <DefaultLayout>
                                <InformationTechnology />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path="/informationtechnology/displayquizz"
                        element={
                            <DefaultLayout>
                                <DisplayQuizz />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path="/postquiz"
                        element={
                            <DefaultLayout>
                                <PostQuiz/>
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
