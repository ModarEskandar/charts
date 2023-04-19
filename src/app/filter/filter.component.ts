import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() itemsList!: any[];
  @Input() targetProp!: string;
  selectedFilter: string = 'All';
  @Output() selectedFilterChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onChangeSelectedFilter() {
    this.selectedFilterChanged.emit(this.selectedFilter);
  }
}
