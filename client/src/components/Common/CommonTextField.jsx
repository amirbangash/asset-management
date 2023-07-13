import React from 'react'
import TextField from '@mui/material/TextField'

const CommonTextField = ({ label, name, type, color, fullWidth, value, disabled, onBlur, onChange }) => {
    return (
        <TextField
            label={label || 'Label'}
            name={name}
            type={type || 'text'}
            color={color || 'Dark'}
            fullWidth={fullWidth || true}
            value={value}
            disabled={disabled}
            onBlur={onBlur}
            onChange={onChange}
        />
    )
}

export default CommonTextField