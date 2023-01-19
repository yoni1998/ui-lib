import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  @Input() label: string | undefined;
  @Input() labelClass: string | undefined;
}
