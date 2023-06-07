import { createTheme } from '@mui/material/styles';
import { shadows } from './Shadows';
import typography from './Typography';

export const dashboardTheme = createTheme({
    palette: {
        primary: {
            main: '#00AB55',
            lighter: '#C8FAD6',
            light: '#5BE49B',
            dark: '#004B50',
            darker: '#004B50',
            contrastText: '#fff'
        },
        secondary: {
            main: '#3366FF',
            contrastText: '#fff'
        },
        info: {
            main: '#00B8D9',
            contrastText: '#fff'
        },
        success: {
            main: '#36B37E',
            contrastText: '#fff'
        },
        warning: {
            main: '#FFAB00',
            contrastText: '#000'
        },
        error: {
            main: '#FF5630',
            contrastText: '#fff'
        },
        grey: {
            main: '#F9FAFB',
            100: '#F9FAFB',
            200: '#F4F6F8',
            300: '#DFE3E8',
            400: '#C4CDD5',
            500: '#919EAB',
            600: '#637381',
            700: '#454F5B',
            800: '#212B36',
            900: '#161C24'
        },
        Dark: {
            main: '#161C24',
            contrastText: '#fff'
        }
    },
    typography,
    shadows
});
