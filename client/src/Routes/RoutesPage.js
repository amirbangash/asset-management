import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import Login from '../pages/auth/Login/Login'
import Register from '../pages/auth/Register/Register'
import Dashboard from '../pages/dashboard/Dashboard'
import ForgotPassword from '../pages/PageNotFound/PageNotFound'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
// import Layout from './Layout'
import RequiredAuth from './RequiredAuth'
import FullLayout from '../layouts/full/FullLayout'
import BlankLayout from '../layouts/blank/BlankLayout'


const RoutesPage = () => {

    const auth = JSON.parse(localStorage.getItem('Auth'))


    return (
        <Routes>
            <Route path='/' element={auth?.user ? <FullLayout /> : <BlankLayout />} >

                {/* Public Routes */}
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="reset-password" element={<ForgotPassword />} />
                {/* <Route path="test" element={<Test />} /> */}

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