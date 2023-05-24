import React from 'react'
import TextField from '@mui/material/TextField'

const CommonTextField = ({ label, name, type, color, fullWidth, value, onChange }) => {
    return (
        <TextField
            label={label || 'Label'}
            name={name}
            type={type || 'text'}
            color={color || 'Dark'}
            fullWidth={fullWidth || true}
            value={value}
            onChange={onChange}
        />
    )
}

export default CommonTextField