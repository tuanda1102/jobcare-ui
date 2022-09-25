import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ redirectPath, isAllowed, children }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAllowed === false) {
            return navigate(redirectPath);
        }
    }, []);

    return children ? children : <Outlet />;
}

ProtectedRoute.propTypes = {
    isAllowed: PropTypes.bool,
    redirectPath: PropTypes.string,
};

export default ProtectedRoute;
