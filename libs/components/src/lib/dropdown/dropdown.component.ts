import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ui-lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input()
  public disabled = false;
  @Input()
  value: any = '';
  @Input()
  inputId: string | undefined;
  @Input() width: string | undefined;

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

  onChange(value: any) {}

  onTouched() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.inputId) throw new Error('[inputId] should be specified');
  }
}
