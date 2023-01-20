import { formatDate } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Action, FULL_SCREEN_ICON } from '../../table.types';
import { jsPDF } from 'jspdf';
import { ObjectUtils } from 'primeng/utils';
@Component({
  selector: 'ui-lib-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TableHeaderComponent {
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input()
  numberOfCheckedItems!: number;
  @Input() actions: string | undefined;
  @Input() checkedItems: any;
  @Input() columns: any;
  @Input() tableRef: any;
  @Input() exportId: string | undefined;
  @Input() dataKey: string | undefined;
  @Input() list: any;
  @Input() id: any;
  @Input() fullscreen: any;

  @Output()
  actionEmit: EventEmitter<Action> = new EventEmitter<Action>();
  @Output()
  toggleFullscreenEmit: EventEmitter<Action> = new EventEmitter<Action>();

  subscription: Subscription | undefined;

  sortOrder: number | undefined;

  FULL_SCREEN_ICON = FULL_SCREEN_ICON;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public trackByNaam(index: number, item: any) {
    return item.naam;
  }

  /**
   * Export
   */
  public exportCsv() {
    let csvData = '';
    const csvHeaders: string[] = [];
    const columnNames: string[] = [];
    const exportFilename = this.getExportFileName();

    for (let i = 0; i < this.columns.length; i++) {
      csvHeaders.push('"' + this.columns[i].label + '"');
      columnNames.push(this.columns[i].name);
    }
    csvData += csvHeaders.join(';') + '\n';
    /** using This.tableRef.value to get sorted list for export */
    csvData += this.convertDataToCsvData(
      this.tableRef.value,
      columnNames,
      this.checkedItems,
      this.numberOfCheckedItems
    );

    const blob = new Blob(['\uFEFF' + csvData], {
      type: 'text/csv;charset=utf-8;',
    });
    const nav = window.navigator as any;
    if (nav.msSaveOrOpenBlob) {
      nav.msSaveOrOpenBlob(blob, exportFilename + '.csv');
    } else {
      const link = document.createElement('a');
      link.style.display = 'none';
      document.body.appendChild(link);
      if (link.download !== undefined) {
        link.setAttribute('href', URL.createObjectURL(blob));
        link.setAttribute('download', exportFilename + '.csv');
        link.click();
      } else {
        csvData = 'data:text/csv;charset=utf-8,' + csvData;
        window.open(encodeURI(csvData));
      }
      document.body.removeChild(link);
    }
  }

  public getUniqueKey(item: { [x: string]: any; id: any }) {
    return this.dataKey ? item[this.dataKey] : item.id;
  }

  /** convert table data to csv data for export */
  private convertDataToCsvData(
    data: any[],
    columns: any[],
    checkedItems: any,
    numberOfCheckedItems: number
  ): string {
    let csvData = '';
    data.forEach((record) => {
      if (numberOfCheckedItems !== 0) {
        /** export selected data */
        if (checkedItems[this.getUniqueKey(record)] === true) {
          csvData +=
            this.constructCsvCellData(record, columns).join(';') + '\n';
        }
      } else {
        /** export full dataset, because nothing is selected */
        csvData += this.constructCsvCellData(record, columns).join(';') + '\n';
      }
    });
    return csvData;
  }

  public resolveFieldData(data: any, field: any): any {
    return ObjectUtils.resolveFieldData(data, field);
  }

  /** build csv cell data */
  private constructCsvCellData(record: any, columnNames: any[]): string[] {
    const cellData: string[] = [];
    columnNames.forEach((naam) => {
      const fieldValue = this.resolveFieldData(record, naam);
      let cellDataItem =
        fieldValue === undefined || fieldValue === null ? '' : fieldValue;
      if (typeof fieldValue === 'boolean') {
        cellDataItem = fieldValue ? '"Ja"' : '"Nee"';
      } else if (!Number.isFinite(fieldValue)) {
        /*** replace double quotes to 2x double qoutes */
        cellDataItem =
          '"' +
          (fieldValue && fieldValue.toString
            ? fieldValue.toString().replaceAll(`"`, `""`)
            : '') +
          '"';
      }
      cellData.push(cellDataItem);
    });
    return cellData;
  }

  public exportPdf() {
    const doc = new jsPDF();
    const exportFilename = this.getExportFileName();

    doc.addPage();

    doc.save(exportFilename + '.pdf');
  }

  private getExportId(): string {
    const exportPart = this.exportId ? this.exportId : this.id;
    if (exportPart && exportPart.trim().length > 0) {
      return exportPart;
    }
    return exportPart;
  }

  private getExportFileName(): string {
    const currentDate = formatDate(new Date(), 'yyyyMMdd', 'nl-BE');
    return currentDate + '_' + this.getExportId();
  }

  public performAction(action: Action, item?: any) {
    if (action.disabled) return;

    if (action.name === 'csv') {
      this.exportCsv();
    } else if (action.name === 'pdf') {
      this.exportPdf();
    } else {
      if (item) {
        // perform the action on one item
        action.data = [item];
      } else {
        // perform the action on a set of items
        action.data = [];
        Object.keys(this.checkedItems).forEach((id) => {
          if (this.checkedItems[id]) {
            const itemToAdd = this.list.find(
              (a: { id: number }) => a.id === Number(id)
            );
            if (itemToAdd) {
              action.data?.push(itemToAdd);
            }
          }
        });
      }
      this.actionEmit.emit(action);
    }
  }
}
