import { Subscription } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  appTitle = 'Polling';
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
    this.userSub = this.authService.loggedUser.subscribe(
      (user: User | null) => {
        this.isAuthenticated = !!user;
        console.log('app header on init', !!user);
        this.isAuthenticated = !!user;
        this.authedUser = user?.name as string;
        this.avatarUrl = user?.avatarURL as string;
      }
    );
  }
  onLogout() {
    this.snackBar.open('Logged out successfully', undefined, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['green-snackbar'],
    });
    this.authService.logout();
  }
  @Input() open!: boolean;

  jobTitle = 'موظف الهيئة العامة للجمارك';
  filterText: string = '';
  filterChartsText = '';
}
