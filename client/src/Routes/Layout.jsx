import React from 'react'
import { Outlet } from 'react-router-dom'
import FullLayout from '../layouts/full/FullLayout'

const Layout = () => {
    return (
        <main className='app'>
            {/* <Outlet /> */}
            <FullLayout />
        </main>
    )
}

export default Layout