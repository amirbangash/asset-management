import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import Login from './auth/Login/Login'
import Register from './auth/Register/Register'
import Dashboard from './dashboard/Dashboard'
import ForgotPassword from './auth/ForgotPassword/ForgotPassword'
import Layout from './Layout'
import RequiredAuth from './RequiredAuth'
import PageNotFound from './PageNotFound/PageNotFound'

const RoutesPage = () => {
    

    return (
        <Routes>
            <Route path='/' element={<Layout />} >

                {/* Public Routes */}
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="reset-password" element={<ForgotPassword />} />

                {/* Protected Routes */}
                <Route element={<RequiredAuth />} >
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>

                {/* Catch All */}
                <Route path="*" element={<PageNotFound />} />

            </Route>
        </Routes>
    )
}

export default RoutesPage