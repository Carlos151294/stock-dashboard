import { all, put, takeLatest } from 'redux-saga/effects';

import AuthActionTypes from '../../types/auth';
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  checkUserSessionFinished,
} from '../../actions/auth';
import { auth, getCurrentUser, loginWithGoogle } from '../../../firebase';

function* saveUser(user) {
  try {
    yield put(
      loginSuccess({
        email: user.email,
        fullName: user.displayName,
        picture: user.photoURL,
        uid: user.uid,
      })
    );
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* login() {
  try {
    const { user } = yield loginWithGoogle();
    yield saveUser(user);
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* logout() {
  try {
    yield auth.signOut();
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      yield put(checkUserSessionFinished('User is not authenticated'));
      return;
    }

    yield saveUser(userAuth);
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export default function* root() {
  yield all([
    takeLatest(AuthActionTypes.LOGIN, login),
    takeLatest(AuthActionTypes.LOGOUT, logout),
    takeLatest(AuthActionTypes.CHECK_USER_SESSION, isUserAuthenticated),
  ]);
}
