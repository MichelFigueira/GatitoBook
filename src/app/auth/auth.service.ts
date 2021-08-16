import { environment } from './../../environments/environment';
import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (private httpClient: HttpClient, private userService: UserService) { }

  login (username: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(`${API}/user/login`, {
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
