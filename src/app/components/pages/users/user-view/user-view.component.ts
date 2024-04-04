import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  SupportMessageInterface,
  UserInterface,
} from 'src/app/core/interfaces/user.interface';
import { UsersFacade } from 'src/app/core/stores/facade/users.facade';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit, OnDestroy {
  selectedUser$: Observable<UserInterface | null>;
  selectedUserSupportMessage$: Observable<
    SupportMessageInterface | null | undefined
  >;
  loading$: Observable<boolean | null>;
  userId = this.activatedRoute.snapshot.paramMap.get('userId');

  constructor(
    private usersFacade: UsersFacade,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.selectedUser$ = this.usersFacade.selectUserSelectedUser;
    this.selectedUserSupportMessage$ =
      this.usersFacade.selectUserSelectedUserSupportMessage;
    this.loading$ = this.usersFacade.selectLoading;
  }

  ngOnInit() {
    this.loadUserDetail();
  }

  loadUserDetail() {
    if (this.userId) {
      this.usersFacade.getUserDetail(Number(this.userId));
    }
  }

  goBackToUserList() {
    this.router.navigateByUrl(`users/list`);
  }

  ngOnDestroy() {
    this.usersFacade.clearUserDetails();
  }
}
