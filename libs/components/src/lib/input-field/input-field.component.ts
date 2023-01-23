import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-lib-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent implements OnInit {
  @Input()
  disabled = false;
  @Input()
  readonly = false;
  @Input()
  inputId: string | undefined;
  @Input()
  placeholder = '';
  @Input()
  inputClass: string | undefined;
  @Input()
  inputWidth: string | undefined;
  @Input()
  inputHeight: string | undefined;
  @Input()
  inputBorder: string | undefined;
  @Input()
  inputBorderRadius: string | undefined;
  @Input()
  inputIconColor: string | undefined;
  @Input()
  inputIconClassNameWithoutPrefix: string | undefined;
  @Input()
  inputType: string | undefined;

  @Output() inputValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.inputTypeCheck();
  }

  getValue(value: any) {
    this.inputValue.emit(value);
  }

  inputTypeCheck(): void {
    if (
      this.inputType === 'number' ||
      this.inputType === 'text' ||
      this.inputType === 'button' ||
      this.inputType === 'checkbox' ||
      this.inputType === 'date' ||
      this.inputType === 'email' ||
      this.inputType === 'hidden' ||
      this.inputType === 'image' ||
      this.inputType === 'password' ||
      this.inputType === 'range' ||
      this.inputType === 'submit' ||
      this.inputType === 'tel' ||
      this.inputType === 'url' ||
      this.inputType === 'timestamp' ||
      this.inputType === 'search' ||
      !this.inputType
    ) {
      console.log('Type input: ' + this.inputType);
    } else {
      console.error('Invalid input type');
    }
  }
}
