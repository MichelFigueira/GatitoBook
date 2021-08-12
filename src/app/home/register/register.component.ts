import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowercaseValidator } from 'src/app/shared/lowercase/lowercase.validator';
import { matchFieldsValidators } from 'src/app/shared/match/match.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.minLength(3), lowercaseValidator], [this.userService.userValid()]],
      password: ['', [Validators.required, Validators.minLength(3)]]
      },
      { validators: [matchFieldsValidators] }
    );
  }

  register() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as User;
      this.userService.register(newUser).subscribe(
        () => {
          this.router.navigate(['']);
        },

        (error) => {
          console.log(error);
        }
      )
    }
  }

}
