import { Component } from '@angular/core';

@Component({
  selector: 'ui-lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  // header
  appName = 'frontend-ui';
  list = ['dataTable', 'footer', 'dropdown', 'form'];
  logo = 'assets/IMG.jpg';

  // footer
  facebookSocialLinks = 'https://www.facebook.com/yoni.vindelinckx/';
  twitterSocialLinks = 'https://twitter.com/elonmusk?';
  linkHeaderOptions = ['link1', 'link2', 'link3'];
  linkHeaders = ['test1', 'test2', 'test3'];
  copyRightsName = 'yoni vindelinckx';
  description =
    'Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters';

  // button
  title = 'klik hier';
  primary: 'primary' | undefined;

  // modal
  modalTitle = 'title van de modal';
  modalContent =
    'the content of this modal is used as an example to prove te concept';
  modalButtonTitle = 'Close';

  // dropdown and table
  obj = [
    { id: 2, name: 'action', email: 'sfsqf', phone: 'lqqlqq' },
    { id: 3, name: 'name', email: 'sdfqf', phone: 'llqqaaaaao' },
  ];

  // table
  tableHeaders = [
    { head: 'user name', fieldname: 'name' },
    { head: 'user name', fieldname: 'email' },
    { head: 'user name', fieldname: 'bol' },
    { head: 'action', fieldname: '' },
  ];

  editItem(data: any): void {
    console.log(data);
  }
  deleteItem(data: any): void {
    console.log(data);
  }

  // inputfield
  getValue(e: any) {
    console.log(e);
  }
  test(value: any) {
    console.log(value);
  }
}
