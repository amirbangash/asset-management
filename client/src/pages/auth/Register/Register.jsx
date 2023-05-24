import React, { useState } from 'react'
import { Grid, Typography, TextField, Link, Button } from '@mui/material'
import authMainImage from '../../../_metronic/assets/images/loginImg.png'
import '../authStyle.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, register } from '../../../store/auth/actions'
import CommonButton from '../../../components/Common/CommonButton'
import CommonTextField from '../../../components/Common/CommonTextField'

const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    const [createUser, setCreateUser] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateUser({ ...createUser, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(createUser))
    }


    return (
        <Grid container className='authPage' >
            {/* Left Side */}
            <Grid item xs={8} className='authContainer'>
                <Typography variant='h4' maxWidth={500} fontWeight='700' textAlign='center' mb={5} >
                    Manage the job more effectively with Minimal
                </Typography>
                <img src={authMainImage} />
            </Grid>
            {/* Right Side */}
            <Grid item xs={4} className='formContainer' padding={6}>
                <Typography variant='h4' fontWeight={600} mb={1}>
                    Get started.
                </Typography>
                <Typography variant='h6' mb={4} fontSize={14}>
                    Already have an account?
                    <Link underline='hover' ml={1} onClick={() => navigate('/')}>Sign in</Link>
                </Typography>
                <Grid container component='form' onSubmit={handleSubmit} spacing={3}>
                    <Grid item xs={6}>
                        <CommonTextField label='First Name' name='firstName' value={createUser.firstName} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <CommonTextField label='Last Name' name='lastName' value={createUser.lastName} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <CommonTextField label='Email address' name='email' value={createUser.email} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <CommonTextField label='Password' type='password' name='password' value={createUser.password} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <CommonButton fullWidth={true} buttonText='Create Account' />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Register