import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ui-lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input()
  disabled: boolean | undefined;
  @Input()
  value: any = '';
  @Input()
  inputId: string | undefined;
  @Input()
  width: number | undefined;
  @Input()
  dropdownBackgroundColor: string | undefined;

  @Output() getValue = new EventEmitter();

  constructor() {}

  public writeValue(obj: any): void {
    this.value = obj;
  }

  public registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  public setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  onChange(value: any) {
    this.getValue.emit(value);
  }

  onTouched(value: any) {
    this.getValue.emit(value);
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges(): void {
    if (!this.inputId) throw new Error('[inputId] should be specified');
  }
}
