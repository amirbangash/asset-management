import React, { useState } from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import CommonButton from '../../components/Common/CommonButton'
import CommonTextField from '../../components/Common/CommonTextField'

const UpdateProfile = () => {

    const initialState = {
        firstName: null,
        lastName: null,
        email: '',
        cnic: '',
        role: '',
        phoneNo: null,
        level: null,
        team: '',
        organization: null,
        image: null
    }
    const [updateUser, setUserUpdate] = useState(initialState)

    const handleChange = () => {

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
                        <CommonTextField label='Email Address' type='email' name='email' value={updateUser.email} onChange={handleChange} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <CommonTextField label='CNIC' name='cnic' value={updateUser.cnic} onChange={handleChange} />
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
                        <CommonButton fullWidth buttonText='Update Account' />
                    </Grid>
                </Grid>
            </DashboardCard>

        </PageContainer>
    )
}

export default UpdateProfile