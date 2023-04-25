import { Subscription } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  authedUser: string = '';
  avatarUrl: string = '';
  private userSub!: Subscription;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user: User | null) => {
      this.isAuthenticated = !!user;
      console.log('app header on init', !!user);
      this.isAuthenticated = !!user;
      this.authedUser = user?.username as string;
      this.avatarUrl = user ? '' : '';
    });
  }
  onLogout() {
    this.snackBar.open('تم تسجيل الخروج', undefined, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['green-snackbar'],
    });
    this.authService.logout();
  }

  jobTitle = 'موظف الهيئة العامة للجمارك';
  filterText: string = '';
  filterChartsText = '';
}
