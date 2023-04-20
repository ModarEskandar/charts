import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() open!: boolean;
  // @Input() filteredList!: any[];
  filterText: string = '';

  // searchList = [...this.filteredList];

  // selecteItemsFilter: string = 'All';
  // onSelecteItemsFilterChanged(data: string) {
  //   console.log('this.searchList', this.searchList);
  //   this.selecteItemsFilter = data;
  //   if (data === 'All') this.filteredList = [...this.searchList];
  //   else
  //     this.filteredList = this.searchList.filter((item) => item.name === data);
  // }
}
