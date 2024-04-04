import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { UserAction, UserActionApi } from '../actions';
import { UsersService } from '../../services/users.service';

@Injectable()
export class UsersEffects {
  getAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.GetAllUsers),
      switchMap(({ page }) =>
        this.usersService.getUsersList(page).pipe(
          map(({ data, page, per_page, total_pages, total }) =>
            UserActionApi.GetAllUsersSucess({
              users: data,
              page: page,
              per_page: per_page,
              total: total,
              total_pages: total_pages,
            })
          ),
          catchError((error) => {
            return of(UserActionApi.GetAllUsersFail({ error }));
          })
        )
      )
    )
  );

  getUserDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.GetUserById),
      switchMap(({ userId }) =>
        this.usersService.getUserDetail(userId).pipe(
          map(({ data, support }) =>
            UserActionApi.GetUserByIdSucess({
              user: data,
              supportMessage: support,
            })
          ),
          catchError((error) => {
            return of(UserActionApi.GetUserByIdFail({ error }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
