import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { IUser, User } from '../models/user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  users!: Promise<IUser>;
  usersArr!: User[];
  usernames: string[] = [];
  alertMsgObj!: { message: string; type: string };
  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.authService.autoLogin();

    this.users = this.dataService._getUsers().then((data) => {
      console.log(data);
      this.usersArr = Object.values(data);
      this.usernames = this.usersArr.map((user) => user.name);

      console.log(this.usernames);

      return data;
    });
  }

  onLogin(signinform: NgForm) {
    const username = signinform.form.get('username')?.value;
    const user = this.usersArr.find((user) => user.name === username) as User;

    this.snackBar.open(`Welcome back! ${user?.name}`, undefined, {
      duration: 3000,
      panelClass: 'green-snackbar',
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.authService.login(user);
  }
}
