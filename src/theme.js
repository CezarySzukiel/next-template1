'use client'
import {
    createTheme,
    responsiveFontSizes
} from "@mui/material/styles";
import {green} from "@mui/material/colors";
import {getModeCookie, getPreferredTheme} from "../utils/globalFunctions";

const mode = getModeCookie() || getPreferredTheme() || "light";

let theme = createTheme({
    palette: {
        mode: mode,
        primary: {
            dark: "#012e35",
            light: "#024d5a",
            main: "#023e48"
        },
        secondary: {
            light: "#9e00b1",
            main: "#f396fb",
            dark: "#202020E5"
        },
        ochre: {
            main: '#E3D026',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#242105',
        },
        light: {
            main: "#f5f5f5",
        },
        warning: {
            main: "#ff9800",
        },
        info: {
            main: "#e5ffdb",
        },
        success: {
            main: green[600],
        },
        text: {
            disabled: "#ffffff",
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 621,
            md: 821,
            lg: 1100,
            xl: 1900,
        },
    },
    typography: {
        htmlFontSize: 15,
        fontSize: 16,
    },
    custom: {
        margin: {
            xsmall: {
                xs: "5px",
                sm: "10px",
                md: "15px",
                lg: "20px",
                xl: "25px",
            },
            small: {
                xs: "10px",
                sm: "20px",
                md: "30px",
                lg: "40px",
                xl: "50px",
            },
            medium: {
                xs: "15px",
                sm: "30px",
                md: "45px",
                lg: "60px",
                xl: "75px",
            },
            large: {
                xs: "20px",
                sm: "50px",
                md: "90px",
                lg: "120px",
                xl: "180px",
            },
            xlarge: {
                xs: "100px",
                sm: "160px",
                md: "220px",
                lg: "300px",
                xl: "360px",
            }
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(80,80,80,0.9)',
                    color: '#fff',
                },
            },
        },

    },
});

export default responsiveFontSizes(theme);