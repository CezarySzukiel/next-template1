export const getLocalizedURL = (path, lang) => {
    return lang === "pl" ? path : `${path}?lang=${lang}`;
};
