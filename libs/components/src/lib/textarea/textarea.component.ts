import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'ui-lib-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  public charCount = 0;
  @Input()
  disabled: boolean | undefined;
  @Input()
  value: string | undefined;
  @Input()
  placeholder: string | undefined;
  @Input()
  maxLength: number | undefined;
  @Input()
  minLength: number | undefined;
  @Input()
  inputId: string | undefined;
  @Input()
  maxHeight: number | undefined;
  @Input()
  width: number | undefined;
  @Input()
  height: number | undefined;
  @Input() textAreaColor: string | undefined;

  @Output() getValue = new EventEmitter();

  getTextareaValue(value: any) {
    this.getValue.emit(value);
  }

  updateCharCount(value: any) {
    this.charCount = value.length;
  }
}
