import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.authService.autoLogin();
  }
  isLoading = true;
  error = '';
  user!: Subscription;
  onLogin(signinform: NgForm) {
    const username = signinform.form.get('username')?.value;
    const password = signinform.form.get('password')?.value;
    const user = {
      lang: 'AR',
      userName: username as string,
      userPassword: password as string,
      // lang: 'AR',
      // userName: 'cdiadmin',
      // userPassword: 'P@ssw0rd',
    };

    this.authService.signIn(user).subscribe(
      (resData) => {
        console.log(resData);
        this.snackBar.open(`${user?.userName} أهلاً بعودتك `, undefined, {
          duration: 3000,
          panelClass: 'green-snackbar',
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.router.navigate(['home']);

        this.isLoading = false;
      },
      (error) => {
        this.error = 'خطأ في البيانات';
        this.snackBar.open(this.error, undefined, {
          duration: 3000,
          panelClass: 'red-snackbar',
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.isLoading = false;
      }
    );
  }
}
