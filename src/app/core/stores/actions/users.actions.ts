import { createAction, props } from '@ngrx/store';

export const GetAllUsers = createAction(
  '[Users] Get All User',
  props<{
    page: number;
  }>()
);

export const GetUserById = createAction(
  '[Users] Get User By ID',
  props<{
    userId: number;
  }>()
);

export const ClearUserDetails = createAction('[Users] Clear User Details');
