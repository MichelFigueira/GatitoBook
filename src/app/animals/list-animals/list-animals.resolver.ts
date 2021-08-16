import { UserService } from './../../services/user.service';
import { AnimalsService } from './../../services/animals.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Animals } from 'src/app/models/animal';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListAnimalsResolver implements Resolve<Animals> {

  constructor(private animalsService: AnimalsService, private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Animals> {
    return this.userService
      .userReturn()
      .pipe(switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.userList(userName);
      })
      ,take(1)
    )
  }
}
