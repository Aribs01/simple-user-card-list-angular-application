import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as UserSelector from '../selectors/users.selectors';
import { UserAction } from '../actions';

@Injectable()
export class UsersFacade {
  selectLoading = this.store.pipe(select(UserSelector.selectUsersIsLoading));

  selectUsersList = this.store.pipe(select(UserSelector.selectUsersList));

  selectUsersListPageParam = this.store.pipe(
    select(UserSelector.selectUsersListPageParam)
  );

  selectUserSelectedUser = this.store.pipe(
    select(UserSelector.selectUserSelectedUser)
  );

  selectUserSelectedUserSupportMessage = this.store.pipe(
    select(UserSelector.selectUserSelectedUserSupportMessage)
  );

  constructor(private readonly store: Store) {}

  getUsersList(page: number) {
    this.store.dispatch(UserAction.GetAllUsers({ page }));
  }

  getUserDetail(userId: number) {
    this.store.dispatch(UserAction.GetUserById({ userId }));
  }

  clearUserDetails() {
    this.store.dispatch(UserAction.ClearUserDetails());
  }
}
