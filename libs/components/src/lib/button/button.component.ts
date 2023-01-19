import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  disabled: boolean | undefined;
  @Input()
  title: string | undefined;
  @Input() buttonColor: string | undefined;
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick: EventEmitter<any> = new EventEmitter();
}
