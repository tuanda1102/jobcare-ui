import { useNavigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ redirectPath, isAllowed, children }) {
    const navigate = useNavigate();
    if (!isAllowed) {
        navigate(redirectPath);
    }

    return children ? children : <Outlet />;
}

export default ProtectedRoute;
