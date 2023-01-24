import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent {
  @Input() containerColor: string | undefined;
  @Input() width: number | undefined;
  @Input() height: number | undefined;
  @Input() borderRadius: number | undefined;
}
