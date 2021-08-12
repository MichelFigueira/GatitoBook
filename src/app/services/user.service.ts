import { TokenService } from './../auth/token.service';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import  jwt_decode  from 'jwt-decode'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = 'http://localhost:3000/user/'
  private userSubject = new BehaviorSubject<User>({});

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
    if (this.tokenService.tokenCheck()){
      this.decodeToken();
    }
  }

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

  private decodeToken() {
    const token = this.tokenService.tokenReturn();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  userReturn() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.tokenSave(token);
    this.decodeToken();
  }

  logout(){
    this.tokenService.tokenRemove();
    this.userSubject.next({});
  }

  logged(){
    return this.tokenService.tokenCheck();
  }

}
