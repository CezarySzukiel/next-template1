export const getLocalizedURL = (path, lang) => {
    return lang === "en" ? path : `${path}?lang=${lang}`;
};