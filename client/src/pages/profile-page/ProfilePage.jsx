import React from 'react'
import { Typography } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const ProfilePage = () => {
    return (
        <PageContainer title='My Profile'>
            <DashboardCard title="My Profile">
                <Typography>This is a Profile page</Typography>
            </DashboardCard>
        </PageContainer>
    )
}

export default ProfilePage