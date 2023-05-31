import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { ReactComponent as Logo } from '../../assets/logos/Logo.svg'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/auth/actions'

const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = () => {
        dispatch(logoutUser())
        setTimeout(() => {
            navigate('/')
        }, 300)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar component='nav' color='Dark' position='static'>
                <Toolbar>
                    <Box component="div" sx={{ flexGrow: 1 }}>
                        <Logo sx={{ flexGrow: 1 }} />
                    </Box>
                    <Button color="inherit" onClick={handleLogOut} >Log Out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar