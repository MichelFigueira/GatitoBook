import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$ = this.userService.userReturn();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['']);
  }

}
