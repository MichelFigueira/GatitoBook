import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

const API = environment.apiURL;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  private baseUrl = '';

  @Input() description = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')){
      this.baseUrl = url;
    } else {
      this.baseUrl = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.baseUrl;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
