import { switchMap } from 'rxjs/operators';
import { AnimalsService } from './../../services/animals.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Animals } from 'src/app/models/animal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent implements OnInit {

  animals$!: Observable<Animals>;

  constructor(private userService: UserService, private animalsService: AnimalsService) { }

  ngOnInit(): void {
    console.log(this.userService.userReturn());
    this.animals$ = this.userService.userReturn().pipe(
      switchMap((user)=> {
        const userName = user.name ?? '';
        return this.animalsService.userList(userName);
      })
    )
  }

}
