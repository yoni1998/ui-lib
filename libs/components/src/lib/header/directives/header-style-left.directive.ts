import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uiLibHeaderStyleLeft]',
})
export class HeaderStyleLeftDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.float = 'left';
    if (el.nativeElement.localName === 'img') {
      el.nativeElement.style.display = 'inline-block';
    }
    if (el.nativeElement.localName === 'h1') {
      el.nativeElement.style.padding = '1rem';
    }
  }
}
