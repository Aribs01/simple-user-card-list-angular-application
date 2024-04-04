import { createReducer, on } from '@ngrx/store';
import * as Actions from '../actions';
import {
  SupportMessageInterface,
  UserInterface,
} from '../../interfaces/user.interface';

export const usersFeatureKey = 'users';

export interface UserState {
  isLoading: boolean;
  userList: UserInterface[];
  selectedUser: UserInterface | null;
  selectedUserSupportMessage: SupportMessageInterface | null | undefined;
  page: number;
  pageParams: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
}

const initialState: UserState = {
  isLoading: false,
  userList: [],
  selectedUser: null,
  selectedUserSupportMessage: null,
  page: 1,
  pageParams: {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
  },
};

export const reducer = createReducer(
  initialState,
  on(Actions.UserAction.GetAllUsers, (state, { page }) => ({
    ...state,
    isLoading: true,
    page: page,
  })),
  on(
    Actions.UserActionApi.GetAllUsersSucess,
    (state, { users, page, per_page, total, total_pages }) => ({
      ...state,
      isLoading: false,
      userList: [...state.userList, ...users],
      pageParams: {
        page,
        per_page,
        total,
        total_pages,
      },
    })
  ),

  on(Actions.UserAction.GetUserById, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(
    Actions.UserActionApi.GetUserByIdSucess,
    (state, { user, supportMessage }) => ({
      ...state,
      isLoading: false,
      selectedUser: user,
      selectedUserSupportMessage: supportMessage,
    })
  ),

  on(Actions.UserAction.ClearUserDetails, (state) => ({
    ...state,
    selectedUser: null,
    selectedUserSupportMessage: null,
  }))
);

export const getLoading = (state: UserState) => state.isLoading;

export const getUsersList = (state: UserState) => state.userList;

export const getPageParam = (state: UserState) => state.pageParams;

export const getSelectedUser = (state: UserState) => state.selectedUser;

export const getSelectedUserSupportMessage = (state: UserState) =>
  state.selectedUserSupportMessage;
