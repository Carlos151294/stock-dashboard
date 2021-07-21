import { createSelector } from 'reselect';

const selectAuth = state => state.auth;

export const selectAuthLoading = createSelector(
  [selectAuth],
  auth => auth.loading
);

export const selectUser = createSelector(
  [selectAuth],
  auth => auth.user
);
