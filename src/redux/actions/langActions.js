import { SET_LANGUAGE } from "../constants/langConstants";

export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    payload: language,
});