import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'ui-lib-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  @Input()
  public disabled: boolean | undefined;
  @Input()
  public value = '';
  @Input()
  public placeholder = '';
  @Input()
  public maxLength: number | undefined;
  @Input()
  public minLength: number | undefined;
  @Input()
  inputId: string | undefined;
  @Input()
  maxHeight: string | undefined;
  @Input()
  width: string | undefined;
  @Input()
  height: string | undefined;
  @Input() textAreaColor: string | undefined;

  @Output() getValue = new EventEmitter();

  getTextareaValue(value: any) {
    this.getValue.emit(value);
  }
}
