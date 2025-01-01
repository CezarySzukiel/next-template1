import React from "react";
import {getContent, getLangFromClientCookie} from "../../utils/globalFunctions";

import homePL from '../../locales/pl/common.json';
import homeEN from '../../locales/en/common.json';

export default function Page() {
    const userLang = getLangFromClientCookie();
    const content = getContent(homePL, homeEN, userLang);

    return <>
        <h1>{content.message_1}</h1>
    </>
}
