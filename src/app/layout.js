import NavBar from "../components/NavBar";
import React from "react";
import {ThemeProvider} from '@mui/material/styles';
import './globals.css'
import useTranslation from "next-translate/useTranslation";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {darkTheme} from "../theme";
import {CssBaseline} from "@mui/material";
import ReduxProvider from "../redux/ReduxProvider";


export default function RootLayout({children}) {

    const i18n = useTranslation()

    return (
        <html>
        <head>
            {/* ahrefs authentication script */}
            <script src="https://analytics.ahrefs.com/analytics.js" data-key="r3laZsitpYt6zRSM+0fFZw"
                    defer="true"></script>
        </head>
        <body>
        <AppRouterCacheProvider>
            <ReduxProvider>
                <ThemeProvider theme={darkTheme}>
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
