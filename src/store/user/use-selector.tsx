import { createSelector } from 'reselect';

import { UserState } from './user-reducer';
import { Rootstate } from '../store';

export const selectUserReducer = (state:Rootstate):  UserState  => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);