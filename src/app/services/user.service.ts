import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = 'http://localhost:3000/user/'

  constructor(private httpClient: HttpClient) { }

  register(newUser: User) {
    return this.httpClient.post(`${this.baseURL}signup`, newUser);
  }

  checkUser(user: string) {
    return this.httpClient.get(`${this.baseURL}exists/${user}`);
  }

  userValid(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((username) =>
          this.checkUser(username)
        ),
        map((userExist) => (userExist ? {userOk: true} : null)
        ),
        first()
      );
    }
  }

}
