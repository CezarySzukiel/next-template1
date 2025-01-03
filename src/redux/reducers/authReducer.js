import { authInitialState } from '../initialStates/authInitialState';
import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_START, LOGOUT_SUCCESS } from '../constants/authConstants';

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, isAuthenticated: true, loading: false };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT_START:
      return { ...state, loading: true, error: null };
    case LOGOUT_SUCCESS:
      return { ...state, token: null, isAuthenticated: false, loading: false };
    case LOGOUT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default authReducer;
