import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup<{email: FormControl, password: FormControl}>;
  loginFailed = false;

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup<{email: FormControl, password: FormControl}>({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).pipe(
      catchError((error) => {
        this.loginFailed = true;
        return throwError(() => error);
      })
    ).subscribe(
      response => {
        this.router.navigate(['users'], { queryParams: { email: this.loginForm.controls.email.value }})
      }
    );
  }

}
