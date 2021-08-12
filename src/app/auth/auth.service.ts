import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = 'http://localhost:3000/user/'

  constructor (private httpClient: HttpClient, private userService: UserService) { }

  login (username: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(`${this.baseURL}login`, {
      userName: username,
      password: password
    },
    { observe: 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.userService.saveToken(authToken);
      })
    );
  }
}
