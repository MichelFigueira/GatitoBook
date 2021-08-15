import { TokenService } from './../auth/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animals } from '../models/animal';

const API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  userList(user: string): Observable<Animals> {
    const token = this.tokenService.tokenReturn();
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.http.get<Animals>(`${API}/${user}/photos`, {
      headers,
    });
  }
}
