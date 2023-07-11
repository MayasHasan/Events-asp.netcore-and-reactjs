import React from 'react';
import {  useNavigate , Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
const PrivateRoute = () => {
    const navigate = useNavigate()
    const {loggedIn } = useAuthStatus()
   
    return loggedIn ? <Outlet/>:navigate ('/login')
}

export default PrivateRoute;
