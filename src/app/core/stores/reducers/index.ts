import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';

export const appFeatureKey = 'appReducer';

export interface AppState {
  [fromUsers.usersFeatureKey]: fromUsers.UserState;
}

export function reducers(state: AppState, action: Action) {
  return combineReducers({
    [fromUsers.usersFeatureKey]: fromUsers.reducer,
  })(state, action);
}

export const selectAppState = createFeatureSelector<AppState>(appFeatureKey);
