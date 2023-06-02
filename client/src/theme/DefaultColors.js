import { createTheme } from '@mui/material/styles';
import { shadows } from './Shadows';
import typography from './Typography';
import Button from '@mui/material/Button'

export const dashboardTheme = createTheme({
    palette: {
        primary: {
            main: '#00AB55',
            contrastText: '#fff'
        },
        Secondary: {
            main: '#3366FF',
            contrastText: '#fff'
        },
        Info: {
            main: '#00B8D9',
            contrastText: '#fff'
        },
        Success: {
            main: '#36B37E',
            contrastText: '#fff'
        },
        Warning: {
            main: '#FFAB00',
            contrastText: '#000'
        },
        Error: {
            main: '#FF5630',
            contrastText: '#fff'
        },
        Gray: {
            main: '#919EAB',
        },
        Dark: {
            main: '#161C24',
            contrastText: '#fff'
        }
    },
    typography,
    shadows
});
