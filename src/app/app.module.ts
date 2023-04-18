import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { FormsModule } from '@angular/forms';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';
import { FilterCascadePipe } from './pipes/cascade-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    FilterCascadePipe,
    SidebarSearchComponent,
  ],
  imports: [BrowserModule, NgApexchartsModule, MatIconModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
