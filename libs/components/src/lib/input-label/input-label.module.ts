import { InputLabelComponent } from './input-label.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelPositionDirective } from './directives/label-position.directive';

@NgModule({
  declarations: [InputLabelComponent, LabelPositionDirective],
  exports: [InputLabelComponent, LabelPositionDirective],
  imports: [CommonModule],
})
export class InputLabelModule {}
