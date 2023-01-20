import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import type { FormGroup } from '@angular/forms';
import { distinctUntilChanged, startWith, Subject } from 'rxjs';

@Component({
  selector: 'ui-lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  private formDirty$ = new Subject<boolean>();
  @Input()
  formGroup: FormGroup | undefined;
  @Input()
  errorMap: { [key: string]: string } | undefined;
  @Output()
  formSubmit = new EventEmitter<any>();
  @Output()
  formDirty = new EventEmitter<boolean>();
  submitted = false;

  ngOnInit(): void {
    this.formDirty$
      .pipe(distinctUntilChanged())
      .subscribe((dirty) => this.formDirty.emit(dirty));

    this.formGroup?.valueChanges
      .pipe(startWith(undefined as void))
      .subscribe(() => {
        if (this.submitted && this.formGroup?.dirty) {
          this.submitted = false;
        }

        this.formDirty$.next(!!this.formGroup?.dirty);
      })
      .unsubscribe();
  }
  onSubmit(): void {
    this.submitted = true;
    this.formSubmit.emit(this.formGroup?.value);
  }
}
