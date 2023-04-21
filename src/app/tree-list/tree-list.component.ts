import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css'],
})
export class TreeListComponent {
  @Input() parent: any;
  @Input() filterText!: string;
  @Input() id!: number;
  @Input() index!: number;
}
