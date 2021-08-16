import { ActivatedRoute } from '@angular/router';
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

  animals!: Animals;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.animals = this.activatedRoute.snapshot.data['animals'];
    })
  }

}
