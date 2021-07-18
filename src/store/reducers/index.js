import { combineReducers } from 'redux';

import authReducer from '../reducers/auth';
import ipcReducer from '../reducers/ipc';

const rootReducer = combineReducers({
  auth: authReducer,
  ipc: ipcReducer,
});

export default rootReducer;
