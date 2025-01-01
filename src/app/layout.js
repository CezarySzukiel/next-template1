import NavBar from "../components/NavBar";
import React from "react";
import {ThemeProvider} from '@mui/material/styles';
import theme from '../theme';
import './globals.css'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {CssBaseline} from "@mui/material";
import ReduxProvider from "../redux/ReduxProvider";


export default function RootLayout({children}) {

    return (
        <html>
        <head>

        </head>
        <body>
        <AppRouterCacheProvider>
            <ReduxProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <NavBar/>
                    {children}
                </ThemeProvider>
            </ReduxProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
