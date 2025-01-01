'use client';
import {Divider, FormControl, MenuItem, Select, Typography} from '@mui/material';
import Cookies from 'js-cookie';
import {useEffect} from "react";
import {useTheme} from "@mui/material/styles";


export default function LangSelect() {
    const languages = ['pl', 'en'];
    const languageCookie = Cookies.get('NEXT_LOCALE_')
    const language = languageCookie || 'pl';
    const theme = useTheme();

    const setLangCookie = (lang) => {
        Cookies.set('NEXT_LOCALE_', lang, {expires: 90});
    };

    const handleLangChange = (event) => {
        setLangCookie(event.target.value);
        window.location.reload();
    };

    useEffect(() => {
        if (!languageCookie) {
            setLangCookie(language);
        }
    }, []);

    const menuProps = {
        PaperProps: {
            disableAutoFocusItem: false,
        },
    };

    return (
        <>
            <Divider
                orientation="vertical"
                variant="middle"
                sx={{
                    borderBottomWidth: 3,
                    backgroundColor: "white",
                    height: "2rem",
                    marginRight: theme.custom.margin.xsmall,
                    marginLeft: theme.custom.margin.xsmall
                }}
            />
            <FormControl sx={{minWidth: 'auto'}}>
                <Select
                    value={language}
                    variant="standard"
                    disableUnderline
                    onChange={handleLangChange}
                    MenuProps={menuProps}
                    IconComponent={() => <></>}
                    sx={{
                        color: "inherit",

                        '.MuiInput-input': {
                            backgroundColor: 'transparent!important',
                            paddingRight: '0!important'
                        },
                        '.MuiSelect-select': {
                            paddingRight: '0!important',
                        },

                    }}
                >
                    {languages.map((lang) => (
                        <MenuItem key={lang} value={lang}>
                            <Typography variant="subtitle1">
                                {lang.toUpperCase()}
                            </Typography>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}
