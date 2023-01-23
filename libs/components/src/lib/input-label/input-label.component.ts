import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLabelComponent {
  @Input() label: string | undefined;
}
