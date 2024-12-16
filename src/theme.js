'use client'
import {createTheme} from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#121212',
            paper: '#333',
        },
        text: {
            primary: '#fff',
            secondary: '#ccc',
        },
    },
});