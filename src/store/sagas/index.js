import { all, spawn } from 'redux-saga/effects';

import authSagas from './auth';
import ipcSagas from './ipc';

export default function* rootSaga() {
  yield all([
    spawn(authSagas),
    spawn(ipcSagas),
  ]);
}