import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-text-container',
  templateUrl: './text-container.component.html',
  styleUrls: ['./text-container.component.scss'],
})
export class TextContainerComponent {
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() containerPosition: string | undefined;
  @Input() containerColor: string | undefined;
  @Input() titleColor: string | undefined;
  @Input() textColor: string | undefined;
  @Input() width: number | undefined;
  @Input() height: number | undefined;
  @Input() textDecoration: string | undefined;
}
