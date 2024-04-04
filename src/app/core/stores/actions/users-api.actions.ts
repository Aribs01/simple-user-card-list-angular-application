import { createAction, props } from '@ngrx/store';
import {
  SupportMessageInterface,
  UserInterface,
} from '../../interfaces/user.interface';

export const GetAllUsersSucess = createAction(
  '[Users/Api] Get All Users Success',
  props<{
    users: UserInterface[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  }>()
);

export const GetAllUsersFail = createAction(
  '[Users/Api] Get All Users Fail',
  props<{
    error: string;
  }>()
);

export const GetUserByIdSucess = createAction(
  '[Users/Api] Get User By Id Success',
  props<{
    user: UserInterface;
    supportMessage?: SupportMessageInterface;
  }>()
);

export const GetUserByIdFail = createAction(
  '[Users/Api] Get User By Id Fail',
  props<{
    error: string;
  }>()
);
