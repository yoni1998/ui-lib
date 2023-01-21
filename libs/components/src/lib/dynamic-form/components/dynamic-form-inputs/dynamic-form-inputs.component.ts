import { DynamicFormBase } from './../../dynamic-form.base';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ui-lib-dynamic-form-inputs',
  templateUrl: './dynamic-form-inputs.component.html',
  styleUrls: ['./dynamic-form-inputs.component.scss'],
})
export class DynamicFormInputsComponent {
  @Input() field!: DynamicFormBase<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.field.key].valid;
  }
}
