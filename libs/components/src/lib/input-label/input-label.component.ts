import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLabelComponent {
  defaultMin = -10000000000000;
  defaultMax = 10000000000000;

  @Input() label: string | undefined;
  @Input() labelClass: string | undefined;
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
  public max: number = this.defaultMax;
  @Input()
  public min: number = this.defaultMin;

  @Input()
  public wheelStep: number | 'progressive' | undefined;
  @Input()
  public inputStyle: string | undefined;
  @Input()
  public inputClass: string | undefined;
}
