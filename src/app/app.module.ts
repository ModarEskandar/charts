import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { FormsModule } from '@angular/forms';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';
import { FilterCascadePipe } from './pipes/cascade-filter.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { FilterSidbarMenuPipe } from './pipes/filter-sidebar-menu.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeListComponent } from './tree-list/tree-list.component';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChartsComponent,
    FilterCascadePipe,
    FilterPipe,
    SearchComponent,
    SidebarSearchComponent,
    FilterComponent,
    SearchComponent,
    FilterSidbarMenuPipe,
    HighlightPipe,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    TreeListComponent,
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
