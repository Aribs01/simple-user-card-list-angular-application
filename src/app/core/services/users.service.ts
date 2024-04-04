import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseInterface, UserInterface } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsersList(page: number) {
    return this.http.get<ResponseInterface<UserInterface[]>>(
      `${environment.api_url}/users?page=${page}`
    );
  }

  getUserDetail(userId: number) {
    return this.http.get<ResponseInterface<UserInterface>>(
      `${environment.api_url}/users/${userId}`
    );
  }
}
