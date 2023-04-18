import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrls: ['./sidebar-search.component.css'],
})
export class SidebarSearchComponent {
  @Input() filterText!: string;
  @Input() searchList!: any[];
}
