import { createSelector } from 'reselect';

export const selectIpc = state => state.ipc;

export const selectIpcHistory = createSelector(
  [selectIpc],
  ipc => ipc.history
);