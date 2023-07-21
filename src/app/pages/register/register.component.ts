import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  errorMsg!: string;
  successMsg!: string;
  errsubscription!: Subscription;
  subscribe!: Subscription;
  setLoading: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      userId: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
        ),
      ]),
      userTypes: new FormControl('CUSTOMER'),
    });
  }

  ngOnInit(): void {
    this.errsubscription = this.authService.errorSubject.subscribe((error) => {
      this.errorMsg = error;
    });
    this.subscribe = this.authService.successSubject.subscribe((success) => {
      this.successMsg = success;
    });
  }

  onRegister() {
    this.setLoading = true;
    this.authService.userRegister(this.registerForm);
  }

  gotoLogin() {
    this.router.navigate(['auth', 'login']);
  }

  errorCancel() {
    this.errorMsg = '';
    this.setLoading = false;
  }

  successCancel() {
    this.gotoLogin();
    this.successMsg = '';
  }

  ngOnDestroy(): void {
    this.errsubscription.unsubscribe();
    this.subscribe.unsubscribe();
  }
}
