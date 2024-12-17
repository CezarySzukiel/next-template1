import { configureStore } from "@reduxjs/toolkit";
import languageReducer  from "./reducers/languageReducer";
import authReducer from './reducers/authReducer';


const store = configureStore({
  reducer: { auth: authReducer, language: languageReducer},
});

export default store;