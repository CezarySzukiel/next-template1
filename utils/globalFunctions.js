import Cookies from "js-cookie";

export function getLangFromClientCookie() {
    const {cookies} = require('next/headers');
    const cookieStore = cookies();
    return cookieStore.get('NEXT_LOCALE_')?.value || "pl";
}

export const getContent = (contentPL, contentEN, userLang) => {
    /** get content based on user language
     * @param {object} contentPL - content in Polish
     * @param {object} contentEN - content in English
     * @param {string} userLang - user language
     */
    if (userLang === "pl") {
        return contentPL;
    } else {
        return contentEN;
    }
}

export const getModeCookie = () => {
    return Cookies.get('PAGE_MODE');
}

export function getPreferredTheme() {
    /** get preferred theme from user browser on client side
     *@returns {string} "dark" or "light"
     */
    if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return undefined;
}