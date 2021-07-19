import IPCActionTypes from '../../types/ipc';

export const fetchIpcHistory = () => ({
  type: IPCActionTypes.FETCH_HISTORY,
});

export const fetchIpcHistorySuccess = (history) => ({
  type: IPCActionTypes.FETCH_HISTORY_SUCCESS,
  payload: history,
});

export const fetchIpcHistoryError = (error) => ({
  type: IPCActionTypes.FETCH_HISTORY_ERROR,
  payload: error,
});

export const toggleTheme = () => ({
  type: IPCActionTypes.TOGGLE_THEME,
});
