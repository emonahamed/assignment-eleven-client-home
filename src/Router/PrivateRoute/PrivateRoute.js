import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <p className='text-5xl'>
            <div className="badge badge-lg"></div>
            <div className="badge badge-md"></div>
            <div className="badge badge-sm"></div>
            <div className="badge badge-xs"></div>
        </p>
    }

    if (user) {
        return children;
    }



    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;