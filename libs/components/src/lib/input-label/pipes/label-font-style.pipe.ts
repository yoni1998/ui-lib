import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelFontStyle'
})
export class LabelFontStylePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
