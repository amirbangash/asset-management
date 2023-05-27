import React from 'react'
import { Box, Typography } from '@mui/material'
import { ReactComponent as ErrorPageLogo } from '../../assets/svg/errorPage.svg'
import CommonButton from '../../components/Common/CommonButton'
import { Link } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <Box maxWidth='lg' className='pageNotFound'>
            <Box className='innerContainer' textAlign='center'>
                <Typography align='center' variant='h4' fontWeight={700} >
                    Sorry, page not found!
                </Typography>
                <Typography variant='h6' fontSize={16} marginY={2} lineHeight={1.2}>
                    Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
                </Typography>
                <ErrorPageLogo />
                <Link to='/'>
                    <CommonButton fullWidth={false} color='primary' buttonText='Go to Home' />
                </Link>
            </Box>
        </Box>
    )
}

export default PageNotFound