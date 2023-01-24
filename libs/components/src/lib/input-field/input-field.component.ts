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
  width: number | undefined;
  @Input()
  height: number | undefined;
  @Input()
  border: string | undefined;
  @Input()
  borderRadius: string | undefined;
  @Input()
  iconColor: string | undefined;
  @Input()
  iconClassNameWithoutPrefix: string | undefined;
  @Input()
  type: string | undefined;
  @Input()
  maxLength: number | undefined;

  @Output() inputValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.inputTypeCheck();
  }

  getValue(value: any) {
    this.inputValue.emit(value);
  }

  inputTypeCheck(): void {
    if (
      this.type === 'number' ||
      this.type === 'text' ||
      this.type === 'button' ||
      this.type === 'checkbox' ||
      this.type === 'date' ||
      this.type === 'email' ||
      this.type === 'hidden' ||
      this.type === 'image' ||
      this.type === 'password' ||
      this.type === 'range' ||
      this.type === 'submit' ||
      this.type === 'tel' ||
      this.type === 'url' ||
      this.type === 'timestamp' ||
      this.type === 'search' ||
      !this.type
    ) {
      console.log('Type input: ' + this.type);
    } else {
      console.error('Invalid input type');
    }
  }
}
