import { IconType } from '../icons/icons.type';

export const DOWNLOAD_ICON: IconType = {
  icon: 'fa-download',
  label: 'Downloaden',
};

export const FULL_SCREEN_ICON: IconType = {
  icon: 'fa-arrows-alt',
  label: 'Scherm maximaliseren',
};

export const TRASH_ICON: IconType = {
  icon: 'fa-trash',
  label: 'Verwijderen',
};

export const EDIT_ICON: IconType = {
  icon: 'fa-edit',
  label: 'Wijzigen',
};

export const ADD_ICON: IconType = {
  icon: 'fa-plus',
  label: 'Toevoegen',
};

export class CheckboxFilter {
  id: string;
  label: string;
  numberOfItems: number;

  constructor(props: { id: string; label: string; numberOfItems: number }) {
    this.id = props.id;
    this.label = props.label;
    this.numberOfItems = props.numberOfItems;
  }
}

export class Column {
  label: string | undefined;
  name: string | undefined;
  type: ColumnType | undefined;
  showFilterInHeader = true;
  /**
   * Type of filterValue is dependent on ColumnType<br/>
   * ColumnType.Number -> number<br/>
   * ColumnType.String -> string<br/>
   * ColumnType.Boolean -> boolean | boolean[]<br/>
   * ColumnType.Date -> LocalDate<br/>
   * ColumnType.Object -> string | string []<br/>
   * The arrays make it possible to filter on multiple values with the multiselect input
   **/
  filterValue?: any;
  cellStyle?: string;
}

export enum ColumnType {
  Number = 'Number',
  String = 'String',
  Boolean = 'Boolean',
  Date = 'Date',
  DateTime = 'DateTime',
  Time = 'Time',
  Object = 'Object',
  FilledIn = 'FilledIn',
}

export class Action {
  label?: string;
  name: string | undefined;
  iconType?: IconType;
  multiple?: boolean;
  single?: boolean;
  data?: any[];
  disabled?: boolean;
  disabledHelperText?: string;
}

export const enum SortFieldOrder {
  DescendingTrueFirst = -1,
  AscendingFalseFirst = 1,
}

export class SortField {
  field: string | undefined;
  // order: SortFieldOrder;
}

// Eventueel DatatableConfig maken en alle optionele properties daarin zetten en in template indien property defined is gebruiken, anders default
export class ScrollConfig {
  scrollable: boolean | undefined;
  scrollHeight: string | undefined;
}

export interface ActiveItemChangedData {
  activeItem: any;
  isFirstChange: boolean;
}
