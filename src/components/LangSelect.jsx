'use client';

import {FormControl, MenuItem, Select} from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import i18n from '../../i18n';
import {useEffect} from 'react';
import Cookies from 'js-cookie';

export default function LangSelect() {
    const {t, lang} = useTranslation('common');
    const languages = i18n.locales;
    const defaultLanguage = i18n.defaultLocale;
    const language = Cookies.get('NEXT_LOCALE_') || defaultLanguage;
    const setLangCookie = (lang) => {
        Cookies.set('NEXT_LOCALE_', lang, {expires: 90});
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const langQueryParam = params.get('lang');

        if (langQueryParam && languages.includes(langQueryParam)) {
            setLangCookie(langQueryParam);
        } else {
            params.set('lang', language);
            window.location.search = params.toString();
        }
    }, [language, languages]);

    const handleChange = (event) => {
        const selectedLang = event.target.value;
        setLangCookie(selectedLang);

        const params = new URLSearchParams(window.location.search);
        params.set('lang', selectedLang);
        window.location.search = params.toString();
    };

    return (
        <FormControl sx={{minWidth: 50}}>
            <Select
                value={language}
                variant="standard"
                disableUnderline
                onChange={handleChange}
                sx={{
                    '.MuiInput-input': {backgroundColor: 'transparent!important'},
                }}
            >
                {languages.map((lang) => (
                    <MenuItem key={lang} value={lang}>
                        {lang.toUpperCase()}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
