import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uiLibHeaderStyleLeft]',
})
export class HeaderStyleLeftDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.float = 'left';
  }
}
