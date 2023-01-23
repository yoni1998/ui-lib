import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uiLibLabelPositionBlock]',
})
export class LabelPositionDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.width = '10%';
  }
}
