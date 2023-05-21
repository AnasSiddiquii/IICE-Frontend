import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protectedstd = () => {
    const auth = localStorage.getItem('student')
    return (
        auth ? <Outlet /> : <Navigate to='/' />
    )
}

export default Protectedstd
