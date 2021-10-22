import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            light: 'rgba(108,108,108,0.48)',
            main: 'rgba(108,108,108,0.3)',
            dark: 'rgba(108,108,108,0)',
            contrastText: '#282323',
        },
        secondary: {
            light: 'rgba(255,167,51,0.42)',
            main: 'rgba(232,149,149,0.44)',
            dark: '#b26500',
            contrastText: '#000',
        },
        error: {
            light: '#e89595',
            main: 'rgba(211,47,47,0.63)',
            dark: '#932020',
            contrastText: '#c9d9d8',
        }
    },
    // typography: {
    //     subtitle1:{
    //         fontFamily: 'Comic Sans MS',
    //         color: '#c9d9d8'
    //     }
    // }
})