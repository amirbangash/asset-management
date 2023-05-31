import React, { useState } from 'react'
import { Grid, Typography, Link } from '@mui/material'
import authMainImage from '../../../assets/images/loginImg.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../store/auth/actions'
import CommonButton from '../../../components/Common/CommonButton'
import CommonTextField from '../../../components/Common/CommonTextField'

const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { status } = useSelector((state) => state.auth.userData)

    const initialState = {
        cnic: '',
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

    if (status === 201) {
        navigate('/')
    }


    return (
        <Grid container >
            {/* Left Side */}
            <Grid item md={8} display={{ xs: 'none', md: 'flex' }} className='authContainer'>
                <Typography variant='h3' maxWidth={500} textAlign='center' mb={5} >
                    Manage the job more effectively with Minimal
                </Typography>
                <img src={authMainImage} alt='Image' />
            </Grid>
            {/* Right Side */}
            <Grid item md={4} sm={12} className='formContainer' padding={6}>
                <Typography variant='h3' mb={0.5}>
                    Get started.
                </Typography>
                <Typography variant='subtitle1' mb={4}>
                    Already have an account?
                    <Link underline='hover' ml={1} onClick={() => navigate('/')}>Sign in</Link>
                </Typography>
                <Grid container component='form' onSubmit={handleSubmit} spacing={3}>
                    <Grid item xs={12}>
                        <CommonTextField label='CNIC' name='cnic' value={createUser.cnic} onChange={handleChange} />
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