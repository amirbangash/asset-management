import React, { useState } from 'react'
import { Grid } from '@mui/material';
import PageContainer from '../../../components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import CommonButton from '../../../components/Common/CommonButton'
import CommonTextField from '../../../components/Common/CommonTextField'
import { useDispatch, useSelector } from 'react-redux';
import { updatingUser } from '../../../store/auth/actions'

const UpdateProfile = () => {

    const dispatch = useDispatch()
    const getUserInfo = JSON.parse(localStorage.getItem('userReg'))
    const { cnic, email } = getUserInfo
    const getUser = useSelector((state) => state.auth.userData)
    console.log("🚀 ~ file: UpdateProfile.jsx:16 ~ UpdateProfile ~ getUser:", getUser)

    const initialState = {
        firstName: '',
        lastName: '',
        email,
        cnic,
        role: '',
        phoneNo: '',
        level: '',
        team: '',
        organization: '',
    }
    const [updateUser, setUserUpdate] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserUpdate({ ...updateUser, [name]: value })
    }

    const handleUpdateUser = () => {
        console.log('first')
        dispatch(updatingUser(updateUser))
    }

    return (
        <PageContainer title="Update Profile" description="complete profile">

            <DashboardCard title="Update Profile">
                <Grid container spacing={4}>

                    <Grid item xs={12} md={6}>
                        <CommonTextField label='First Name' name='firstName' value={updateUser.firstName} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CommonTextField label='Last Name' name='lastName' value={updateUser.lastName} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CommonTextField label='Email Address' name='email' disabled value={email} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <CommonTextField disabled label='CNIC' value={cnic} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CommonTextField label='Role' name='role' value={updateUser.role} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CommonTextField label='Phone Number' type='number' name='phoneNo' value={updateUser.phoneNo} onChange={handleChange} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <CommonTextField label='Level' name='level' value={updateUser.level} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CommonTextField label='Team' name='team' value={updateUser.team} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <CommonTextField label='Organization' name='organization' value={updateUser.organization} onChange={handleChange} />
                    </Grid>


                    <Grid item xs={12} >
                        <CommonButton fullWidth buttonText='Update Account' onClick={handleUpdateUser} />
                    </Grid>
                </Grid>
            </DashboardCard>

        </PageContainer>
    )
}

export default UpdateProfile