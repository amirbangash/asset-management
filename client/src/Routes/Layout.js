import React from 'react'
import { Outlet } from 'react-router-dom'
import FullLayout from '../layouts/full/FullLayout'

const Layout = () => {
    const auth = JSON.parse(localStorage.getItem('Auth'))
    const { user } = auth

    return (
        <main className='app'>
            {user
                ? <FullLayout />
                : <Outlet />
            }
        </main>
    )
}

export default Layout