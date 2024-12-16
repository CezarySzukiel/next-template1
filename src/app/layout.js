'use client'
import NavBar from "../components/NavBar";
import React from "react";
import {ThemeProvider} from '@mui/material/styles';
import './globals.css'
import useTranslation from "next-translate/useTranslation";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {darkTheme} from "../theme";
import {CssBaseline} from "@mui/material";


export default function RootLayout({children}) {

    const i18n = useTranslation()

    return (
        <html>
        <body>
        <AppRouterCacheProvider options={{enableCssLayer: true}}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <NavBar/>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
