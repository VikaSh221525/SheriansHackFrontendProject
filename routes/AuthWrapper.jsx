import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const AuthWrapper = (props) => {
    const user = useSelector((state) => state.user.data);
    return (
        user?.isAdmin ? props.children : <Navigate to='*' replace />
    )
}

export default AuthWrapper