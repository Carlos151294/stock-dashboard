import { all, call, put, takeLatest } from 'redux-saga/effects';

import IPCActionTypes from '../../types/ipc';
import { fetchIPCHistory } from '../../../services/ipc';
import {
  fetchIpcHistoryError,
  fetchIpcHistorySuccess,
} from '../../actions/ipc';

function* fetchHistory() {
  try {
    const ipcHistory = yield call(fetchIPCHistory);
    yield put(fetchIpcHistorySuccess(ipcHistory));
  } catch (error) {
    yield put(fetchIpcHistoryError(error));
  }
}

export default function* root() {
  yield all([takeLatest(IPCActionTypes.FETCH_HISTORY, fetchHistory)]);
}
