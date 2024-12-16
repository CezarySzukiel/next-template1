'use client';
import {FormControl, MenuItem, Select} from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import i18n from '../../i18n'
import {useState} from "react";
import Cookies from 'js-cookie';


export default function LangSelect() {
    const {t, lang} = useTranslation('common')
    const languages = i18n.locales
    const [language, setLanguage] = useState(Cookies.get('language') || i18n.defaultLocale)

    const handleChange = (event) => {
        setLanguage(event.target.value)
        Cookies.set('language', event.target.value, {expires: 360})
        window.location.href = `/?lang=${event.target.value}`
    }

    return (
        <FormControl sx={{minWidth: 50, alignItems: 'center'}}>
            <Select value={language}
                    variant={'standard'}
                    disableUnderline={true}
                    onChange={handleChange}
                    sx={{
                        '.MuiInput-input': {
                            backgroundColor: 'transparent!important',
                        },
                    }}
            >
                {languages.map((value) => (
                    <MenuItem key={value}
                              value={value}
                              sx={{
                                  backgroundColor: 'transparent!important',
                              }}
                    >
                        {value.toUpperCase()}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}