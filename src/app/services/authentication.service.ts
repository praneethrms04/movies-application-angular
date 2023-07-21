import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject, tap } from 'rxjs';
import { Router } from '@angular/router';
import { userRegister } from '../models/userRegister';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user: User = {
    userId: '',
    password: '',
  };

  registerUser: userRegister = {
    userId: '',
    password: '',
    name: '',
    email: '',
    userTypes: '',
  };

  obj = {
    accessToken: '',
    email: '',
    name: '',
    userId: '',
    userStatus: '',
    userTypes: '',
  };

  errorSubject = new Subject<string>();
  successSubject = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {}

  userLogin(user: User) {
    return this.http
      .post('https://mba-3izp.onrender.com/mba/api/v1/auth/signin', user)
      .subscribe({
        next: (userDetails: any) => {
          this.obj = userDetails;
          let token = this.obj.accessToken;
          if (token) {
            localStorage.setItem('token', token);
          }
          this.router.navigate(['admin', 'movies']);
        },
        error: (error) => {
          this.errorSubject.next(error.error.message);
        },
      });
  }

  userRegister(registerForm: FormGroup) {
    this.http
      .post(
        'https://mba-3izp.onrender.com/mba/api/v1/auth/signup',
        registerForm.value
      )

      .subscribe({
        next: (res) => {
          console.log(res);
          this.successSubject.next('User successfully Registered ...!');
        },
        error: (error) => {
          this.errorSubject.next(error.error.message);
        },
      });
  }
}
