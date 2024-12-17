import { loginStart, loginSuccess, loginFailure, logoutStart, logoutSuccess, logoutFailure } from '../actionCreators/authActionCreators';

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      dispatch(loginStart());

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch(loginSuccess(data.token));
      } else {
        dispatch(loginFailure(data.error));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(logoutStart());

      const response = await fetch('/api/auth/logout', { method: 'POST' });
      if (response.ok) {
        dispatch(logoutSuccess());
      } else {
        dispatch(logoutFailure('Logout failed'));
      }
    } catch (error) {
      dispatch(logoutFailure(error.message));
    }
  };
};
