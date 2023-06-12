import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from '../pages/auth/Login/Login'
import Register from '../pages/auth/Register/Register'
import Dashboard from '../pages/dashboard/Dashboard'
import ForgotPassword from '../pages/auth/ForgotPassword/ForgotPassword'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import RequiredAuth from './RequiredAuth'
import BlankLayout from '../layouts/blank/BlankLayout'
import SamplePage from '../pages/sample-page/SamplePage'
import UpdateProfile from '../pages/auth/UpdateProfile/UpdateProfile'
import ProfilePage from '../pages/profile-page/ProfilePage'


const RoutesPage = () => {

    const auth = JSON.parse(localStorage.getItem('Auth'))

    return (
        <Routes>
            <Route path='/' element={<BlankLayout />} >

                {/* Public Routes */}
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="reset-password" element={<ForgotPassword />} />

                {/* Protected Routes */}
                <Route element={<RequiredAuth />} >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="sample-page" element={<SamplePage />} />
                    <Route path="profile" element={<UpdateProfile />} />
                    <Route path='my-profile' element={<ProfilePage />} />
                </Route>

                {/* Catch All */}
                <Route path="*" element={<PageNotFound />} />

            </Route>
        </Routes>
    )
}

export default RoutesPage