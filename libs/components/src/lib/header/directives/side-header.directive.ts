import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[uiLibSideHeader]',
})
export class SideHeaderDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.width = '15%';
    el.nativeElement.style.height = '100vh';
    el.nativeElement.style.position = 'relative';
  }
}
