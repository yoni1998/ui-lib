import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  @Input()
  public disabled = false;
  @Input()
  public readonly = false;
  @Input()
  public value: number | undefined;
  @Input()
  public inputId: string | undefined;
  @Input()
  public placeholder = '';
  @Input()
  public inputStyle: string | undefined;
  @Input()
  public inputClass: string | undefined;
}
