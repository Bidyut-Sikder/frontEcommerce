import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, redirect, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return (
            <div className="loader">Loading...</div>
        )
    }


    if (user) {
        return children
    }


    return (

        <Navigate to={'/login'} state={{ from: location }}  ></Navigate>
    );
};

export default PrivateRoute;