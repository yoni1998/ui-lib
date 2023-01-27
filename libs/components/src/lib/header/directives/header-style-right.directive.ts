import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uiLibHeaderStyleRight]',
})
export class HeaderStyleRightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.float = 'right';
    if (el.nativeElement.localName === 'img') {
      el.nativeElement.style.display = 'inline-block';
    }
    if (el.nativeElement.localName === 'h1') {
      el.nativeElement.style.padding = '1rem';
    }
  }
}
