import { environment } from './../../environments/environment';
import { TokenService } from './../auth/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal, Animals } from '../models/animal';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  userList(user: string): Observable<Animals> {
    return this.http.get<Animals>(`${API}/${user}/photos`);
  }

  findById(id: number):Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }

}
