import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

const API = environment.apiURL;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  private defaultUrl = '';

  @Input() description = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')){
      this.defaultUrl = url;
    } else {
      this.defaultUrl = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.defaultUrl;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
