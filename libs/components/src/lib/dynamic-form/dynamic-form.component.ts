import { DynamicFormBase } from './dynamic-form.base';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from './service/dynamic-form.service';
@Component({
  selector: 'ui-lib-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: DynamicFormBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private flds: DynamicFormService) {}

  ngOnInit() {
    this.form = this.flds.toFormGroup(this.fields as DynamicFormBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
