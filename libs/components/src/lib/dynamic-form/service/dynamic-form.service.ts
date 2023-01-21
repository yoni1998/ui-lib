import { DynamicFormBase } from './../dynamic-form.base';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class DynamicFormService {
  toFormGroup(fields: DynamicFormBase<string>[]) {
    const group: any = {};

    fields.forEach((field) => {
      group[field.key] = field.required
        ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
