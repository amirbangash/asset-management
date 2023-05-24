import Button from '@mui/material/Button'

const CommonButton = ({ fullWidth, variant, color, buttonText, type, size, startIcon, endIcon }) => {
    return (
        <Button fullWidth={fullWidth} size={size} variant={variant || 'contained'} color={color || 'Dark'} type={type || 'submit'} startIcon={startIcon} endIcon={endIcon}>
            {buttonText}
        </Button>
    )
}

export default CommonButton