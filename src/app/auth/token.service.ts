import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

constructor() { }

tokenReturn() {
  return localStorage.getItem(KEY) ?? '';
}

tokenSave(token: string) {
  localStorage.setItem(KEY, token);
}

tokenRemove() {
  localStorage.removeItem(KEY);
}

tokenCheck() {
  return !!this.tokenReturn();
}

}
