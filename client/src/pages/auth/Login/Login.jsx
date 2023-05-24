import React, { useEffect, useState } from 'react'
import { Grid, Typography, TextField, Link } from '@mui/material'
import authMainImage from '../../../_metronic/assets/images/loginImg.png'
import '../authStyle.css'
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { successToast, errorToast } from '../../../utilities/toastify';
import CommonButton from '../../../components/Common/CommonButton';
import { login } from '../../../store/auth/actions';

const Login = () => {
    // test comments
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const isLogin = useSelector((state) => state.auth.userData)
    const isAuth = JSON.parse(localStorage.getItem('Auth'))

    const [userCreds, setUserCreds] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserCreds({ ...userCreds, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!!userCreds.email && !!userCreds.password) {
            dispatch(login(userCreds))
        } else {
            errorToast('Please enter email and password')
        }
    }

    useEffect(() => {
        if (isLogin.status === 200) {
            const isAuthorized = {
                'user': true,
                'token': isLogin.data.token
            }
            localStorage.setItem('Auth', JSON.stringify(isAuthorized))
            successToast(isLogin.data.user)
            navigate(from, { replace: true })
            navigate('/dashboard')
        }
    }, [isLogin])

        
    if(isAuth?.user) {
        return <Navigate to='/dashboard' />
    }

    return (
        <Grid container className='authPage' >
            {/* Left Side */}
            <Grid item md={8} className='authContainer'>
                <Typography variant='h4' maxWidth={500} fontWeight='700' textAlign='center' mb={5} >
                    Hi, Welcome Back
                </Typography>
                <img src={authMainImage} alt='Auth Main Image' />
            </Grid>
            {/* Right Side */}
            <Grid item md={4} sm={12} className='formContainer' padding={6}>
                <Typography variant='h4' fontWeight={600} mb={1}>
                    Sign in to Dashboard
                </Typography>
                <Typography variant='h6' mb={4} fontSize={14}>New user?
                    <Link underline='hover' ml={1} onClick={() => navigate('/register')}>
                        Create an account
                    </Link>
                </Typography>
                <Grid container spacing={3} component='form' onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                        <TextField fullWidth color='Dark' label='Email address' name='email' value={userCreds.email} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth color='Dark' label='Password' name='password' value={userCreds.password} type='password' onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} textAlign='right'>
                        <Link variant='link' underline='always' fontSize={14} onClick={() => navigate('/reset-password')}>
                            Forgot Password ?
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <CommonButton fullWidth={true} buttonText='Login' />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login