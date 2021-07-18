import IPCActionTypes from '../../types/ipc';

const INITIAL_STATE = {
  history: [],
  error: null,
  loading: false,
};

const ipcReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IPCActionTypes.FETCH_HISTORY:
      return {
        ...state,
        loading: true,
      };
    case IPCActionTypes.FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload,
        error: null,
        loading: false,
      };
    case IPCActionTypes.FETCH_HISTORY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default ipcReducer;
