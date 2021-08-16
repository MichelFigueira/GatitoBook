import { environment } from './../../environments/environment';
import { TokenService } from './../auth/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Animal, Animals } from '../models/animal';
import { catchError, mapTo } from 'rxjs/operators';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  userList(user: string): Observable<Animals> {
    return this.http.get<Animals>(`${API}/${user}/photos`);
  }

  findById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }

  deleteAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  like(id: number): Observable<any> {
    return this.http
    .post(`${API}/photos/${id}/like`, {}, { observe: 'response' })
    .pipe(mapTo(true),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
