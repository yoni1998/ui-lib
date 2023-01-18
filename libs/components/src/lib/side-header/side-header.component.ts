import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.scss'],
})
export class SideHeaderComponent {
  @Input() appName: string | undefined;
  @Input() navigationList: string[] | undefined;
  @Input() logo: string | undefined;
}
