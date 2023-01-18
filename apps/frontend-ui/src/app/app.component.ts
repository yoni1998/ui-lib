import { Component } from '@angular/core';

@Component({
  selector: 'ui-lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appName = 'frontend-ui';
  list = ['dataTable', 'footer', 'dropdown', 'form'];
  logo = 'assets/IMG.jpg';
}
