import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { UsersFacade } from 'src/app/core/stores/facade/users.facade';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList$: Observable<UserInterface[] | null>;
  pageParam$: Observable<{
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
  } | null>;
  loading$: Observable<boolean | null>;
  largestPageNumber = 1;
  lastPageNumber = 1;

  constructor(private usersFacade: UsersFacade) {
    this.usersList$ = this.usersFacade.selectUsersList;
    this.pageParam$ = this.usersFacade.selectUsersListPageParam;
    this.loading$ = this.usersFacade.selectLoading;
  }

  ngOnInit() {
    this.loadList();
  }

  loadList(page = 0) {
    this.usersFacade.getUsersList(page + 1);
  }

  onPaginationChange({ pageIndex }: PageEvent): void {
    if (pageIndex + 1 > this.largestPageNumber) {
      this.largestPageNumber = pageIndex + 1;
      if (pageIndex + 1 > this.lastPageNumber) {
        this.lastPageNumber = pageIndex + 1;
        this.loadList(pageIndex);
      }
    } else {
      this.largestPageNumber = pageIndex + 1;
    }
  }

  selectUserArrayFromList(arr: UserInterface[] | null) {
    if (!arr) return [];
    if (this.largestPageNumber === 1) {
      return arr.slice(0, 6);
    } else {
      return arr.slice(
        (this.largestPageNumber - 1) * 6,
        (this.largestPageNumber - 1) * 6 + 6
      );
    }
  }
}
