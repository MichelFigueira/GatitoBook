import { Component, Input, OnInit } from '@angular/core';
import { Animals } from 'src/app/models/animal';

@Component({
  selector: 'app-grid-animals',
  templateUrl: './grid-animals.component.html',
  styleUrls: ['./grid-animals.component.css']
})
export class GridAnimalsComponent implements OnInit {

  @Input() animals!: Animals;

  constructor() { }

  ngOnInit(): void {
    //this.animals = [];
  }

}
