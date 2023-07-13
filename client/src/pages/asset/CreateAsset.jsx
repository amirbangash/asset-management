import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { useSelector, useDispatch } from 'react-redux';
import { dialogAction } from '../../store/uiState/action';
import DashboardCard from '../../components/shared/DashboardCard';
import { Checkbox, Grid, IconButton } from '@mui/material';
import CommonTextField from '../../components/Common/CommonTextField';
import CommonButton from '../../components/Common/CommonButton';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from 'date-fns'
import { createAsset } from '../../store/asset/action';
import { errorToast } from '../../utilities/toastify';
import { createAssetSchema } from '../../Validations/ProductValidations'


const CreateAsset = () => {

    const dispatch = useDispatch()
    const { isDialogOpen } = useSelector((state) => state.uiState)

    const initialState = {
        name: '',
        make: '',
        itemDescription: '',
        inStock: true,
        purchasedDate: '',
        price: '',
        paymentMethod: '',
        productLife: '',
        dateOfIssuance: '',
        dateOfReturn: '',
    }
    const [asset, setAsset] = useState(initialState)

    const handleClose = () => {
        dispatch(dialogAction(false))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAsset({ ...asset, [name]: value })
    }

    const handleSubmit = async () => {
        const isValid = await createAssetSchema.isValid(asset)
        if (isValid) {
            dispatch(createAsset(asset))
            setAsset(initialState)
            dispatch(dialogAction(false))
        } else {
            errorToast('Please fill the product details')
        }
    }

    return (
        <Dialog
            open={isDialogOpen}
            onClose={handleClose}
            sx={{
                '& .css-vu4or7-MuiPaper-root-MuiCard-root': {
                    overflow: 'auto'
                }
            }}
        >
            <DashboardCard title="Create Asset"
                action={
                    <IconButton onClick={handleClose} color='error'>
                        <CloseIcon />
                    </IconButton>
                }
            >
                <Grid container spacing={4} alignItems='center' sx={{ overflow: 'auto' }} >
                    <Grid item xs={12} lg={6}>
                        <CommonTextField label='Name' name='name' value={asset.name} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <CommonTextField label='Make' name='make' value={asset.make} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <CommonTextField label='Description' name='itemDescription' value={asset.itemDescription} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} lg={6} display='flex' alignItems='center' justifyContent='space-between'>
                        <InputLabel el id='inStock'>In Stock</InputLabel>
                        <Checkbox value={asset.inStock} name='inStock' defaultChecked onClick={() => {
                            setAsset({ ...asset, inStock: !asset.inStock })
                        }} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label='Purchased Date' onChange={(newValue) => { setAsset({ ...asset, purchasedDate: format(newValue.$d, 'MM-dd-yyyy') }) }} slotProps={{
                                textField: { color: 'Dark', fullWidth: true }
                            }} />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <CommonTextField label='Price' name='price' value={asset.price} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <CommonTextField label='Payment Method' name='paymentMethod' value={asset.paymentMethod} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <CommonTextField label='Product Life' name='productLife' value={asset.productLife} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label='Date Of Issuance' onChange={(newValue) => { setAsset({ ...asset, dateOfIssuance: format(newValue.$d, 'MM-dd-yyyy') }) }} slotProps={{
                                textField: { color: 'Dark', fullWidth: true }
                            }} />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label='Date Of Return' onChange={(newValue) => { setAsset({ ...asset, dateOfReturn: format(newValue.$d, 'MM-dd-yyyy') }) }} slotProps={{
                                textField: { color: 'Dark', fullWidth: true }
                            }} />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item textAlign='end' md={12}>
                        <CommonButton color='primary' startIcon={<CheckCircleOutlineIcon />} onClick={handleSubmit} >Submit Asset</CommonButton>
                    </Grid>

                </Grid>

            </DashboardCard>
        </Dialog>
    )
}

export default CreateAsset