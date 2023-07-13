import Button from '@mui/material/Button'

const CommonButton = ({ fullWidth, variant, color, type, size, startIcon, endIcon, onClick, children }) => {
    return (
        <Button fullWidth={fullWidth} size={size} variant={variant || 'contained'} color={color || 'Dark'} type={type || 'submit'} startIcon={startIcon} endIcon={endIcon} onClick={onClick}>
            {children}
        </Button>
    )
}

export default CommonButton