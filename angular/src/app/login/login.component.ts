import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, from, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup<{email: FormControl, password: FormControl}>;
  loginFailed = false;

  constructor(@Inject('AuthService') private authService: any) {
    this.loginForm = new FormGroup<{email: FormControl, password: FormControl}>({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    from(this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)).pipe(
      catchError((error) => {
        this.loginFailed = true;
        return throwError(() => error);
      })
    ).subscribe(
      response => {
        this.loginFailed = false;
      }
    );
  }

}
