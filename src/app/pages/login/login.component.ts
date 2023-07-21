import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('form') form!: NgForm;
  errorSubscribe!: Subscription;
  errorMsg: string | undefined;
  setLoading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}
  ngOnInit(): void {
    this.errorSubscribe = this.authService.errorSubject.subscribe(
      (errorMessage) => {
        this.errorMsg = errorMessage;
      }
    );
  }

  onLogin(user: { userId: string; password: string }) {
    this.setLoading = true;
    this.authService.userLogin(user);
    this.form.reset();
  }

  // gotoAdminDashboard() {
  //   this.router.navigate(['admin']);
  // }

  gotoRegister() {
    this.router.navigate(['auth', 'register']);
  }
  clearError() {
    this.errorMsg = '';
  }

  ngOnDestroy(): void {
    this.errorSubscribe.unsubscribe();
  }
}
