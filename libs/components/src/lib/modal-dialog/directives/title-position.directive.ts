import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uiLibTitlePositionCenter]',
})
export class TitlePositionDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.display = 'flex';
    el.nativeElement.style.justifyContent = 'center';
    el.nativeElement.style.alignContent = 'center';
  }
}
