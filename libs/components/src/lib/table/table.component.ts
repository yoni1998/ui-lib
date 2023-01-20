import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Action, Column, ScrollConfig, SortField } from './table.types';

@Component({
  selector: 'ui-lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() columns: any[] = [];
  @Input() dataList: any[] = [];
  @Input() isAction = false;

  @Output() EditItem = new EventEmitter<any>();
  @Output() DeleteItem = new EventEmitter<any>();

  editItem(item: any): void {
    this.EditItem.emit(item);
  }
  deleteItem(item: any): void {
    this.DeleteItem.emit(item);
  }
}
