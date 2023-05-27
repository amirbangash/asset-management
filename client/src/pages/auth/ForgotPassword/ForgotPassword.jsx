import React from 'react'
import { Box, Typography } from '@mui/material'
import { ReactComponent as ForgotPasswordLogo } from '../../../assets/svg/forgot.svg'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom'
import CommonButton from '../../../components/Common/CommonButton';
import CommonTextField from '../../../components/Common/CommonTextField';


const ForgotPassword = () => {
    return (
        <Box component='form' maxWidth='lg' className='forgotPassPage'>
            <Box className='innerContainer' textAlign='center'>
                <ForgotPasswordLogo />
                <Typography align='center' variant='h4' fontWeight={700} >
                    Forgot your password?
                </Typography>
                <Typography variant='h6' fontSize={16} marginY={4} lineHeight={1.2}>
                    Please enter the email address associated with your account and We will email you a link to reset your password.
                </Typography>
                <CommonTextField label='Email address' />
                <CommonButton fullWidth={true} buttonText='Send Request' color='primary' />
                <Link to='/'>
                    <CommonButton color='Dark' size='small' variant='text' startIcon={<ChevronLeftIcon />} buttonText={'Return to sign in'} />
                </Link>
            </Box>
        </Box>
    )
}

export default ForgotPassword