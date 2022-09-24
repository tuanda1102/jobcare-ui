import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
    adminPrivateRoutes,
    privateRoutes,
    publicRoutes,
    recruiterPrivateRoutes,
} from '~/routers';
import Home from './pages/Home';
import ProtectedRoute from './routers/ProtectedRoute';
import { renderRoutes } from './utils/auth.utils';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* PUBLIC ROUTES */}
                    {renderRoutes(publicRoutes)}

                    {/* PRIVATE ROUTES */}
                    {/* For ALL */}
                    <Route element={<ProtectedRoute redirectPath="/" />}>
                        {renderRoutes(privateRoutes)}
                    </Route>
                    {/* For Recruiter */}
                    <Route element={<ProtectedRoute redirectPath="/" />}>
                        {renderRoutes(recruiterPrivateRoutes)}
                    </Route>
                    {/* For Admin */}
                    <Route element={<ProtectedRoute redirectPath="/" />}>
                        {renderRoutes(adminPrivateRoutes)}
                    </Route>

                    {/* NOTE FOUND */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
