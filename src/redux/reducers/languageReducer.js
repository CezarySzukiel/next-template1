import { SET_LANGUAGE } from "../constants/langConstants";

const initialState = {
    language: 'pl',
}

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
}

export default languageReducer;