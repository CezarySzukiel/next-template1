"use client";
import IconButton from "@mui/material/IconButton";
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import Cookies from 'js-cookie';
import {useEffect, useState} from "react";
import {getModeCookie, getPreferredTheme} from "../../utils/globalFunctions";
import {useTheme} from "@mui/material/styles";

const setModeCookie = (mode) => {
    return Cookies.set('PAGE_MODE', mode, {expires: 90});
};


function ModeToggle() {
    const [mode, setMode] = useState(getModeCookie() || getPreferredTheme());
    const theme = useTheme()
    if (mode) {
        setModeCookie(mode);
    }
    const cookieMode = getModeCookie();

    useEffect(() => {
        setMode(getModeCookie() || getPreferredTheme());
    }, []);

    const changeMode = () => {
        if (mode === "light") {
            setMode("dark");
            setModeCookie("dark");
            window.location.reload();
        } else {
            setMode("light");
            setModeCookie("light");
            window.location.reload();
        }
    }

    return (
        <IconButton aria-label="delete" onClick={changeMode} size="small" sx={{ marginLeft: theme.custom.margin.small }}>
            {cookieMode === "light" && <LightModeRoundedIcon color="ochre" fontSize="small"/>}
            {cookieMode === "dark" && <NightsStayRoundedIcon color="light" fontSize="small"/>}
        </IconButton>
    )
}

export default ModeToggle;