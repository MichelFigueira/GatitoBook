import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = 'http://localhost:3000/user/'

  constructor(private httpClient: HttpClient) { }

  register(newUser: User) {
    return this.httpClient.post(`${this.baseURL}signup`, newUser);
  }

}
