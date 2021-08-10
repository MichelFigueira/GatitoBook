import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = 'http://localhost:3000/user/'

  constructor (private httpClient: HttpClient) { }

  login (username: string, password: string): Observable<any>{
    return this.httpClient.post(`${this.baseURL}login`, {
      userName: username,
      password: password
    });
  }
}
