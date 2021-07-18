import AuthActionTypes from '../../types/auth';

export const login = (credentials) => ({
  type: AuthActionTypes.LOGIN,
  payload: credentials,
});

export const loginSuccess = (user) => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: AuthActionTypes.LOGIN_ERROR,
  payload: error,
});

export const logout = () => ({
  type: AuthActionTypes.LOGOUT,
});

export const logoutSuccess = () => ({
  type: AuthActionTypes.LOGOUT_SUCCESS,
});

export const logoutFailure = (error) => ({
  type: AuthActionTypes.LOGOUT_ERROR,
  payload: error,
});

export const checkUserSession = () => ({
  type: AuthActionTypes.CHECK_USER_SESSION,
});

export const checkUserSessionFinished = (error) => ({
  type: AuthActionTypes.CHECK_USER_SESSION_FINISHED,
  payload: error,
});
