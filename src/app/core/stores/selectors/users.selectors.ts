import { createSelector } from '@ngrx/store';
import * as fromApp from '../reducers';
import * as fromUsers from '../reducers/users.reducer';

const selectUsersState = createSelector(
  fromApp.selectAppState,
  (state) => state[fromUsers.usersFeatureKey]
);

export const selectUsersList = createSelector(
  selectUsersState,
  fromUsers.getUsersList
);

export const selectUsersListPageParam = createSelector(
  selectUsersState,
  fromUsers.getPageParam
);

export const selectUsersIsLoading = createSelector(
  selectUsersState,
  fromUsers.getLoading
);

export const selectUserSelectedUser = createSelector(
  selectUsersState,
  fromUsers.getSelectedUser
);

export const selectUserSelectedUserSupportMessage = createSelector(
  selectUsersState,
  fromUsers.getSelectedUserSupportMessage
);
