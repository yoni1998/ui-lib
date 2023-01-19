import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() appName: string | undefined;
  @Input() navigationList: string[] | undefined;
  @Input() logo: string | undefined;
  @Input() headerColor: string | undefined;
}
