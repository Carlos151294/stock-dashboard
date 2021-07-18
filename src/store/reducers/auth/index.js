import AuthActionTypes from '../../types/auth';

const INITIAL_STATE = {
  user: null,
  error: null,
  loading: true,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        loading: true,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false,
      };
    case AuthActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        error: null,
        loading: false,
      };
    case AuthActionTypes.LOGIN_ERROR:
    case AuthActionTypes.LOGOUT_ERROR:
    case AuthActionTypes.CHECK_USER_SESSION_FINISHED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
